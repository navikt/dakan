"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalButton = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("baseui/button");

var _baseui = require("baseui");

var _modal = require("baseui/modal");

var _icon = require("baseui/icon");

var _merge = require("../../utils/merge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Button = function Button(props) {
  var _useStyletron = (0, _baseui.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hover = _React$useState2[0],
      setHover = _React$useState2[1];

  var overrides = props.overrides,
      children = props.children,
      startEnhancer = props.startEnhancer,
      startEnhancerHover = props.startEnhancerHover,
      endEnhancer = props.endEnhancer,
      endEnhancerHover = props.endEnhancerHover,
      rest = _objectWithoutProperties(props, ["overrides", "children", "startEnhancer", "startEnhancerHover", "endEnhancer", "endEnhancerHover"]);

  var themeOverrides = theme && theme.buttonOverrides;
  if (props.kind == _button.KIND.secondary) themeOverrides = theme && theme.buttonSecondaryOverrides;
  if (props.kind == _button.KIND.minimal) themeOverrides = theme && theme.buttonMinimalOverrides;
  var mergedOverrides = (0, _merge.merge)(themeOverrides || {}, overrides || {});

  var mouseEnter = function mouseEnter() {
    setHover(true);
  };

  var mouseLeave = function mouseLeave() {
    setHover(false);
  };

  var StartEnhancer = function StartEnhancer() {
    if (hover && startEnhancerHover) return startEnhancerHover;
    return startEnhancer || null;
  };

  var EndEnhancer = function EndEnhancer() {
    if (hover && endEnhancerHover) return endEnhancerHover;
    return endEnhancer || null;
  };

  return /*#__PURE__*/_react["default"].createElement(_button.Button, _extends({}, rest, {
    overrides: mergedOverrides,
    startEnhancer: StartEnhancer(),
    endEnhancer: EndEnhancer(),
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave
  }), children);
};

exports.Button = Button;

var ModalButton = function ModalButton(props) {
  var _useStyletron3 = (0, _baseui.useStyletron)(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      theme = _useStyletron4[1];

  var overrides = props.overrides,
      children = props.children,
      rest = _objectWithoutProperties(props, ["overrides", "children"]);

  var themeOverrides = theme && theme.buttonOverrides || {};
  if (props.kind == _button.KIND.secondary) themeOverrides = theme && theme.buttonSecondaryOverrides;
  if (props.kind == _button.KIND.minimal) themeOverrides = theme && theme.buttonMinimalOverrides;
  var mergedOverrides = (0, _merge.merge)(themeOverrides || {}, overrides || {});
  return /*#__PURE__*/_react["default"].createElement(_modal.ModalButton, _extends({}, rest, {
    overrides: mergedOverrides
  }), children);
};

exports.ModalButton = ModalButton;
var _default = Button;
exports["default"] = _default;