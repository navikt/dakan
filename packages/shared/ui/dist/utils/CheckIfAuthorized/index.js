"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CheckIfAuthorized = require("./CheckIfAuthorized");

Object.keys(_CheckIfAuthorized).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CheckIfAuthorized[key];
    }
  });
});