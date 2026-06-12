import { collection } from "./db.ts";

async function createDocument() {

  await collection.insert(
    "DOC001",
    {
      title: "NodeJS Basics",
      pages: 100
    }
  );

  console.log("Created");
}

createDocument();