"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CityType = undefined;

var _graphql = require("graphql");

var _customer = require("./customer");

/* 
City has many "customers". 
Need to have API to get to cities/id/customers. Only Id from city
*/
var CityType = exports.CityType = new _graphql.GraphQLObjectType({
  name: "City",
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      name: { type: _graphql.GraphQLString },
      customers: {
        type: new _graphql.GraphQLList(_customer.CustomerType),
        resolve: function resolve(parentValue, args) {
          return axios.get("http://localhost:3000/cities/" + parentValue.id + "/customers").then(function (response) {
            return response.data;
          });
        }
      }
    };
  }
});