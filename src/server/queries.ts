import "server-only";

import { db } from "./db";

export async function getMyBoards() {
  // const user = auth();

  // if (!user.userId) throw new Error("Unauthorized");

  const boards = await db.query.boards.findMany({
    // where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });

  return boards;
}
