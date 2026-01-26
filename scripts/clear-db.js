/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Clearing database...');
    try {
        await prisma.account.deleteMany();
        console.log('Deleted all accounts.');
        await prisma.user.deleteMany();
        console.log('Deleted all users.');
        console.log('Database cleared successfully.');
    } catch (error) {
        console.error('Error clearing database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
