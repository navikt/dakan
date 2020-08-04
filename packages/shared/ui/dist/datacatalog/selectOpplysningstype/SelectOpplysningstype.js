"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectOpplysningstype = void 0;

var React = _interopRequireWildcard(require("react"));

var _select = require("baseui/select");

var _tag = require("baseui/tag");

var _block = require("baseui/block");

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _Tag = require("../../components/tag/Tag");

var _GetValue = _interopRequireDefault(require("../../utils/GetValue/GetValue"));

var _CheckIfAuthorized = _interopRequireDefault(require("../../utils/CheckIfAuthorized/CheckIfAuthorized"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SelectOpplysningstype = function SelectOpplysningstype(props) {
  var tagOptions = props.tagOptions,
      dataId = props.dataId,
      serverUrl = props.serverUrl,
      columnTags = props.columnTags,
      setColumnTags = props.setColumnTags;

  var deleteTag = function deleteTag(index, tagId) {
    var tokenId = _jsCookie["default"].get('ClientToken');

    var newTags = _toConsumableArray(columnTags);

    newTags.splice(index, 1);

    _axios["default"]["delete"]("".concat(serverUrl, "/edge"), {
      params: {
        n1: dataId,
        n2: tagId
      },
      headers: {
        'JWT-Token': tokenId
      }
    }).then(function () {
      return setColumnTags(newTags);
    })["catch"](function (e) {
      return console.log(e);
    });
  };

  var addTag = function addTag(value) {
    var tokenId = _jsCookie["default"].get('ClientToken');

    var newTag = value[0];

    var newTags = _toConsumableArray(columnTags);

    newTags.unshift(newTag);
    var tagPayload = [{
      outV: dataId,
      inV: newTag.id,
      label: 'hasTag'
    }];

    _axios["default"].put("".concat(serverUrl, "/edge"), tagPayload, {
      headers: {
        'JWT-Token': tokenId
      }
    }).then(function () {
      return setColumnTags(newTags);
    })["catch"](function (e) {
      return console.log(e);
    });
  };

  var getTags = function getTags() {
    return columnTags.map(function (tag, index) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, tag && tag.properties && /*#__PURE__*/React.createElement(_Tag.Tag, {
        key: 'tag_' + index,
        variant: _tag.VARIANT.outlined,
        onActionClick: function onActionClick() {
          return (0, _CheckIfAuthorized["default"])(serverUrl, function () {
            return deleteTag(index, tag.id);
          });
        }
      }, (0, _GetValue["default"])(function () {
        return tag.properties.name;
      })));
    });
  };

  var getOptions = function getOptions() {
    var options = tagOptions.map(function (tag) {
      return {
        name: (0, _GetValue["default"])(function () {
          return tag.properties.name;
        }),
        id: tag.id,
        properties: tag.properties
      };
    });
    return /*#__PURE__*/React.createElement(_select.Select, {
      options: options,
      labelKey: "name",
      valueKey: "name",
      onChange: function onChange(tag) {
        return (0, _CheckIfAuthorized["default"])(serverUrl, function () {
          return addTag(tag.value);
        });
      },
      placeholder: "Velg opplysningtype",
      maxDropdownHeight: "300px"
    });
  };

  return /*#__PURE__*/React.createElement(_block.Block, null, tagOptions && getOptions(), columnTags && columnTags.length > 0 && /*#__PURE__*/React.createElement(_block.Block, {
    marginTop: "scale300"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    marginTop: "scale300"
  }, getTags())));
};

exports.SelectOpplysningstype = SelectOpplysningstype;
var _default = SelectOpplysningstype;
exports["default"] = _default;