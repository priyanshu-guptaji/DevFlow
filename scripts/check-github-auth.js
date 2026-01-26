/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  const githubAccounts = await db.account.findMany({
    where: { provider: "github" },
    orderBy: { id: "desc" },
    take: 20,
  });

  console.log("githubAccounts", githubAccounts.length);

  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  console.log("recentUsers", users.length);

  const byUserId = new Map(users.map((u) => [u.id, u]));

  const out = githubAccounts.map((a) => {
    const u = byUserId.get(a.userId);
    return {
      accountId: a.id,
      provider: a.provider,
      providerAccountId: a.providerAccountId,
      userId: a.userId,
      userEmail: u?.email,
      userName: u?.name,
      userCreatedAt: u?.createdAt,
    };
  });

  console.log(JSON.stringify(out, null, 2));
}

main()
  .catch((e) => {
    console.error("fatal", e.code || e.name, e.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
