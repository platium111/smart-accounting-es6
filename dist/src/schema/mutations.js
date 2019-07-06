"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = undefined;

var _graphql = require("graphql");

var _customer = require("../models/customer");

var _customer2 = _interopRequireDefault(_customer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutations = exports.mutations = new _graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCustomer: {
      type: _customer2.default,
      args: {
        fullName: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        age: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt) },
        city: { type: _graphql.GraphQLString }
      },
      resolve: function resolve(parentValue, _ref) {
        var fullName = _ref.fullName,
            age = _ref.age;

        return axios.post("http://localhost:3000/customers", { fullName: fullName, age: age }).then(function (response) {
          return response.data;
        });
      }
    }
  }
});