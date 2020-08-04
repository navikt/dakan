"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAV_theme = exports.default_theme = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _block = require("baseui/block");

var _typography = require("baseui/typography");

var _ = require("./");

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Components/Back'
};
exports["default"] = _default;

var default_theme = function default_theme() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, null, /*#__PURE__*/_react["default"].createElement(_block.Block, null, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Back Button:")), /*#__PURE__*/_react["default"].createElement(_.BackButton, {
    backButton: true
  })), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Back Link:")), /*#__PURE__*/_react["default"].createElement(_.BackLink, {
    backButton: true
  })));
};

exports.default_theme = default_theme;

var NAV_theme = function NAV_theme() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, null, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Back Button:")), /*#__PURE__*/_react["default"].createElement(_.BackButton, {
    backButton: true
  })), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Back Link:")), /*#__PURE__*/_react["default"].createElement(_.BackLink, {
    backButton: true
  })));
};

exports.NAV_theme = NAV_theme;