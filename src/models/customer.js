import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from "graphql";
import {CityType} from "./city";
/* 
Customer has "city"
Need API : cities/id. Id from customer which is "cityId"
*/
export const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLString },
    fullName: { type: GraphQLString },
    age: { type: GraphQLInt },
    city: {
      type: CityType,
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/cities/${parentValue.cityId}`)
          .then(response => response.data);
      }
    }
  })
});
