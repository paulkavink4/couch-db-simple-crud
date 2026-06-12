import {collection} from "./db.ts"

async function deleteDocument(){
    await collection.remove("DOC001")
    console.log("Deleted Successfully!");
    
}
deleteDocument()