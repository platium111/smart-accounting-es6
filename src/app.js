import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import schema from "./schema/schema";

const app = express();

const MONGO_URI =
  "mongodb+srv://hieptq:hiepdaiceu@cluster0-qymdm.mongodb.net/test?retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("you don't provide MongoDB URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", error => console.log("Error connecting to MongoLab:", error));

app.use(bodyParser.json());

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
