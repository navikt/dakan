"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Metrics = void 0;

var React = _interopRequireWildcard(require("react"));

var _amplitudeJs = _interopRequireDefault(require("amplitude-js"));

var _GoogleTagManager = require("./GoogleTagManager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Amplitude = !global.isServer ? require("amplitude-js") : null;

var Metrics = function Metrics(_ref) {
  var gt = _ref.gt,
      amplitude_project_id = _ref.amplitude_project_id,
      amplitude_endpoint = _ref.amplitude_endpoint,
      viewer = _ref.viewer,
      page = _ref.page,
      section = _ref.section;
  var AmplitudeConfig = {
    apiEndpoint: amplitude_endpoint,
    saveEvents: true,
    includeUtm: true,
    includeReferrer: true,
    trackingOptions: {
      city: false,
      ip_address: false
    }
  };
  React.useEffect(function () {
    var eventProperty = {
      viewer: viewer,
      page: page,
      section: section
    };

    if (amplitude_project_id && amplitude_endpoint) {
      var amplitudeInstance = _amplitudeJs["default"].getInstance();

      amplitudeInstance.init(amplitude_project_id, undefined, AmplitudeConfig);
      amplitudeInstance.logEvent('page_visit', eventProperty);
    }
  }, [gt, amplitude_project_id, amplitude_endpoint, viewer, page, section]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, viewer && page && section && gt && amplitude_project_id && amplitude_endpoint && /*#__PURE__*/React.createElement(_GoogleTagManager.GoogleTagManager, {
    gtmId: gt
  }));
};

exports.Metrics = Metrics;
var _default = Metrics;
exports["default"] = _default;