"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Header = void 0;

var React = _interopRequireWildcard(require("react"));

var _link = require("baseui/link");

var _baseui = require("baseui");

var _block = require("baseui/block");

var _typography = require("baseui/typography");

var _popover = require("baseui/popover");

var _button = require("baseui/button");

var _drawer = require("baseui/drawer");

var _menu = require("baseui/menu");

var _icons = require("../icons");

var _logo = require("./logo");

var _button2 = require("../button");

var _MenuIcon = require("../icons/MenuIcon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var iconSize = 20;

var CustomLink = function CustomLink(props) {
  var _useStyletron = (0, _baseui.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      useCss = _useStyletron2[0],
      theme = _useStyletron2[1];

  var link = useCss({
    textDecoration: 'none'
  });

  if (props.config && props.config.link) {
    return /*#__PURE__*/React.createElement(_link.StyledLink, {
      href: props.config.link,
      className: link,
      "aria-label": "link"
    }, /*#__PURE__*/React.createElement(_block.Block, {
      font: props.font || 'font650',
      color: props.color || 'colorPrimary'
    }, props.children));
  }

  return /*#__PURE__*/React.createElement(_block.Block, {
    font: props.font || 'font650',
    color: props.color || 'colorPrimary'
  }, props.children);
};

var brandName = function brandName(props) {
  if (props.config && props.config.brand) {
    return props.config.brand;
  }

  return 'Datakatalogen';
};

var NoStyleLink = function NoStyleLink(props) {
  return /*#__PURE__*/React.createElement(_link.StyledLink, {
    style: {
      textDecoration: 'none'
    },
    href: props.href
  }, props.children);
};

var Brand = function Brand(props) {
  var _useStyletron3 = (0, _baseui.useStyletron)(),
      _useStyletron4 = _slicedToArray(_useStyletron3, 2),
      useCss = _useStyletron4[0],
      theme = _useStyletron4[1];

  var link = useCss({
    textDecoration: 'none'
  });
  var to = props && props.config && props.config.link ? props.config.link : process.env.HOME_URL;
  return /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(CustomLink, props, _logo.DataKatalogLogo));
};

var UserLogin = function UserLogin(props) {
  if (props.clientUser && props.clientUser.initial) {
    return /*#__PURE__*/React.createElement(_popover.StatefulPopover, {
      placement: "bottom",
      content: /*#__PURE__*/React.createElement(_block.Block, {
        padding: "scale400"
      }, /*#__PURE__*/React.createElement(_typography.Label2, {
        display: "flex",
        width: "100%"
      }, props.clientUser.userId), /*#__PURE__*/React.createElement(_block.Block, {
        display: "flex",
        width: "100%"
      }, /*#__PURE__*/React.createElement(_link.StyledLink, {
        href: "".concat(props.server, "/logout?redirect_url=").concat(window.location.href)
      }, "Logg ut")))
    }, /*#__PURE__*/React.createElement(_button.Button, {
      shape: _button.SHAPE.round
    }, props.clientUser.initial));
  } else {
    return /*#__PURE__*/React.createElement(_link.StyledLink, {
      href: "".concat(props.server, "/login?redirect_url=").concat(window.location.href),
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(_button2.Button, null, "Logg inn"));
  }
};

var SideBar = function SideBar(props) {
  var toggleMenu = function toggleMenu() {
    props.setIsOpen(!props.isOpen);
  };

  var getItems = function getItems() {
    var items = [];

    if (props && props.config && props.config.showLoginButton) {
      if (props.clientUser && props.clientUser.initial) {
        items.push({
          label: /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_typography.Label2, {
            display: "flex",
            width: "100%"
          }, props.clientUser.userId)), /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_link.StyledLink, {
            href: "".concat(props.server, "/logout?redirect_url=").concat(window.location.href)
          }, "Logg ut"))),
          href: "".concat(props.server, "/logout?redirect_url=").concat(window.location.href)
        });
      } else {
        items.push({
          label: 'Logg inn',
          href: "".concat(props.server, "/login?redirect_url=").concat(window.location.href)
        });
      }
    }

    if (props && props.config && props.config.about) items.push({
      label: props.config.about_label || 'om',
      href: props.config.aboutLink
    });
    if (props && props.config && props.config.contact) items.push({
      label: props.config.contact_label || 'kontakt',
      href: ''
    });
    return items;
  };

  return /*#__PURE__*/React.createElement(_drawer.Drawer, {
    anchor: _drawer.ANCHOR.right,
    isOpen: props.isOpen,
    onClose: toggleMenu,
    size: '40%',
    overrides: {
      DrawerBody: {
        style: {
          marginTop: '0px',
          marginBottom: '0px',
          marginLeft: '0px',
          marginRight: '0px'
        }
      },
      // Removes the close icon from the drawer
      Close: function Close() {
        return null;
      }
    }
  }, /*#__PURE__*/React.createElement(_menu.StatefulMenu, {
    items: getItems(),
    overrides: {
      Option: {
        component: _menu.OptionList,
        props: {
          overrides: {
            ListItemAnchor: {
              style: {
                textDecoration: 'none'
              }
            }
          }
        }
      }
    }
  }));
};

var Header = function Header(props) {
  var _useStyletron5 = (0, _baseui.useStyletron)(),
      _useStyletron6 = _slicedToArray(_useStyletron5, 2),
      css = _useStyletron6[0],
      theme = _useStyletron6[1];

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isSideBarOpen = _React$useState2[0],
      setIsSideBarOpen = _React$useState2[1];

  var link = css({
    textDecoration: 'none'
  });
  var showHeaderLineImage = true;

  if (props && props.config && props.config.showHeaderLineImage === false) {
    showHeaderLineImage = false;
  }

  var getMobileView = function getMobileView() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SideBar, _extends({
      isOpen: isSideBarOpen,
      setIsOpen: setIsSideBarOpen
    }, props)), /*#__PURE__*/React.createElement(_block.Block, {
      marginLeft: ['scale500', '40px'],
      marginRight: ['scale500', '40px'],
      flex: ['auto'],
      maxWidth: theme && theme.breakpoints && theme.breakpoints.medium + 'px',
      display: "flex",
      alignItems: "stretch",
      justifyContent: "space-between"
    }, /*#__PURE__*/React.createElement(Brand, _extends({}, props, {
      setIsSideBarOpen: setIsSideBarOpen
    })), /*#__PURE__*/React.createElement(_block.Block, {
      marginTop: "16px"
    }, /*#__PURE__*/React.createElement(_button2.Button, {
      kind: _button.KIND.minimal,
      onClick: function onClick() {
        setIsSideBarOpen(true);
      },
      startEnhancer: /*#__PURE__*/React.createElement(_MenuIcon.MenuIcon, {
        size: iconSize
      })
    }, "Meny"))));
  };

  var getAboutButton = function getAboutButton() {
    return /*#__PURE__*/React.createElement(_block.Block, null, props && props.config && props.config.about && /*#__PURE__*/React.createElement(NoStyleLink, {
      href: props.config.aboutLink
    }, /*#__PURE__*/React.createElement(_button2.Button, {
      kind: _button.KIND.minimal,
      startEnhancer: /*#__PURE__*/React.createElement(_icons.InfoIcon, {
        size: iconSize,
        fill: theme.colors.primary
      }),
      startEnhancerHover: /*#__PURE__*/React.createElement(_icons.InfoHoverIcon, {
        size: iconSize
      }),
      onClick: props.onClickAbout
    }, props.config.about_label || 'om')));
  };

  var getContactButton = function getContactButton() {
    return /*#__PURE__*/React.createElement(_block.Block, null, props && props.config && props.config.contact && /*#__PURE__*/React.createElement(_button2.Button, {
      kind: _button.KIND.minimal,
      startEnhancer: /*#__PURE__*/React.createElement(_icons.ContactIcon, {
        size: iconSize,
        fill: theme.colors.primary
      }),
      startEnhancerHover: /*#__PURE__*/React.createElement(_icons.ContactHoverIcon, {
        size: iconSize
      }),
      onClick: props.onClickContact
    }, props.config.contact_label || 'kontakt'));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_block.Block, {
    paddingBottom: "scale100"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: ['none', 'none', 'flex'],
    marginTop: "scale300",
    justifyContent: "center",
    height: "80px",
    $style: {
      backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAAD1BMVEUAAAA6tPl7zfu95v3///8yRSjLAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAgSURBVCjPY1ACAQY0MKQFjUEAXXpICwqCAEIGwhrKggDsPS591cEhYwAAAABJRU5ErkJggg==)',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: '50px'
    }
  }, /*#__PURE__*/React.createElement(_block.Block, {
    marginLeft: ['scale500', '40px'],
    marginRight: ['scale500', '40px'],
    flex: ['auto'],
    maxWidth: theme && theme.breakpoints && theme.breakpoints.large + 'px',
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Brand, _extends({}, props, {
    setIsSideBarOpen: setIsSideBarOpen
  })), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "center"
  }, getAboutButton(), getContactButton(), /*#__PURE__*/React.createElement(_block.Block, null, props && props.config && props.config.showLoginButton && /*#__PURE__*/React.createElement(UserLogin, props))))), /*#__PURE__*/React.createElement(_block.Block, {
    display: ['flex', 'flex', 'none'],
    marginTop: "scale300",
    justifyContent: "center",
    height: "80px"
  }, getMobileView()), /*#__PURE__*/React.createElement(_block.Block, {
    backgroundColor: theme.colors.headerBorderFill,
    height: "scale100"
  })));
};

exports.Header = Header;
var _default = Header;
exports["default"] = _default;