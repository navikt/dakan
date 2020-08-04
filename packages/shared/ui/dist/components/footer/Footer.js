"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Footer = void 0;

var React = _interopRequireWildcard(require("react"));

var _block = require("baseui/block");

var _baseui = require("baseui");

var _link = require("baseui/link");

var _Logo = require("./Logo");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isInternal = process.env.VERSION ? process.env.VERSION === 'public' ? false : true : false;

var StyledLogo = function StyledLogo() {
  var _useStyletron = (0, _baseui.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  return /*#__PURE__*/React.createElement(_Logo.Logo, {
    theme: theme,
    width: 50
  });
};

var Link = function Link(props) {
  var _useStyletron3 = (0, _baseui.useStyletron)(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      theme = _useStyletron4[1];

  return /*#__PURE__*/React.createElement(_link.StyledLink, _extends({}, props, {
    style: {
      textDecoration: 'none',
      color: theme.colors && theme.colors.white
    }
  }));
};

var getLink = function getLink() {
  if (isInternal) return 'https://data.adeo.no/';
  return 'https://data.nav.no/';
};

var Footer = function Footer(_ref) {
  var isInternal = _ref.isInternal;

  var _useStyletron5 = (0, _baseui.useStyletron)(),
      _useStyletron6 = _slicedToArray(_useStyletron5, 2),
      theme = _useStyletron6[1];

  return /*#__PURE__*/React.createElement(_block.Block, {
    height: "80px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.colors && theme.colors.primary,
    marginTop: "auto"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "start",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    marginLeft: "scale800"
  }, /*#__PURE__*/React.createElement(StyledLogo, null)), /*#__PURE__*/React.createElement(_block.Block, {
    marginLeft: "scale500"
  }, /*#__PURE__*/React.createElement(Link, {
    href: getLink()
  }, 'Arbeids- og velferdsetaten'))));
};

exports.Footer = Footer;
var _default = Footer;
exports["default"] = _default;