"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nav_theme = exports.default_theme = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _link = require("baseui/link");

var _block = require("baseui/block");

var _typography = require("baseui/typography");

var _card = require("baseui/card");

var _theme = require("../../theme");

var _LabeledContent = _interopRequireDefault(require("./LabeledContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = {
  title: 'Components/LabeledContent',
  parameters: {
    component: _LabeledContent["default"]
  }
};
exports["default"] = _default;

var ITEMS = _toConsumableArray(new Array(3)).map(function () {
  return {
    title: 'Overskrift overskrift overskrift',
    content: 'Skatteetaten har ansvaret for skatt og skattekort. I artikkelen nedenfor får du svar på noen av de mest vanligste spørsmålene om skatt på ytelser fra NAV'
  };
});

var default_theme = function default_theme() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, null, /*#__PURE__*/_react["default"].createElement(_block.Block, null, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Standard labeled content:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, ITEMS.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
      key: 'standard_' + index,
      "aria-label": "label",
      description: item.title
    }, item.content);
  }))), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Labeled content with link:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
    "aria-label": "label",
    description: ITEMS[0].title
  }, /*#__PURE__*/_react["default"].createElement(_link.StyledLink, {
    href: "https://www.google.com"
  }, "https://www.google.com")))), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Labeled content with text and link:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
    "aria-label": "label",
    description: ITEMS[0].title
  }, "Her er en link til ", /*#__PURE__*/_react["default"].createElement(_link.StyledLink, {
    href: "https://www.google.com"
  }, "https://www.google.com")))), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "List labeled content:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, ITEMS.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
      key: 'list_' + index,
      list: true,
      "aria-label": "label",
      description: item.title
    }, item.content);
  }))));
};

exports.default_theme = default_theme;

var nav_theme = function nav_theme() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, null, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Standard labeled content:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, ITEMS.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
      key: 'standard_' + index,
      "aria-label": "label",
      description: item.title
    }, item.content);
  }))), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Labeled content with link:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
    "aria-label": "label",
    description: ITEMS[0].title
  }, /*#__PURE__*/_react["default"].createElement(_link.StyledLink, {
    href: "https://www.google.com"
  }, "https://www.google.com")))), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "Labeled content with text and link:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
    "aria-label": "label",
    description: ITEMS[0].title
  }, "Her er en link til ", /*#__PURE__*/_react["default"].createElement(_link.StyledLink, {
    href: "https://www.google.com"
  }, "https://www.google.com")))), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/_react["default"].createElement(_typography.LabelLarge, null, "List labeled content:")), /*#__PURE__*/_react["default"].createElement(_card.Card, null, ITEMS.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_LabeledContent["default"], {
      key: 'list_' + index,
      list: true,
      "aria-label": "label",
      description: item.title
    }, item.content);
  }))));
};

exports.nav_theme = nav_theme;