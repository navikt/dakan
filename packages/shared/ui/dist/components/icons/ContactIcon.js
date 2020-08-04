"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ContactHoverIcon = exports.ContactIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ContactIcon = function ContactIcon(_ref) {
  var size = _ref.size,
      fill = _ref.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 0C1.79086 0 0 1.79086 0 4V24L7 19H20C22.2091 19 24 17.2091 24 15V4C24 1.79086 22.2091 0 20 0H4ZM20 2C21.0544 2 21.9182 2.81588 21.9945 3.85074L22 15C22 16.0544 21.0349 16.9237 20 17H6L2 20V4C2 2.94564 2.81588 2.08183 3.85074 2.00549L20 2ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9ZM17 9C16.4477 9 16 9.44772 16 10C16 10.5523 16.4477 11 17 11C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9Z",
    fill: "#19548A"
  }));
};

exports.ContactIcon = ContactIcon;

var ContactHoverIcon = function ContactHoverIcon(_ref2) {
  var size = _ref2.size,
      fill = _ref2.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("rect", {
    width: "24",
    height: "24",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 0C1.79086 0 0 1.79086 0 4V24L7 19H20C22.2091 19 24 17.2091 24 15V4C24 1.79086 22.2091 0 20 0H4Z",
    fill: "#19548A"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10C16 9.44772 16.4477 9 17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10Z",
    fill: "white"
  }));
};

exports.ContactHoverIcon = ContactHoverIcon;
var _default = ContactIcon;
exports["default"] = _default;