"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GetCurrentDate = require("./GetCurrentDate");

Object.keys(_GetCurrentDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GetCurrentDate[key];
    }
  });
});