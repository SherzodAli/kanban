import { headers } from "next/headers";
import Link from "next/link";

import EntryButton from "~/components/entry-button";
import { Button } from "~/components/ui";
import { env } from "~/env";
import { auth } from "~/lib/auth";
import { authClient } from "~/lib/auth-client";
import { db } from "~/server/db";
import { getMyBoards } from "~/server/queries";
import { signOutAction } from "~/server/queries-auth";
import BestComponent from "./compo";

export default async function Home() {
  const a = env.DATABASE_URL;
  const boards = await getMyBoards();
  console.log(env);
  console.log(boards, "boards");

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Cosden Solutions</h1>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h3 className="text-4xl font-bold">Cosden Solutions</h3>
      <div className="mt-8 text-center">
        <p className="mb-4 text-lg">User ID: {session.user.id}</p>
        <p className="mb-4 text-lg">User ID: {session.user.email}</p>
        <p className="mb-4 text-lg">User ID: {session.user.name}</p>
        <p className="mb-4 text-lg">
          User ID: {session.user.createdAt.toString()}
        </p>
        <form action={signOutAction}>
          <Button type="submit" size="lg">
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}
