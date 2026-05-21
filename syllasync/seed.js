const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const email = "ahnjy1210@gmail.com";
  const passwordHash = "123456789"; // Plain text for now as per our auth implementation

  // Check if user exists
  let user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        name: "Professor Ahn",
        email,
        passwordHash,
        role: "PROFESSOR"
      }
    });
    console.log("Created professor account:", user.email);
  } else {
    // Update password and role just in case
    user = await prisma.user.update({
      where: { email },
      data: { passwordHash, role: "PROFESSOR" }
    });
    console.log("Updated professor account:", user.email);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
