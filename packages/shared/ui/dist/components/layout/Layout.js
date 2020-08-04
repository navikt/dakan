"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayoutSplit = exports.Layout = exports.SingleColumn = exports.Heading = exports.MediumWidth = exports.LargeWidth = exports.FullWidth = void 0;

var React = _interopRequireWildcard(require("react"));

var _block = require("baseui/block");

var _typography = require("baseui/typography");

var _baseui = require("baseui");

var _footer = require("../footer");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MARGIN_LEFT = '16px';
var PADDING_LEFT = '16px';
var MARGIN_RIGHT = '20px';
var LEFT_MENU_WIDTH = '320px';

var FullWidth = function FullWidth(props) {
  var _useStyletron = (0, _baseui.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  return /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column",
    maxWidth: theme.breakpoints.xlarge + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    width: "100%",
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_RIGHT
  }, /*#__PURE__*/React.createElement(SingleColumn, {
    right: props.children
  })), /*#__PURE__*/React.createElement(_footer.Footer, null));
};

exports.FullWidth = FullWidth;

var LargeWidth = function LargeWidth(props) {
  var _useStyletron3 = (0, _baseui.useStyletron)(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      theme = _useStyletron4[1];

  return /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    width: "100%",
    paddingLeft: MARGIN_LEFT,
    paddingRight: MARGIN_RIGHT
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: theme.breakpoints.large + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1"
  }, /*#__PURE__*/React.createElement(Heading, props)))), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1",
    width: "100%",
    maxWidth: theme.breakpoints.large + 'px'
  }, props.children))), /*#__PURE__*/React.createElement(_footer.Footer, null));
};

exports.LargeWidth = LargeWidth;

var MediumWidth = function MediumWidth(props) {
  var _useStyletron5 = (0, _baseui.useStyletron)(),
      _useStyletron6 = _slicedToArray(_useStyletron5, 2),
      theme = _useStyletron6[1];

  return /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    width: "100%",
    paddingLeft: MARGIN_LEFT,
    paddingRight: MARGIN_RIGHT
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: theme.breakpoints.medium + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1"
  }, /*#__PURE__*/React.createElement(Heading, props)))), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1",
    width: "100%",
    maxWidth: theme.breakpoints.medium + 'px'
  }, props.children))), /*#__PURE__*/React.createElement(_footer.Footer, null));
};

exports.MediumWidth = MediumWidth;

var Heading = function Heading(props) {
  if (props && props.headingLabel && props.headingText) {
    return /*#__PURE__*/React.createElement(_block.Block, {
      marginBottom: "scale600"
    }, /*#__PURE__*/React.createElement(_typography.HeadingMedium, null, /*#__PURE__*/React.createElement(_typography.LabelMedium, null, props.headingLabel), props.headingText));
  }

  return null;
};

exports.Heading = Heading;

var SingleColumn = function SingleColumn(props) {
  var _useStyletron7 = (0, _baseui.useStyletron)(),
      _useStyletron8 = _slicedToArray(_useStyletron7, 2),
      theme = _useStyletron8[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "",
    width: "100%",
    paddingLeft: PADDING_LEFT
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1"
  }, /*#__PURE__*/React.createElement(Heading, props))), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingLeft: PADDING_LEFT
  }, /*#__PURE__*/React.createElement(_block.Block, {
    width: "100%"
  }, props.right)));
};

exports.SingleColumn = SingleColumn;

var TwoCols = function TwoCols(props) {
  var _useStyletron9 = (0, _baseui.useStyletron)(),
      _useStyletron10 = _slicedToArray(_useStyletron9, 2),
      theme = _useStyletron10[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: theme.breakpoints.medium + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1",
    width: "100%",
    paddingLeft: MARGIN_LEFT
  }, /*#__PURE__*/React.createElement(Heading, props)))), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-start",
    maxWidth: theme.breakpoints.medium + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: ['none', 'block'],
    width: LEFT_MENU_WIDTH,
    paddingLeft: PADDING_LEFT
  }, props.left), /*#__PURE__*/React.createElement(_block.Block, {
    flex: '1',
    width: "100%",
    paddingLeft: PADDING_LEFT
  }, props.right))));
};

var ThreeCols = function ThreeCols(props) {
  var _useStyletron11 = (0, _baseui.useStyletron)(),
      _useStyletron12 = _slicedToArray(_useStyletron11, 2),
      theme = _useStyletron12[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: theme.breakpoints.large + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1",
    width: "100%",
    paddingLeft: MARGIN_LEFT
  }, /*#__PURE__*/React.createElement(Heading, props)))), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    maxWidth: theme.breakpoints.large + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: ['none', 'block'],
    width: LEFT_MENU_WIDTH,
    paddingLeft: MARGIN_LEFT
  }, props.left), /*#__PURE__*/React.createElement(_block.Block, {
    flex: '3',
    width: "100%",
    paddingLeft: MARGIN_LEFT
  }, props.right), props.options && /*#__PURE__*/React.createElement(_block.Block, {
    flex: '1',
    width: "100%",
    paddingLeft: MARGIN_LEFT
  }, props.options))));
};

var Layout = function Layout(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: "scale800"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    width: "100%",
    paddingRight: MARGIN_RIGHT
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: ['block', 'block', 'none', 'none'],
    width: "100%"
  }, /*#__PURE__*/React.createElement(SingleColumn, props)), /*#__PURE__*/React.createElement(_block.Block, {
    display: ['none', 'none', 'block', 'none'],
    width: "100%"
  }, /*#__PURE__*/React.createElement(TwoCols, props)), /*#__PURE__*/React.createElement(_block.Block, {
    display: ['none', 'none', 'none', 'block'],
    width: "100%"
  }, /*#__PURE__*/React.createElement(ThreeCols, props)))), /*#__PURE__*/React.createElement(_footer.Footer, null));
};

exports.Layout = Layout;

var LayoutSplit = function LayoutSplit(props) {
  var _useStyletron13 = (0, _baseui.useStyletron)(),
      _useStyletron14 = _slicedToArray(_useStyletron13, 2),
      theme = _useStyletron14[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    alignItems: "flex-start",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingLeft: MARGIN_LEFT
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: theme.breakpoints.large + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1",
    width: "100%"
  }, /*#__PURE__*/React.createElement(Heading, props)))), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    paddingLeft: MARGIN_LEFT
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-start",
    maxWidth: theme.breakpoints.large + 'px'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: ['none', 'none', 'block'],
    flex: "1",
    paddingRight: "scale800"
  }, props.left), /*#__PURE__*/React.createElement(_block.Block, {
    flex: "1",
    width: "100%",
    paddingRight: "scale800"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: ['block', 'block', 'none'],
    flex: "1",
    marginBottom: "scale1200"
  }, props.left), props.right)))), /*#__PURE__*/React.createElement(_footer.Footer, null));
};

exports.LayoutSplit = LayoutSplit;
var _default = Layout;
exports["default"] = _default;