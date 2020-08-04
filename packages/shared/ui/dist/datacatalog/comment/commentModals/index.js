"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addCommentModal = require("./addCommentModal");

Object.keys(_addCommentModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _addCommentModal[key];
    }
  });
});

var _deleteCommentModal = require("./deleteCommentModal");

Object.keys(_deleteCommentModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _deleteCommentModal[key];
    }
  });
});

var _editCommentModal = require("./editCommentModal");

Object.keys(_editCommentModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _editCommentModal[key];
    }
  });
});