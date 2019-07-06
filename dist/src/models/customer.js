"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomerType = undefined;

var _graphql = require("graphql");

var _city = require("./city");

/* 
Customer has "city"
Need API : cities/id. Id from customer which is "cityId"
*/
var CustomerType = exports.CustomerType = new _graphql.GraphQLObjectType({
  name: "Customer",
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      fullName: { type: _graphql.GraphQLString },
      age: { type: _graphql.GraphQLInt },
      city: {
        type: _city.CityType,
        resolve: function resolve(parentValue, args) {
          return axios.get("http://localhost:3000/cities/" + parentValue.cityId).then(function (response) {
            return response.data;
          });
        }
      }
    };
  }
});