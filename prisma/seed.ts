import bcrypt from "bcryptjs";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client";
import { config } from "dotenv";

// Load .env.local first (has priority), then .env as fallback
config({ path: ".env.local" });
config({ path: ".env" });

const BCRYPT_ROUNDS = 12;

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error("Error: ADMIN_EMAIL and ADMIN_PASSWORD must be set in environment variables.");
    console.error("Add them to your .env.local file:");
    console.error("  ADMIN_EMAIL=your@email.com");
    console.error("  ADMIN_PASSWORD=your-secure-password");
    process.exit(1);
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("Error: DATABASE_URL must be set in environment variables.");
    process.exit(1);
  }

  const adapter = new PrismaNeon({ connectionString });
  const db = new PrismaClient({ adapter });

  console.log("Seeding admin user...");

  const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);

  const admin = await db.admin.upsert({
    where: { email: email.toLowerCase() },
    update: {
      passwordHash,
    },
    create: {
      email: email.toLowerCase(),
      passwordHash,
    },
  });

  console.log(`Admin user created/updated: ${admin.email}`);

  await db.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
