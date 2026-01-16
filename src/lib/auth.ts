import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { openAPI } from "better-auth/plugins";

import { env } from "~/env";
import { db } from "~/server/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  rateLimit: {
    max: 100,
    window: 60,
    enabled: true,
  },
  plugins: [
    openAPI({
      // disableDefaultReference: false,
      disableDefaultReference: env.NODE_ENV === "production",
    }),
    nextCookies(), // must go last
  ],
});

export type Session = typeof auth.$Infer.Session;
