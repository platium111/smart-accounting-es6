import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from "graphql";
const mongoose = require("mongoose");

// const Customer = mongoose.model("customer");
/* 
Customer has "city"
Need API : cities/id. Id from customer which is "cityId"
*/
const CustomerType = new GraphQLObjectType({
  name: "CustomerType",
  fields: () => ({
    id: { type: GraphQLString },
    fullName: { type: GraphQLString },
    age: { type: GraphQLInt },
    city: {
      type: require("./city"),
      resolve(parentValue, args) {
        //   return axios
        //     .get(`http://localhost:3000/cities/${parentValue.cityId}`)
        //     .then(response => response.data);
        // return Customer.findCity(parentValue)
        //   .populate("city")
        //   .then(customer => {
        //     console.log(customer);
        //     return customer.city;
        //   });
      }
    }
  })
});

module.exports = CustomerType;
