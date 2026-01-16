import { drizzle } from "drizzle-orm/node-postgres";

import { env } from "~/env";
import * as appSchema from "./schema";
import * as authSchema from "./schema-auth";

const schema = {
  ...appSchema,
  ...authSchema,
};

// Use this object to send drizzle queries to your DB
// export const db = drizzle(sql, { schema });
export const db = drizzle(env.DATABASE_URL!, { schema });
