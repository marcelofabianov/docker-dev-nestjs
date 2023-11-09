import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const account = await prisma.account.create({
    data: {
      id: faker.string.uuid(),
      name: faker.company.name(),
      registrationDocument: '123456789',
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      inactivatedAt: null,
      deletedAt: null,
    },
  });

  const user = await prisma.user.create({
    data: {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      inactivatedAt: null,
      deletedAt: null,
      accountId: account.id,
    },
  });

  console.log({ account, user });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
