import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from "graphql";
import axios from "axios";
import mutations from "./mutations";
import { CustomerType } from "../models/customer";
import { CityType } from "../models/city";

// resolve function looking for data with `args`, data can be from other sources
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        // return _.find(customers, { id: args.id });
        return axios
          .get(`http://localhost:3000/customers/${args.id}`)
          .then(response => response.data);
      }
    },
    city: {
      type: CityType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/cities/${args.id}`)
          .then(response => response.data);
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutations
});
