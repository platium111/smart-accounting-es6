"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require("express-graphql");

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require("./schema/schema");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var MONGO_URI = "mongodb+srv://hieptq:hiepdaiceu@cluster0-qymdm.mongodb.net/test?retryWrites=true&w=majority";
if (!MONGO_URI) {
  throw new Error("you don't provide MongoDB URI");
}

app.use("/graphql", (0, _expressGraphql2.default)({
  schema: _schema2.default,
  graphiql: true
}));

app.listen(4000, function () {
  console.log("listening started");
});