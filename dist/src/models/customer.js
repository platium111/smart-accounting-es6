"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  fullName: { type: String },
  age: { type: Number },
  city: {
    type: Schema.Types.ObjectId,
    ref: "city"
  }
});

CustomerSchema.statics.findCity = function (id) {
  return undefined.findById(id).populate("city", 'melbourne').then(function (customer) {
    return customer.city;
  }).catch(function (err) {
    return console.log(err);
  });
};

mongoose.model("customer", CustomerSchema);