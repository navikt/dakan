"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FullWidths = exports.LargeWidths = exports.LargeWidthHeading = exports.MediumWidthHeading = exports.MediumWidths = exports.DynamicTwoColumnsShort = exports.DynamicTwoColumns = exports.Split = exports.DynamicHeading = exports.Dynamic = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

var _block = require("baseui/block");

var _button = require("baseui/button");

var _card = require("baseui/card");

var _typography = require("baseui/typography");

var _sideNavigation = require("baseui/side-navigation");

var _checkbox = require("baseui/checkbox");

var _tag = require("../tag");

var _link = require("baseui/link");

var _header = require("../header");

var _theme = require("../../theme");

var _footer = require("../footer");

var _Layout = require("./Layout");

var _data = require("./data");

var _Back = require("../back/Back");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var setLocation = function setLocation(id) {
  console.log(id);
};

var menu = function menu() {
  var _useState = useState('#level1.1.1'),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_sideNavigation.Navigation, {
    items: _data.nav,
    activeItemId: location,
    onChange: function onChange(_ref) {
      var item = _ref.item;
      return setLocation(item.itemId);
    },
    overrides: {
      NavItem: {
        style: function style(_ref2) {
          var $active = _ref2.$active,
              $theme = _ref2.$theme;
          if (!$active) return {
            ':hover': {
              color: $theme.colors.positive400
            }
          };
          return {
            backgroundColor: $theme.colors.positive400,
            borderLeftColor: $theme.colors.mono900,
            color: $theme.colors.mono900,
            ':hover': {
              color: $theme.colors.positive400
            }
          };
        }
      }
    }
  });
};

var checkBoxes = function checkBoxes() {
  return /*#__PURE__*/_react["default"].createElement(_block.Block, null, _data.ITEMS.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_checkbox.StatefulCheckbox, {
      onChange: console.log
    }, item.subtitle);
  }));
};

var item = function item() {
  return /*#__PURE__*/_react["default"].createElement(_block.Block, {
    as: "h2",
    overrides: {
      Block: {
        style: function style(_ref3) {
          var $theme = _ref3.$theme;
          return {
            borderBottom: '1px black solid'
          };
        }
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_typography.Display4, {
    marginBottom: "scale800"
  }, /*#__PURE__*/_react["default"].createElement(_link.StyledLink, {
    href: "http://www.google.com"
  }, "Google")), /*#__PURE__*/_react["default"].createElement(_typography.Paragraph1, null, "Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisisnisl Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisisnisl Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisisnisl"), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    marginBottom: "scale800"
  }, /*#__PURE__*/_react["default"].createElement(_tag.Tag, {
    closeable: false,
    onClick: function (_onClick) {
      function onClick() {
        return _onClick.apply(this, arguments);
      }

      onClick.toString = function () {
        return _onClick.toString();
      };

      return onClick;
    }(function () {
      onClick('Opplysningstype');
    }),
    variant: "solid",
    kind: "neutral"
  }, "Opplysningstype")));
};

var card = function card() {
  return /*#__PURE__*/_react["default"].createElement(_card.Card, {
    overrides: {
      Root: {
        style: function style(_ref4) {
          var $theme = _ref4.$theme;
          return {
            width: '100%',
            outline: 'none',
            backgroundColor: $theme.colors.white
          };
        }
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_card.StyledBody, null, /*#__PURE__*/_react["default"].createElement(_typography.Display4, {
    marginBottom: "scale800"
  }, /*#__PURE__*/_react["default"].createElement(_link.StyledLink, {
    href: "http://www.google.com"
  }, "Google")), "Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl."), /*#__PURE__*/_react["default"].createElement(_card.StyledAction, null, /*#__PURE__*/_react["default"].createElement(_tag.Tag, {
    closeable: false,
    onClick: function (_onClick2) {
      function onClick() {
        return _onClick2.apply(this, arguments);
      }

      onClick.toString = function () {
        return _onClick2.toString();
      };

      return onClick;
    }(function () {
      onClick('neutral');
    }),
    variant: "solid",
    kind: "neutral"
  }, "neutral")));
};

var cardcontent = function cardcontent() {
  return _data.ITEMS.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_block.Block, null, card());
  });
};

var itemcontent = function itemcontent() {
  return _data.ITEMS.map(function (i) {
    return /*#__PURE__*/_react["default"].createElement(_block.Block, null, /*#__PURE__*/_react["default"].createElement(_block.Block, null, /*#__PURE__*/_react["default"].createElement(_Back.BackLink, null)), /*#__PURE__*/_react["default"].createElement(_block.Block, null, item()));
  });
};

var _default = {
  title: 'Components/Layout',
  parameters: {
    component: _Layout.Layout
  }
};
exports["default"] = _default;

var Dynamic = function Dynamic() {
  var onResize = function onResize(size) {//console.log('resize: ', size)
  };

  var theme = (0, _theme.navTheme)();
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, {
    showBackButton: true,
    config: {
      nav: true
    }
  }), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    height: "40px",
    width: "100%",
    backgroundColor: "red"
  }, /*#__PURE__*/_react["default"].createElement(_reactVirtualizedAutoSizer["default"], {
    defaultHeight: "20px",
    onResize: onResize
  }, function (_ref5) {
    var width = _ref5.width,
        height = _ref5.height;
    return /*#__PURE__*/_react["default"].createElement(_block.Block, {
      width: "100%"
    }, width, ":", height, ". ", JSON.stringify(theme.breakpoints), ' ');
  })), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    backgroundColor: "silver",
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Layout.Layout, {
    left: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "yellow"
    }, itemcontent()),
    right: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "blue"
    }, itemcontent()),
    options: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "green"
    }, itemcontent())
  }))));
};

exports.Dynamic = Dynamic;

var DynamicHeading = function DynamicHeading() {
  var onResize = function onResize(size) {//console.log('resize: ', size)
  };

  var theme = (0, _theme.navTheme)();
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_block.Block, {
    height: "40px",
    width: "100%",
    backgroundColor: "red"
  }, /*#__PURE__*/_react["default"].createElement(_reactVirtualizedAutoSizer["default"], {
    defaultHeight: "20px",
    onResize: onResize
  }, function (_ref6) {
    var width = _ref6.width,
        height = _ref6.height;
    return /*#__PURE__*/_react["default"].createElement(_block.Block, {
      width: "100%"
    }, width, ":", height, ". ", JSON.stringify(theme.breakpoints), ' ');
  })), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    backgroundColor: "silver",
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Layout.Layout, {
    headingLabel: "Heading label",
    headingText: "Heading text",
    left: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "yellow"
    }, itemcontent()),
    right: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "blue"
    }, itemcontent()),
    options: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "green"
    }, itemcontent())
  }))));
};

exports.DynamicHeading = DynamicHeading;

var Split = function Split() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    backgroundColor: "silver",
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Layout.LayoutSplit, {
    headingLabel: "Heading label",
    headingText: "Heading text",
    left: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "yellow"
    }, itemcontent()),
    right: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "blue"
    }, itemcontent())
  })));
};

exports.Split = Split;

var DynamicTwoColumns = function DynamicTwoColumns() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    backgroundColor: "silver",
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Layout.Layout, {
    left: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "yellow"
    }, checkBoxes()),
    right: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "blue"
    }, itemcontent())
  })));
};

exports.DynamicTwoColumns = DynamicTwoColumns;

var DynamicTwoColumnsShort = function DynamicTwoColumnsShort() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, {
    showBackButton: true,
    config: {
      nav: true
    }
  }), /*#__PURE__*/_react["default"].createElement(_block.Block, {
    backgroundColor: "silver",
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Layout.Layout, {
    left: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "yellow"
    }, checkBoxes()),
    right: /*#__PURE__*/_react["default"].createElement(_block.Block, {
      backgroundColor: "blue"
    }, "'test'")
  })));
};

exports.DynamicTwoColumnsShort = DynamicTwoColumnsShort;

var MediumWidths = function MediumWidths() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_Layout.MediumWidth, null, itemcontent()));
};

exports.MediumWidths = MediumWidths;

var MediumWidthHeading = function MediumWidthHeading() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_Layout.MediumWidth, {
    headingLabel: "Heading label",
    headingText: "Heading text"
  }, itemcontent()));
};

exports.MediumWidthHeading = MediumWidthHeading;

var LargeWidthHeading = function LargeWidthHeading() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_Layout.LargeWidth, {
    headingLabel: "Heading label",
    headingText: "Heading text"
  }, itemcontent()));
};

exports.LargeWidthHeading = LargeWidthHeading;

var LargeWidths = function LargeWidths() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, null), /*#__PURE__*/_react["default"].createElement(_Layout.LargeWidth, null, itemcontent()));
};

exports.LargeWidths = LargeWidths;

var FullWidths = function FullWidths() {
  return /*#__PURE__*/_react["default"].createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/_react["default"].createElement(_header.Header, {
    showBackButton: true,
    config: {
      nav: true
    }
  }), /*#__PURE__*/_react["default"].createElement(_Layout.FullWidth, null, itemcontent()));
};

exports.FullWidths = FullWidths;