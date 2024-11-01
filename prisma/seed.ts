import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    const user = {
      username: faker.internet.username(),
      name: faker.person.firstName(),
      bio: faker.lorem.paragraph(),
      link: faker.internet.url(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
    } satisfies Prisma.UserCreateInput;

    const dbUser = await prisma.user.create({ data: user });
    users.push(dbUser);
  }

  const posts = [];

  for (let i = 0; i < 100; i++) {
    const randomUserIndex = faker.number.int({
      min: 0,
      max: users.length - 1,
    });

    const randomWorldCount = faker.number.int({
      min: 5,
      max: 20,
    });

    const post = {
      content: faker.lorem.sentence(randomWorldCount),
      userId: users[randomUserIndex].id,
    } satisfies Prisma.PostUncheckedCreateInput;

    const createdPosts = await prisma.post.create({ data: post });

    posts.push(createdPosts);
  }

  for (let i = 0; i < 200; i++) {
    const randomUserIndex = faker.number.int({
      min: 0,
      max: users.length - 1,
    });

    const randomPostIndex = faker.number.int({
      min: 0,
      max: posts.length - 1,
    });

    const like = {
      postId: posts[randomPostIndex].id,
      userId: users[randomUserIndex].id,
    } satisfies Prisma.LikeUncheckedCreateInput;

    await prisma.like.create({ data: like });
  }
};

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
