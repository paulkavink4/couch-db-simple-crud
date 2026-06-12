# 📘 Day 10 – CouchBase CRUD with Scopes & Collections

## 🗂️ Topics Covered

- CouchBase **Scopes & Collections** (beyond default collection)
- Standalone CRUD scripts in TypeScript
- `collection.insert()` — Create
- `collection.get()` — Read
- `collection.upsert()` — Update
- `collection.remove()` — Delete

---

## 🏗️ Project Structure

```
📁 project/
├── db.ts        ← CouchBase connection & collection export
├── create.ts    ← Insert a document
├── read.ts      ← Fetch a document by key
├── update.ts    ← Update a document
└── delete.ts    ← Delete a document
```

---

## 🔌 Database Connection (`db.ts`)

Today used **Scopes & Collections** — a more specific way to target data inside a bucket.

```typescript
import couchbase from "couchbase";

const cluster = await couchbase.connect("couchbases://your-cluster-url", {
  username: "nodejs-user",
  password: "yourpassword"
});

const bucket = cluster.bucket("users");

// Scope → Collection (instead of defaultCollection())
const collection = bucket.scope("_default").collection("admins");

export { collection };
```

### CouchBase Hierarchy

```
Cluster
  └── Bucket ("users")
        └── Scope ("_default")
              └── Collection ("admins")   ← targeted specifically today
```

> Previously used `bucket.defaultCollection()` — today used `bucket.scope().collection()` to target a **specific named collection** inside a scope.

---

## 🔷 CRUD Operations

### ➕ Create (`create.ts`)
```typescript
await collection.insert("DOC001", {
  title: "NodeJS Basics",
  pages: 100
});
```
- `insert()` adds a **new** document with the given key.
- Throws an error if the key already exists.

---

### 📖 Read (`read.ts`)
```typescript
const result = await collection.get("DOC001");
console.log(result.content); // actual document data
```
- `get()` fetches by key.
- Data lives in `result.content`.

---

### ✏️ Update (`update.ts`)
```typescript
await collection.upsert("DOC001", {
  title: "Advanced JS Modules",
  pages: 400
});
```
- `upsert()` = **update if exists, insert if not**.
- Safer than `insert()` when you're not sure if the doc exists.

---

### 🗑️ Delete (`delete.ts`)
```typescript
await collection.remove("DOC001");
```
- `remove()` deletes the document with the given key.

---

## 💡 Quick Cheat Sheet

| Operation | Method | Behaviour |
|---|---|---|
| Create | `collection.insert(key, data)` | Fails if key exists |
| Read | `collection.get(key)` → `.content` | Fetch by key |
| Update | `collection.upsert(key, data)` | Insert or overwrite |
| Delete | `collection.remove(key)` | Remove by key |
| Specific collection | `bucket.scope("name").collection("name")` | Target named collection |

---

## 🧠 Today's Summary

- Practiced all **4 CouchBase CRUD operations** as individual focused scripts.
- Learned the difference between `defaultCollection()` vs `scope().collection()` — targeting a **specific collection** inside a bucket.
- Understood when to use `insert()` vs `upsert()` — insert fails on duplicate keys, upsert doesn't.
- Reinforced `async/await` usage for every database operation.

> **Stack:** TypeScript · Node.js · CouchBase Capella  
> **Day:** 10 of TypeScript Fundamentals
