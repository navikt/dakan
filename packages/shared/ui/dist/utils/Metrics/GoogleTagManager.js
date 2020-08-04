"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GoogleTagManager = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GoogleTagManager = function GoogleTagManager(props) {
  var noScriptAsReact = function noScriptAsReact(parts) {
    return /*#__PURE__*/_react["default"].createElement("noscript", {
      dangerouslySetInnerHTML: {
        __html: parts.iframe
      }
    });
  };

  var scriptAsReact = function scriptAsReact(parts) {
    return /*#__PURE__*/_react["default"].createElement("script", {
      dangerouslySetInnerHTML: {
        __html: parts.script
      }
    });
  };

  var convertToKeyValueString = function convertToKeyValueString(obj) {
    return JSON.stringify(obj).slice(1, -1);
  };

  var buildParts = function buildParts(_ref) {
    var id = _ref.id,
        _ref$dataLayerName = _ref.dataLayerName,
        dataLayerName = _ref$dataLayerName === void 0 ? 'dataLayer' : _ref$dataLayerName,
        _ref$additionalEvents = _ref.additionalEvents,
        additionalEvents = _ref$additionalEvents === void 0 ? {} : _ref$additionalEvents,
        _ref$scheme = _ref.scheme,
        scheme = _ref$scheme === void 0 ? '' : _ref$scheme,
        previewVariables = _ref.previewVariables;

    if (id === undefined) {
      throw new Error('No GTM id provided');
    }

    var iframe = "\n            <iframe src=\"".concat(scheme, "//www.googletagmanager.com/ns.html?id=").concat(id, "\"\n                height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>");
    var script = "\n            (function(w,d,s,l,i){w[l]=w[l]||[];\n                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ".concat(convertToKeyValueString(additionalEvents), "});\n                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n                j.async=true;j.src='").concat(scheme, "//www.googletagmanager.com/gtm.js?id='+i+dl\n                ").concat(previewVariables ? "+\"".concat(previewVariables, "\"") : '', ";\n                f.parentNode.insertBefore(j,f);\n            })(window,document,'script','").concat(dataLayerName, "','").concat(id, "');");
    return {
      iframe: iframe,
      script: script
    };
  };

  _react["default"].useEffect(function () {
    var dataLayerName = props.dataLayerName || 'dataLayer';
    var scriptId = props.scriptId || 'google-tag-manager';

    if (!window[dataLayerName]) {
      var gtmScriptNode = document.getElementById(scriptId);
      /* eslint no-eval: 0 */

      eval(gtmScriptNode.textContent);
    }
  }, [props]);

  var gtm = function gtm() {
    return buildParts({
      id: props.gtmId,
      dataLayerName: props.dataLayerName || 'dataLayer',
      additionalEvents: props.additionalEvents || {},
      previewVariables: props.previewVariables || false,
      scheme: props.scheme || 'https:'
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, noScriptAsReact(gtm())), /*#__PURE__*/_react["default"].createElement("div", {
    id: props.scriptId || 'google-tag-manager'
  }, scriptAsReact(gtm())));
};

exports.GoogleTagManager = GoogleTagManager;
var _default = GoogleTagManager;
exports["default"] = _default;