"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LeftChevronHoverIcon = exports.LeftChevronIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LeftChevronIcon = function LeftChevronIcon(_ref) {
  var size = _ref.size,
      fill = _ref.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 12L15.5714 3L17 4.5L9.85714 12L17 19.5L15.5714 21L7 12Z",
    fill: "#19548A"
  }));
};

exports.LeftChevronIcon = LeftChevronIcon;

var LeftChevronHoverIcon = function LeftChevronHoverIcon(_ref2) {
  var size = _ref2.size,
      fill = _ref2.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 11.5L15.0714 2.5L17.5 5L11 11.5L17.5 18L15.0714 20.5L6.5 11.5Z",
    fill: "#0067C5"
  }));
};

exports.LeftChevronHoverIcon = LeftChevronHoverIcon;
var _default = LeftChevronIcon;
exports["default"] = _default;