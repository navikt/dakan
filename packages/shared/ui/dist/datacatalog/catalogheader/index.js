"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CatalogHeader = require("./CatalogHeader");

Object.keys(_CatalogHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CatalogHeader[key];
    }
  });
});