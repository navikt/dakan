"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GetValue = void 0;

var GetValue = function GetValue(func) {
  var fallBackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Ingen data';

  try {
    var value = func();
    return value === null || value === undefined ? fallBackValue : value;
  } catch (e) {
    return fallBackValue;
  }
};

exports.GetValue = GetValue;
var _default = GetValue;
exports["default"] = _default;