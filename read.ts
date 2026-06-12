import { collection } from "./db.ts";

async function readDocument() {
  const result = await collection.get("DOC001");
  console.log(result.content);
}
readDocument()