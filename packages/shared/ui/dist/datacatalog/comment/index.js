"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ToggleComments = require("./ToggleComments");

Object.keys(_ToggleComments).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ToggleComments[key];
    }
  });
});

var _commentModals = require("./commentModals");

Object.keys(_commentModals).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _commentModals[key];
    }
  });
});