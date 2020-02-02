"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CitySchema = exports.CitySchema = new Schema({
  name: { type: String },
  customers: [{
    type: Schema.Types.ObjectId,
    ref: "customer"
  }]
});

CitySchema.statics.findCustomers = function (id) {
  return undefined.findById(id).populate("customers").then(function (city) {
    return city.customers;
  }).catch(function (err) {
    return console.log(err);
  });
};

CitySchema.statics.addCustomer = function (id, customer) {
  var Customer = mongoose.model("customer");

  return undefined.findById(id).then(function (city) {
    var customer = new Customer({ customer: customer, city: city });
    city.customers.push(customer);
    return Promise.all([customer.save(), city.save()]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          customer = _ref2[0],
          city = _ref2[1];

      return city;
    });
  });
};

mongoose.model("city", CitySchema);