"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RightChevronHoverIcon = exports.RightChevronIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RightChevronIcon = function RightChevronIcon(_ref) {
  var size = _ref.size,
      fill = _ref.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.29898 2.74775C3.90034 2.34793 3.90034 1.69969 4.29898 1.29987C4.69761 0.900044 5.34393 0.900044 5.74257 1.29987L11.701 7.27606C12.0997 7.67588 12.0997 8.32412 11.701 8.72394L5.74257 14.7001C5.34393 15.1 4.69761 15.1 4.29898 14.7001C3.90034 14.3003 3.90034 13.6521 4.29898 13.2522L9.53564 8L4.29898 2.74775Z"
  }));
};

exports.RightChevronIcon = RightChevronIcon;

var RightChevronHoverIcon = function RightChevronHoverIcon(_ref2) {
  var size = _ref2.size,
      fill = _ref2.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.29898 2.74775C3.90034 2.34793 3.90034 1.69969 4.29898 1.29987C4.69761 0.900044 5.34393 0.900044 5.74257 1.29987L11.701 7.27606C12.0997 7.67588 12.0997 8.32412 11.701 8.72394L5.74257 14.7001C5.34393 15.1 4.69761 15.1 4.29898 14.7001C3.90034 14.3003 3.90034 13.6521 4.29898 13.2522L9.53564 8L4.29898 2.74775Z"
  }));
};

exports.RightChevronHoverIcon = RightChevronHoverIcon;
var _default = RightChevronIcon;
exports["default"] = _default;