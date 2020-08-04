"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accordion = require("./accordion");

Object.keys(_accordion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _accordion[key];
    }
  });
});

var _catalogheader = require("./catalogheader");

Object.keys(_catalogheader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _catalogheader[key];
    }
  });
});

var _comment = require("./comment");

Object.keys(_comment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _comment[key];
    }
  });
});

var _labeledContent = require("./labeledContent");

Object.keys(_labeledContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _labeledContent[key];
    }
  });
});

var _selectOpplysningstype = require("./selectOpplysningstype");

Object.keys(_selectOpplysningstype).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectOpplysningstype[key];
    }
  });
});