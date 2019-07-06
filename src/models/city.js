import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import { CustomerType } from "./customer";

/* 
City has many "customers". 
Need to have API to get to cities/id/customers. Only Id from city
*/
export const CityType = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/cities/${parentValue.id}/customers`)
          .then(response => response.data);
      }
    }
  })
});
