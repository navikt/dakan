"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CheckIfAuthorized = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckIfAuthorized = function CheckIfAuthorized(serverUrl, func) {
  var clientUser = _jsCookie["default"].get('ClientUser');

  var tokenId = _jsCookie["default"].get('ClientToken');

  if (clientUser && tokenId) {
    return func();
  } else {
    return window.location.replace("".concat(serverUrl, "/login?redirect_url=").concat(window.location.href));
  }
};

exports.CheckIfAuthorized = CheckIfAuthorized;
var _default = CheckIfAuthorized;
exports["default"] = _default;