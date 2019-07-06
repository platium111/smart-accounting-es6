import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
import CustomerType from "../models/customer";

export const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addCustomer: {
      type: CustomerType,
      args: {
        fullName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        city: { type: GraphQLString }
      },
      resolve(parentValue, { fullName, age }) {
        return axios
          .post("http://localhost:3000/customers", { fullName, age })
          .then(response => response.data);
      }
    }
  }
});
