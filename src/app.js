import express from "express";
import expressGraphQL from "express-graphql";
import schema from "./schema/schema";

const app = express();

const MONGO_URI =
  "mongodb+srv://hieptq:hiepdaiceu@cluster0-qymdm.mongodb.net/test?retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("you don't provide MongoDB URI");
}

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening started");
});
