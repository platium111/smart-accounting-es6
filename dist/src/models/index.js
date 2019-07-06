"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customer = require("./customer");

Object.keys(_customer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _customer[key];
    }
  });
});

var _city = require("./city");

Object.keys(_city).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _city[key];
    }
  });
});