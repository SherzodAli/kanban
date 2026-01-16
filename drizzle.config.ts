import { type Config } from "drizzle-kit";

import { env } from "~/env";

console.log(env);

export default {
  schema: ["./src/server/db/schema.ts", "./src/server/db/schema-auth.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
