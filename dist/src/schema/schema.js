"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _mutations = require("./mutations");

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootQuery = require("./types/root_query");
exports.default = new _graphql.GraphQLSchema({
  query: RootQuery,
  mutations: _mutations2.default
});