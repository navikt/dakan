"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SelectOpplysningstype = require("./SelectOpplysningstype");

Object.keys(_SelectOpplysningstype).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SelectOpplysningstype[key];
    }
  });
});