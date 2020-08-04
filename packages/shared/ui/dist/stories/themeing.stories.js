"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = exports.Footers = exports.Headers = exports.Tabbar = exports.SelectOpplysningstyper = exports.Navbars = exports.ButtonGroups = exports.Samples = exports.Selects = exports.Icons = exports["default"] = void 0;

var _theme = require("../theme");

var React = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _icons = require("../components/icons");

var _icon = require("baseui/icon");

var _button = require("baseui/button");

var _datacatalog = require("../datacatalog");

var _radio = require("baseui/radio");

var _link = require("baseui/link");

var _typography = require("baseui/typography");

var _block = require("baseui/block");

var _slider = require("baseui/slider");

var _select = require("baseui/select");

var _accordion = require("baseui/accordion");

var _buttonGroup = require("baseui/button-group");

var _checkbox = require("baseui/checkbox");

var _tag = require("baseui/tag");

var _addonKnobs = require("@storybook/addon-knobs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'Themes/NAV',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var getTheme = function getTheme() {
  var theme = (0, _addonKnobs.text)('Theme', 'NAV') || 'NAV';
  var borderRadius = (0, _addonKnobs.text)('Border Radius', '0px') || '0px';

  if (theme && theme === 'NAV') {
    return (0, _theme.navTheme)(borderRadius);
  }

  if (theme && theme === 'Dark') {
    return (0, _theme.darkTheme)(borderRadius);
  }

  return (0, _theme.lightTheme)(borderRadius);
};

var Spacer = function Spacer(props) {
  return /*#__PURE__*/React.createElement(_block.Block, {
    marginTop: "scale1600",
    marginBottom: "scale500",
    backgroundColor: "yellow"
  }, /*#__PURE__*/React.createElement(_typography.HeadingSmall, null, props.children));
};

var Icons = function Icons() {
  var theme = getTheme();
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_icons.InfoIcon, {
    fill: "#19548A"
  }), /*#__PURE__*/React.createElement(_icons.InfoHoverIcon, null), /*#__PURE__*/React.createElement(_icons.ContactIcon, {
    fill: "#19548A"
  }), /*#__PURE__*/React.createElement(_icons.ContactHoverIcon, null), /*#__PURE__*/React.createElement(_icons.CloseIcon, {
    fill: "#19548A"
  }), /*#__PURE__*/React.createElement(_icons.DownloadIcon, {
    fill: "#19548A"
  }), /*#__PURE__*/React.createElement(_icons.DownloadHoverIcon, null), /*#__PURE__*/React.createElement(_icons.FilterIcon, {
    fill: "#3E3832"
  }), /*#__PURE__*/React.createElement(_icons.RightChevronIcon, {
    fill: "#19548A"
  }), /*#__PURE__*/React.createElement(_icons.RightChevronHoverIcon, null), /*#__PURE__*/React.createElement(_icons.MenuIcon, null), /*#__PURE__*/React.createElement(_icons.LeftChevronIcon, null), /*#__PURE__*/React.createElement(_icons.LeftChevronHoverIcon, null));
};

exports.Icons = Icons;

var Selects = function Selects() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/React.createElement(_select.Select, {
    options: [{
      label: 'AliceBlue',
      id: '#F0F8FF'
    }, {
      label: 'AntiqueWhite',
      id: '#FAEBD7'
    }, {
      label: 'Aqua',
      id: '#00FFFF'
    }, {
      label: 'Aquamarine',
      id: '#7FFFD4'
    }, {
      label: 'Azure',
      id: '#F0FFFF'
    }, {
      label: 'Beige',
      id: '#F5F5DC'
    }],
    value: value,
    placeholder: "Select color",
    onChange: function onChange(params) {
      return setValue(params.value);
    }
  });
};

exports.Selects = Selects;

var Samples = function Samples() {
  var theme = getTheme();
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Spacer, null, 'Base Buttons'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(BaseButtons, null)), /*#__PURE__*/React.createElement(Spacer, null, 'Buttons'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(Buttons, null)), /*#__PURE__*/React.createElement(Spacer, null, 'IconButtons'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(IconButtons, null)), /*#__PURE__*/React.createElement(Spacer, null, 'Select'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(_select.Select, null)), /*#__PURE__*/React.createElement(Spacer, null, 'Tags'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(Tags, null)), /*#__PURE__*/React.createElement(Spacer, null, 'Inputs'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(Inputs, null)), /*#__PURE__*/React.createElement(Spacer, null, 'Sliders'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(Sliders, null)), /*#__PURE__*/React.createElement(Spacer, null, 'Checkboxes'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(Checkboxes, null)), /*#__PURE__*/React.createElement(Spacer, null, 'Links'), /*#__PURE__*/React.createElement(_block.Block, {
    margin: "scale800"
  }, /*#__PURE__*/React.createElement(Links, null)));
};

exports.Samples = Samples;

var ButtonGroups = function ButtonGroups() {
  var theme = getTheme();
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(Spacer, null, 'Base default'), /*#__PURE__*/React.createElement(_buttonGroup.ButtonGroup, null, /*#__PURE__*/React.createElement(_button.Button, null, "One"), /*#__PURE__*/React.createElement(_button.Button, null, "Two"), /*#__PURE__*/React.createElement(_button.Button, null, "Three")), /*#__PURE__*/React.createElement(Spacer, null, 'Themed default'), /*#__PURE__*/React.createElement(_buttonGroup.ButtonGroup, null, /*#__PURE__*/React.createElement(_components.Button, null, "One"), /*#__PURE__*/React.createElement(_components.Button, null, "Two"), /*#__PURE__*/React.createElement(_components.Button, null, "Three")), /*#__PURE__*/React.createElement(Spacer, null, 'Themed minimal'), /*#__PURE__*/React.createElement(_buttonGroup.ButtonGroup, null, /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal
  }, "One"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal
  }, "Two"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal
  }, "Three")), /*#__PURE__*/React.createElement(Spacer, null, 'Statefull Base default'), /*#__PURE__*/React.createElement(_buttonGroup.StatefulButtonGroup, {
    mode: _buttonGroup.MODE.radio,
    initialState: {
      selected: 0
    }
  }, /*#__PURE__*/React.createElement(_button.Button, null, "One"), /*#__PURE__*/React.createElement(_button.Button, null, "Two"), /*#__PURE__*/React.createElement(_button.Button, null, "Three")), /*#__PURE__*/React.createElement(Spacer, null, 'Statefull Themed default'), /*#__PURE__*/React.createElement(_buttonGroup.StatefulButtonGroup, {
    mode: _buttonGroup.MODE.radio,
    initialState: {
      selected: 0
    }
  }, /*#__PURE__*/React.createElement(_components.Button, null, "One"), /*#__PURE__*/React.createElement(_components.Button, null, "Two"), /*#__PURE__*/React.createElement(_components.Button, null, "Three")), /*#__PURE__*/React.createElement(Spacer, null, 'Statefull Themed minimal'), /*#__PURE__*/React.createElement(_buttonGroup.StatefulButtonGroup, {
    mode: _buttonGroup.MODE.radio,
    initialState: {
      selected: 0
    }
  }, /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal
  }, "One"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal
  }, "Two"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal
  }, "Three"))));
};

exports.ButtonGroups = ButtonGroups;

var Navbars = function Navbars() {
  var theme = getTheme();
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_components.Navbar, null));
};

exports.Navbars = Navbars;

var SelectOpplysningstyper = function SelectOpplysningstyper() {
  var tagOptions = [{
    id: 'tag1',
    label: 'tag1',
    properties: {
      name: 'tag1',
      type: 'tag1'
    }
  }, {
    id: 'tag2',
    label: 'tag2',
    properties: {
      name: 'tag2',
      type: 'tag2'
    }
  }];
  var dataId = 123;

  var _React$useState3 = React.useState([{
    id: 'tag3',
    label: 'tag3',
    properties: {
      name: 'tag3',
      type: 'tag3'
    }
  }, {
    id: 'tag4',
    label: 'tag4',
    properties: {
      name: 'tag4',
      type: 'tag4'
    }
  }, {
    id: 'tag5',
    label: 'tag5',
    properties: {
      name: 'test@test.test',
      type: 'tag5'
    }
  }, {
    id: 'tag6',
    label: 'tag6',
    properties: {
      name: 'tag test',
      type: 'tag6'
    }
  }]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      columnTags = _React$useState4[0],
      setColumnTags = _React$useState4[1];

  var theme = getTheme();
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_datacatalog.SelectOpplysningstype, {
    dataId: dataId,
    tagOptions: tagOptions,
    serverUrl: "testUrl",
    columnTags: columnTags,
    setColumnTags: setColumnTags
  }));
};

exports.SelectOpplysningstyper = SelectOpplysningstyper;

var Tabbar = function Tabbar() {
  var _React$useState5 = React.useState('0'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      activeKey = _React$useState6[0],
      setActiveKey = _React$useState6[1];

  var theme = getTheme();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_components.Tabs, {
    onChange: function onChange(_ref) {
      var activeKey = _ref.activeKey;
      setActiveKey(activeKey.toString());
    },
    activeKey: activeKey
  }, /*#__PURE__*/React.createElement(_components.Tab, {
    title: "First tab"
  }, "First tab content"), /*#__PURE__*/React.createElement(_components.Tab, {
    title: "Second tab"
  }, "Second tab content"))));
};

exports.Tabbar = Tabbar;

var Headers = function Headers() {
  var theme = getTheme();
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/React.createElement(Spacer, null, "Header with login button:")), /*#__PURE__*/React.createElement(_components.Header //showBackButton
  , {
    config: {
      brand: 'Datakatalogen',
      about: true,
      contact: true,
      showLoginButton: true,
      link: 'https://data.nav.no/',
      aboutLink: 'https://data.nav.no/'
    }
  })), /*#__PURE__*/React.createElement(_block.Block, {
    marginTop: "200px"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/React.createElement(Spacer, null, "Header with user logged in:")), /*#__PURE__*/React.createElement(_components.Header, {
    tokenId: "Test",
    clientUser: {
      userId: 'TEST1245',
      initial: 'TS'
    } //showBackButton
    ,
    showLoginButton: true,
    config: {
      brand: 'Datakatalogen',
      about: true,
      contact: true,
      showLoginButton: true
    }
  })));
};

exports.Headers = Headers;

var Footers = function Footers() {
  var theme = getTheme();
  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/React.createElement(Spacer, null, "External Footer:")), /*#__PURE__*/React.createElement(_components.Footer, null)), /*#__PURE__*/React.createElement(_block.Block, {
    marginTop: "scale1000"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    marginBottom: "scale500"
  }, /*#__PURE__*/React.createElement(Spacer, null, "Internal Footer:")), /*#__PURE__*/React.createElement(_components.Footer, {
    isInternal: true
  })));
};

exports.Footers = Footers;

var Inputs = function Inputs() {
  var _React$useState7 = React.useState('Hello'),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      value = _React$useState8[0],
      setValue = _React$useState8[1];

  return /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_block.Block, {
    marginBottom: "scale800"
  }, /*#__PURE__*/React.createElement(_components.Input, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    placeholder: "Controlled Input"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_block.Block, {
    marginBottom: "scale800"
  }, /*#__PURE__*/React.createElement(_components.Searchbox, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    placeholder: "Controlled Input"
  })));
};

var BaseButtons = function BaseButtons() {
  return /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_button.Button, {
    kind: _button.KIND.primary
  }, "primary"), /*#__PURE__*/React.createElement(_button.Button, {
    kind: _button.KIND.primary,
    size: _button.SIZE.compact
  }, "compact"), /*#__PURE__*/React.createElement(_button.Button, {
    kind: _button.KIND.primary,
    size: _button.SIZE.mini
  }, "mini"), /*#__PURE__*/React.createElement(_button.Button, {
    kind: _button.KIND.primary,
    shape: _button.SHAPE.pill
  }, "pill"), /*#__PURE__*/React.createElement(_button.Button, {
    kind: _button.KIND.minimal
  }, "minimal"), /*#__PURE__*/React.createElement(_button.Button, {
    kind: _button.KIND.tertiary
  }, "tertiary"), /*#__PURE__*/React.createElement(_button.Button, {
    kind: _button.KIND.secondary
  }, "secondary"));
};

var Buttons = function Buttons() {
  return /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary
  }, "primary"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary,
    size: _button.SIZE.compact
  }, "compact"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary,
    size: _button.SIZE.mini
  }, "mini"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary,
    shape: _button.SHAPE.pill
  }, "pill"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal
  }, "minimal"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.tertiary
  }, "tertiary"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.secondary
  }, "secondary"));
};

var IconButtons = function IconButtons() {
  return /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary,
    startEnhancer: /*#__PURE__*/React.createElement(_icon.ArrowRight, {
      size: 24
    }),
    startEnhancerHover: /*#__PURE__*/React.createElement(_icon.ArrowRight, {
      size: 24
    })
  }, "primary"), /*#__PURE__*/React.createElement(_components.Button, {
    size: _button.SIZE.compact,
    kind: _button.KIND.primary,
    startEnhancer: /*#__PURE__*/React.createElement(_icon.ArrowRight, null),
    startEnhancerHover: /*#__PURE__*/React.createElement(_icon.ArrowLeft, null)
  }, "primary"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary,
    startEnhancer: /*#__PURE__*/React.createElement(_icon.Alert, {
      size: 24
    }),
    startEnhancerHover: /*#__PURE__*/React.createElement(_icon.ArrowRight, {
      size: 24
    })
  }, "primary"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary,
    style: {
      borderRadius: 'px'
    },
    startEnhancer: /*#__PURE__*/React.createElement(_icon.Alert, {
      size: 24
    }),
    startEnhancerHover: /*#__PURE__*/React.createElement(_icon.ArrowRight, {
      size: 24
    })
  }, "radius"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.primary,
    shape: _button.SHAPE.pill,
    startEnhancer: /*#__PURE__*/React.createElement(_icon.Alert, {
      size: 24
    }),
    startEnhancerHover: /*#__PURE__*/React.createElement(_icon.ArrowRight, {
      size: 24
    })
  }, "primary"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.minimal,
    startEnhancer: /*#__PURE__*/React.createElement(_icons.InfoIcon, {
      size: 24
    }),
    startEnhancerHover: /*#__PURE__*/React.createElement(_icon.Alert, {
      size: 24
    })
  }, "minimal"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.tertiary,
    startEnhancer: /*#__PURE__*/React.createElement(_icons.InfoIcon, {
      size: 24
    })
  }, "tertiary"), /*#__PURE__*/React.createElement(_components.Button, {
    kind: _button.KIND.secondary,
    startEnhancer: /*#__PURE__*/React.createElement(_icons.InfoIcon, {
      size: 24
    }),
    startEnhancerHover: /*#__PURE__*/React.createElement(_icon.Alert, {
      size: 24
    })
  }, "secondary"));
};

var Links = function Links() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_typography.LabelLarge, null, /*#__PURE__*/React.createElement(_link.StyledLink, {
    href: "https://data.nav.no"
  }, "Large link")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_link.StyledLink, {
    href: "https://www.google.com"
  }, "Link"));
};

var Tags = function Tags() {
  var theme = getTheme();
  var variants = Object.keys(_tag.VARIANT);
  return /*#__PURE__*/React.createElement(React.Fragment, null, variants.map(function (variant, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(_components.Tag, {
      closeable: false,
      variant: variant,
      kind: "neutral"
    }, "neutral"), /*#__PURE__*/React.createElement(_components.Tag, {
      closeable: false,
      variant: variant,
      kind: "primary"
    }, "primary"), /*#__PURE__*/React.createElement(_components.Tag, {
      closeable: false,
      variant: variant,
      kind: "accent"
    }, "accent"), /*#__PURE__*/React.createElement(_components.Tag, {
      closeable: false,
      variant: variant,
      kind: "positive"
    }, "positive"), /*#__PURE__*/React.createElement(_components.Tag, {
      closeable: false,
      variant: variant,
      kind: "warning"
    }, "warning"), /*#__PURE__*/React.createElement(_components.Tag, {
      closeable: false,
      variant: variant,
      kind: "negative"
    }, "negative"), /*#__PURE__*/React.createElement("br", null));
  }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components.Tag, {
    color: "#4327F1",
    variant: _tag.VARIANT.solid,
    kind: _tag.KIND.custom,
    onClick: function onClick() {}
  }, "custom"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_components.Tag, {
    color: "#4327F1",
    kind: _tag.KIND.custom,
    onClick: function onClick() {}
  }, "custom"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_components.Tag, {
    color: "#4327F1",
    variant: _tag.VARIANT.outlined,
    kind: _tag.KIND.custom,
    onClick: function onClick() {}
  }, "custom"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_components.Tag, {
    color: "black",
    kind: _tag.KIND.custom,
    closeable: false,
    backgroundColor: 'yellow'
  }, "custom"), /*#__PURE__*/React.createElement(_components.Tag, {
    color: "black",
    kind: _tag.KIND.custom,
    closeable: false,
    backgroundColor: 'yellow',
    borderColor: theme.colors.tagApiBorderColor
  }, "custom with outline")));
};

var Sliders = function Sliders() {
  var _React$useState9 = React.useState([10]),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      value = _React$useState10[0],
      setValue = _React$useState10[1];

  return /*#__PURE__*/React.createElement(_slider.Slider, {
    value: value,
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return value && setValue(value);
    }
  });
};

var Radios = function Radios() {
  var _React$useState11 = React.useState('2'),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      value = _React$useState12[0],
      setValue = _React$useState12[1];

  return /*#__PURE__*/React.createElement(_radio.RadioGroup, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    name: "number",
    align: _radio.ALIGN.vertical
  }, /*#__PURE__*/React.createElement(_radio.Radio, {
    value: "1"
  }, "One"), /*#__PURE__*/React.createElement(_radio.Radio, {
    value: "2",
    description: "This is a radio description"
  }, "Two"), /*#__PURE__*/React.createElement(_radio.Radio, {
    value: "3"
  }, "Three"));
};

var Checkboxes = function Checkboxes() {
  var _React$useState13 = React.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      checked = _React$useState14[0],
      setChecked = _React$useState14[1];

  var _React$useState15 = React.useState([false, false]),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      checkboxes = _React$useState16[0],
      setCheckboxes = _React$useState16[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components.Checkbox, {
    checked: checked,
    onChange: function onChange(e) {
      return setChecked(e.target.checked);
    },
    labelPlacement: _checkbox.LABEL_PLACEMENT.right
  }, "Sign up for the newsletter"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_components.Checkbox, {
    checked: checkboxes[0],
    onChange: function onChange(e) {
      var nextCheckboxes = _toConsumableArray(checkboxes);

      nextCheckboxes[0] = e.currentTarget.checked;
      setCheckboxes(nextCheckboxes);
    },
    checkmarkType: _checkbox.STYLE_TYPE.toggle_round
  }, "toggle me"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_components.Checkbox, {
    disabled: true,
    checked: checkboxes[1],
    onChange: function onChange(e) {
      var nextCheckboxes = _toConsumableArray(checkboxes);

      nextCheckboxes[1] = e.currentTarget.checked;
      setCheckboxes(nextCheckboxes);
    },
    checkmarkType: _checkbox.STYLE_TYPE.toggle_round
  }, "disabled toggle"));
};

var Theme = function Theme() {
  var theme = getTheme();
  return /*#__PURE__*/React.createElement("pre", null, JSON.stringify(theme, null, 2));
};

exports.Theme = Theme;