/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function findLegacyAccounts() {
  const res = await db.$runCommandRaw({
    find: "Account",
    filter: {
      provider_account_id: { $exists: true },
    },
    projection: {
      _id: 1,
      provider: 1,
      provider_account_id: 1,
      user_id: 1,
    },
    limit: 500,
  });

  return res?.cursor?.firstBatch || [];
}

async function canonicalExists({ provider, providerAccountId, user_id }) {
  const res = await db.$runCommandRaw({
    find: "Account",
    filter: {
      provider,
      providerAccountId,
      user_id,
    },
    projection: { _id: 1 },
    limit: 1,
  });

  const docs = res?.cursor?.firstBatch || [];
  return docs.length > 0;
}

async function deleteById(_id) {
  await db.$runCommandRaw({
    delete: "Account",
    deletes: [{ q: { _id }, limit: 1 }],
  });
}

async function migrateById(_id, providerAccountId) {
  await db.$runCommandRaw({
    update: "Account",
    updates: [
      {
        q: { _id },
        u: {
          $set: { providerAccountId },
          $unset: { provider_account_id: 1 },
        },
        upsert: false,
        multi: false,
      },
    ],
  });
}

async function main() {
  const legacy = await findLegacyAccounts();

  if (legacy.length === 0) {
    console.log("No legacy accounts found (provider_account_id)");
    return;
  }

  let deleted = 0;
  let migrated = 0;

  for (const doc of legacy) {
    const provider = doc.provider;
    const providerAccountId = doc.provider_account_id;
    const user_id = doc.user_id;

    if (!provider || !providerAccountId || !user_id) {
      // If it's missing key fields, it's not usable for NextAuth anyway.
      await deleteById(doc._id);
      deleted++;
      continue;
    }

    if (await canonicalExists({ provider, providerAccountId, user_id })) {
      await deleteById(doc._id);
      deleted++;
    } else {
      await migrateById(doc._id, providerAccountId);
      migrated++;
    }
  }

  console.log(
    JSON.stringify(
      {
        legacyFound: legacy.length,
        migrated,
        deleted,
      },
      null,
      2
    )
  );
}

main()
  .catch((e) => {
    console.error("fatal", e.code || e.name, e.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
