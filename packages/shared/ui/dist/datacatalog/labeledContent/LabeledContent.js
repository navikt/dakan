"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LabeledContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _block = require("baseui/block");

var _typography = require("baseui/typography");

var _baseui = require("baseui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FlexFormatVersion = function FlexFormatVersion(props) {
  var _useStyletron = (0, _baseui.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      useCss = _useStyletron2[0],
      theme = _useStyletron2[1];

  return /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale800",
    display: ['block', 'flex'],
    flexDirection: "row",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    flex: "1",
    marginRight: "scale800",
    marginBottom: ['scale200', 'none']
  }, props.description && /*#__PURE__*/_react["default"].createElement(_typography.LabelMedium, {
    $style: {
      marginTop: 0,
      marginBottom: 0,
      color: 'black'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, props.description))), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginLeft: ['none', 'scale800']
  }), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    flex: "3"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    flex: "3",
    overrides: {
      Block: {
        style: _objectSpread({
          marginTop: 0,
          marginBottom: 0,
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word'
        }, theme.typography.font300)
      }
    }
  }, props.children)));
};

var ListItemVersion = function ListItemVersion(props) {
  var _useStyletron3 = (0, _baseui.useStyletron)(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      theme = _useStyletron4[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale800"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale200"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelMedium, {
    $style: {
      color: 'black'
    }
  }, /*#__PURE__*/_react["default"].createElement("b", null, props.description))), props.description && /*#__PURE__*/_react["default"].createElement(_block.Block, {
    overrides: {
      Block: {
        style: _objectSpread({
          marginTop: 0,
          marginBottom: 0,
          overflowWrap: 'break-word',
          wordWrap: 'break-word',
          wordBreak: 'break-word'
        }, theme.typography.font300)
      }
    }
  }, props.children)));
};
/**
 * **Labeled content** Labeled content
 */


var LabeledContent = function LabeledContent(props) {
  if (props && props.list) {
    return /*#__PURE__*/_react["default"].createElement(ListItemVersion, props);
  } else {
    return /*#__PURE__*/_react["default"].createElement(FlexFormatVersion, props);
  }
};

exports.LabeledContent = LabeledContent;
var _default = LabeledContent;
exports["default"] = _default;