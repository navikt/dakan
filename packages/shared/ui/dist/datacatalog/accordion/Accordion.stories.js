"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAV_theme_panel = exports.default_panel = exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Panel = require("./Panel");

var _accordion = require("baseui/accordion");

var _theme = require("../../theme");

var _Tabs = require("../../components/tabs/Tabs");

var _Tab = require("../../components/tabs/Tab");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'Components/Accordion',
  parameters: {
    component: _accordion.Accordion
  }
};
exports["default"] = _default;

var default_panel = function default_panel() {
  var _React$useState = React.useState('0'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeKey = _React$useState2[0],
      setActiveKey = _React$useState2[1];

  var _React$useState3 = React.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      panelExpanded = _React$useState4[0],
      setPanelExpanded = _React$useState4[1];

  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, null, /*#__PURE__*/React.createElement(_accordion.Accordion, {
    onChange: function onChange(e) {
      return setPanelExpanded(e.expanded[0]);
    }
  }, /*#__PURE__*/React.createElement(_Panel.Panel, {
    title: "panel 1",
    isExpanded: panelExpanded === '0'
  }, "this is the description in panel 1"), /*#__PURE__*/React.createElement(_Panel.Panel, {
    title: "panel 2",
    isExpanded: panelExpanded === '1'
  }, /*#__PURE__*/React.createElement(_Tabs.Tabs, {
    onChange: function onChange(_ref) {
      var activeKey = _ref.activeKey;
      setActiveKey(activeKey.toString());
    },
    activeKey: activeKey
  }, /*#__PURE__*/React.createElement(_Tab.Tab, {
    title: "tab1"
  }, "This is tab1"), /*#__PURE__*/React.createElement(_Tab.Tab, {
    title: "tab2"
  }, "This is tab2"))), /*#__PURE__*/React.createElement(_Panel.Panel, {
    title: "panel 3",
    isExpanded: panelExpanded === '2'
  }, "this is panel 3")));
};

exports.default_panel = default_panel;

var NAV_theme_panel = function NAV_theme_panel() {
  var _React$useState5 = React.useState('0'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      activeKey = _React$useState6[0],
      setActiveKey = _React$useState6[1];

  var _React$useState7 = React.useState(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      panelExpanded = _React$useState8[0],
      setPanelExpanded = _React$useState8[1];

  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/React.createElement(_accordion.Accordion, {
    onChange: function onChange(e) {
      return setPanelExpanded(e.expanded[0]);
    }
  }, /*#__PURE__*/React.createElement(_Panel.Panel, {
    title: "panel 1",
    isExpanded: panelExpanded === '0'
  }, "this is the description in panel 1"), /*#__PURE__*/React.createElement(_Panel.Panel, {
    title: "panel 2",
    isExpanded: panelExpanded === '1'
  }, /*#__PURE__*/React.createElement(_Tabs.Tabs, {
    onChange: function onChange(_ref2) {
      var activeKey = _ref2.activeKey;
      setActiveKey(activeKey.toString());
    },
    activeKey: activeKey
  }, /*#__PURE__*/React.createElement(_Tab.Tab, {
    title: "tab1"
  }, "This is tab1"), /*#__PURE__*/React.createElement(_Tab.Tab, {
    title: "tab2"
  }, "This is tab2"))), /*#__PURE__*/React.createElement(_Panel.Panel, {
    title: "panel 3",
    isExpanded: panelExpanded === '2'
  }, "this is panel 3")));
};

exports.NAV_theme_panel = NAV_theme_panel;