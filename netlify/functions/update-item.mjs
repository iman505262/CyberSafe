
// UPDATE: Changes the cybersecurity tip and its category.
// The browser sends the item id, title, and category.

import { getDatabase } from "@netlify/database";

const db = getDatabase();

export default async function handler(req) {
  const data = await req.json();

  // Update both the tip and its category
  await db.sql`
    UPDATE items
    SET title = ${data.title},
        category = ${data.category}
    WHERE id = ${data.id}
  `;

  return Response.json({ message: "Cybersecurity tip updated" });
}

export const config = { path: "/api/update-item" };
