import { collection } from "./db.ts";

async function updateDocument() {
  await collection.upsert("DOC001", {
    title: "Advanced JS Modules",
    pages: 400,
  });
  console.log("Update Successfull");
}

updateDocument();
