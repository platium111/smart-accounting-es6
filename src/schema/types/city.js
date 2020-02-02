import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
const mongoose = require("mongoose");

import { CustomerType } from "./customer";
// const City = mongoose.model("city");
/* 
City has many "customers". 
Need to have API to get to cities/id/customers. Only Id from city
*/
const CityType = new GraphQLObjectType({
  name: "CityType",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        // return City.findCustomers(parentValue)
        //   .populate("customers")
        //   .then(city => {
        //     console.log(city);
        //     return city.customers;
        //   });
      }
    }
  })
});

module.exports = CityType;
