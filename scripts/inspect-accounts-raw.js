/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  const res = await db.$runCommandRaw({
    find: "Account",
    filter: {},
    projection: {
      _id: 1,
      provider: 1,
      providerAccountId: 1,
      provider_account_id: 1,
      user_id: 1,
      userId: 1,
      type: 1,
    },
    limit: 50,
  });

  const docs = res?.cursor?.firstBatch || [];
  console.log(
    JSON.stringify(
      docs.map((d) => ({
        _id: d._id,
        provider: d.provider,
        providerAccountId: d.providerAccountId,
        provider_account_id: d.provider_account_id,
        user_id: d.user_id,
        userId: d.userId,
        type: d.type,
      })),
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
