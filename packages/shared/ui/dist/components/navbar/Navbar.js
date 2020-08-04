"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Navbar = void 0;

var React = _interopRequireWildcard(require("react"));

var _baseui = require("baseui");

var _button = require("baseui/button");

var _button2 = require("../button");

var _link = require("baseui/link");

var _layer = require("baseui/layer");

var _icon = require("baseui/icon");

var _appNavBar = require("baseui/app-nav-bar");

var _block = require("baseui/block");

var _icons = require("../icons");

var _logo = require("../header/logo");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var renderLabel = function renderLabel(user) {
  return user && user.name;
};

var renderLogout = function renderLogout(user) {
  return /*#__PURE__*/React.createElement(_link.StyledLink, {
    href: "".concat(props.server, "/logout?redirect_url=").concat(window.location.href)
  }, "Logg ut");
};

var getIcon = function getIcon(icon) {
  if (icon === 'ContactIcon') return /*#__PURE__*/React.createElement(_icons.ContactIcon, {
    size: 24,
    fill: "#19548A"
  });
  if (icon === 'InfoIcon') return /*#__PURE__*/React.createElement(_icons.InfoIcon, {
    size: 24,
    fill: "#19548A"
  });
  return null;
};

var getOnClick = function getOnClick(link) {
  return function () {};
};

var renderItem = function renderItem(item) {
  return /*#__PURE__*/React.createElement(_link.StyledLink, {
    href: item.link,
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(_button2.Button, {
    kind: _button.KIND.minimal,
    startEnhancer: getIcon(item.icon)
  }, item.label));
};

var MAIN_NAV = [{
  icon: null,
  item: {
    label: 'Om ',
    icon: 'InfoIcon',
    link: 'https://data.nav.no/about'
  },
  mapItemToNode: renderItem,
  mapItemToString: renderItem
}, {
  icon: null,
  item: {
    label: 'Kontakt oss',
    icon: 'ContactIcon',
    link: ''
  },
  mapItemToNode: renderItem,
  mapItemToString: renderItem
}];

var isActive = function isActive(arr, item, activeItem) {
  var active = false;

  for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];

    if (elm === item) {
      if (item === activeItem) return true;
      return isActive(item && item.nav || [], activeItem, activeItem);
    } else if (elm.nav) {
      active = isActive(elm.nav || [], item, activeItem);
    }
  }

  return active;
};

var userName = function userName() {
  if (props.tokenId && props.clientUser) return props.clientUser;
};

var Navbar = function Navbar(props) {
  var _useStyletron = (0, _baseui.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      css = _useStyletron2[0],
      theme = _useStyletron2[1];

  var _React$useState = React.useState({
    nav: []
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      user = _React$useState2[0],
      setUser = _React$useState2[1];

  var containerStyles = css({
    boxSizing: 'border-box',
    width: '100vw',
    position: 'fixed',
    top: '0',
    left: '0'
  });
  React.useEffect(function () {
    if (props.tokenId && props.clientUser) {
      setUser({
        name: props.clientUser,
        nameSubtitle: '',
        imgUrl: '',
        nav: [{
          icon: _icon.Overflow,
          item: {
            user: user
          },
          mapItemToNode: renderLogout,
          mapItemToString: renderLabel
        }]
      });
    }
  }, [props.tokenId, props.clientUser]);
  var url = props && props.config && props.config.link ? props.config.link : process.env.HOME_URL;
  var appDisplayName = /*#__PURE__*/React.createElement(_link.StyledLink, {
    $style: {
      textDecoration: 'none',
      color: 'inherit',
      ':hover': {
        color: 'inherit'
      },
      ':visited': {
        color: 'inherit'
      }
    },
    href: url || '#'
  }, _logo.DataKatalogLogo);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_layer.Layer, null, /*#__PURE__*/React.createElement(_appNavBar.Unstable_AppNavBar, {
    appDisplayName: appDisplayName,
    mainNav: MAIN_NAV,
    userNav: user && user.nav,
    username: user && user.Name,
    usernameSubtitle: user && user.nameSubtitle,
    userImgUrl: user && user.ImgUrl,
    overrides: theme && theme.navbarOverrides
  })));
};

exports.Navbar = Navbar;
var _default = Navbar;
exports["default"] = _default;