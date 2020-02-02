import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from "graphql";

const RootQuery = require("./types/root_query");
import mutations from "./mutations";

export default new GraphQLSchema({
  query: RootQuery,
  mutations
});
