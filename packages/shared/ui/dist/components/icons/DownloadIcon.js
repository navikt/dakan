"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DownloadHoverIcon = exports.DownloadIcon = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DownloadIcon = function DownloadIcon(_ref) {
  var size = _ref.size,
      fill = _ref.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 17V20C3 21.0544 3.81588 21.9182 4.85074 21.9945L5 22H19C20.0544 22 20.9182 21.1841 20.9945 20.1493L21 20V17H23V20C23 22.2091 21.2091 24 19 24H5C2.79086 24 1 22.2091 1 20V17H3ZM13 0V13.295L17.5455 9L19 10.3746L12 17L5 10.3746L6.45455 9L11 13.295V0H13Z",
    fill: "#19548A"
  }));
};

exports.DownloadIcon = DownloadIcon;

var DownloadHoverIcon = function DownloadHoverIcon(_ref2) {
  var size = _ref2.size,
      fill = _ref2.fill;
  return /*#__PURE__*/React.createElement(_Icon["default"], {
    size: size,
    fill: fill
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 20V17H1V20C1 22.2091 2.79086 24 5 24H19C21.2091 24 23 22.2091 23 20V17H21V20H3ZM14 10.3746V0H10V10.3746H6.9375H5L12 17L19 10.3746H17.3125H14Z",
    fill: "#0067C5"
  }));
};

exports.DownloadHoverIcon = DownloadHoverIcon;
var _default = DownloadIcon;
exports["default"] = _default;