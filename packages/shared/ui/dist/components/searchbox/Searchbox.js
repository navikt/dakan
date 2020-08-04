"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Searchbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _input = require("../input");

var _icon = require("baseui/icon");

var _block = require("baseui/block");

var _baseui = require("baseui");

var _Button = require("../button/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * **Searchbox**
 */
var Searchbox = function Searchbox(props) {
  var size = props.size || 20;
  return /*#__PURE__*/_react["default"].createElement(_block.Block, {
    display: "flex"
  }, /*#__PURE__*/_react["default"].createElement(_input.Input, props), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    type: "submit",
    startEnhancer: /*#__PURE__*/_react["default"].createElement(_icon.Search, {
      size: size
    })
  }, "S\xF8k"));
};

exports.Searchbox = Searchbox;
var _default = Searchbox;
exports["default"] = _default;