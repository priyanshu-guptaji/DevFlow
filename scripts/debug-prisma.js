/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  console.log("accountCount", await db.account.count());
  console.log("userCount", await db.user.count());

  try {
    const sample = await db.account.findMany({ take: 5 });
    console.log(
      "sampleAccounts",
      sample.map((x) => ({
        id: x.id,
        provider: x.provider,
        providerAccountId: x.providerAccountId,
        userId: x.userId,
      }))
    );
  } catch (e) {
    console.error("findMany failed", e.code || e.name, e.message);
  }
}

main()
  .catch((e) => {
    console.error("fatal", e.code || e.name, e.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
