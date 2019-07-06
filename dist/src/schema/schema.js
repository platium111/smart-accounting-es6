"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _mutations = require("./mutations");

var _mutations2 = _interopRequireDefault(_mutations);

var _customer = require("../models/customer");

var _city = require("../models/city");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// resolve function looking for data with `args`, data can be from other sources
var RootQuery = new _graphql.GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: _customer.CustomerType,
      args: {
        id: {
          type: _graphql.GraphQLString
        }
      },
      resolve: function resolve(parentValue, args) {
        // return _.find(customers, { id: args.id });
        return _axios2.default.get("http://localhost:3000/customers/" + args.id).then(function (response) {
          return response.data;
        });
      }
    },
    city: {
      type: _city.CityType,
      args: {
        id: { type: _graphql.GraphQLString }
      },
      resolve: function resolve(parentValue, args) {
        return _axios2.default.get("http://localhost:3000/cities/" + args.id).then(function (response) {
          return response.data;
        });
      }
    }
  }
});

exports.default = new _graphql.GraphQLSchema({
  query: RootQuery,
  mutations: _mutations2.default
});