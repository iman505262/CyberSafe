
// CREATE: Add a cybersecurity tip and its category to the database.
// The browser sends both title and category to this function.

import { getDatabase } from "@netlify/database";

const db = getDatabase();

export default async function handler(req) {
  const data = await req.json();

  // Save the tip and category in the database
  await db.sql`
    INSERT INTO items (title, category)
    VALUES (${data.title}, ${data.category})
  `;

  return Response.json({ message: "Cybersecurity tip added" });
}

export const config = { path: "/api/add-item" };
