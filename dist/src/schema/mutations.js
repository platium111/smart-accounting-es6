"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = undefined;

var _graphql = require("graphql");

var mongoose = require("mongoose");
var CustomerType = require("./types/customer");

// const Customer = mongoose.model("customer");

var mutations = exports.mutations = new _graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCustomer: {
      type: CustomerType,
      args: {
        fullName: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        age: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) },
        city: { type: _graphql.GraphQLString }
      },
      resolve: function resolve(parentValue, _ref) {
        // return new Customer({ fullName, age }).save();
        // return axios
        //   .post("http://localhost:3000/customers", { fullName, age })
        //   .then(response => response.data);

        var fullName = _ref.fullName,
            age = _ref.age;
      }
    }
  }
});