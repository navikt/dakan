"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Panel = require("./Panel");

Object.keys(_Panel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Panel[key];
    }
  });
});