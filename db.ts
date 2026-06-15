import couchbase from "couchbase";
const cluster = await couchbase.connect(
  "cluster-url",
  {
    username: "your-user-name",
    password: "your-password",
  }
);

const bucket = cluster.bucket("users");

const collection =
  bucket.scope("_default").collection("admins");

export { collection };
