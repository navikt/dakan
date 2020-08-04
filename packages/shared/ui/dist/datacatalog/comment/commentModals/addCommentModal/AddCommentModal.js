"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AddCommentModal = void 0;

var React = _interopRequireWildcard(require("react"));

var _modal = require("baseui/modal");

var _textarea = require("baseui/textarea");

var _shortid = _interopRequireDefault(require("shortid"));

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _spinner = require("baseui/spinner");

var _block = require("baseui/block");

var _baseui = require("baseui");

var _Button = require("../../../../components/button/Button");

var _GetCurrentDate = _interopRequireWildcard(require("../../../../utils/GetCurrentDate/GetCurrentDate"));

var _button = require("baseui/button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var AddCommentModal = function AddCommentModal(props) {
  var dataId = props.dataId,
      comments = props.comments,
      setComments = props.setComments,
      isOpen = props.isOpen,
      setIsOpen = props.setIsOpen,
      clientUser = props.clientUser,
      server = props.server;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      commentText = _React$useState2[0],
      setCommentText = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showSpinner = _React$useState4[0],
      setShowSpinner = _React$useState4[1];

  var _useStyletron = (0, _baseui.useStyletron)(),
      _useStyletron2 = _slicedToArray(_useStyletron, 2),
      theme = _useStyletron2[1];

  var addComment = function addComment() {
    var tokenId = _jsCookie["default"].get('ClientToken');

    var newTableComments = comments ? _toConsumableArray(comments) : [];
    var newComment = {
      id: "".concat(dataId, ".comment_").concat(_shortid["default"].generate()),
      label: 'table_comment',
      properties: {
        type: 'table_comment',
        author: clientUser.userId,
        comment: commentText,
        date: (0, _GetCurrentDate["default"])(),
        time: (0, _GetCurrentDate.GetCurrentTime)()
      }
    };
    newTableComments.unshift(newComment);
    var commentPayload = {
      source_id: dataId,
      edge_label: 'hasComment',
      node_body: newComment
    };

    _axios["default"].put("".concat(server, "/node/edge/upsert"), commentPayload, {
      headers: {
        'JWT-Token': tokenId
      }
    }).then(function () {
      setComments(newTableComments);
      setShowSpinner(false);
      setIsOpen(false);
    })["catch"](function (error) {
      return console.log(error);
    });

    setCommentText('');
  };

  return /*#__PURE__*/React.createElement(_modal.Modal, {
    isOpen: isOpen,
    onClose: function onClose() {
      setIsOpen(false);
      setShowSpinner(false);
    }
  }, /*#__PURE__*/React.createElement(_modal.ModalHeader, null), showSpinner ? /*#__PURE__*/React.createElement(_block.Block, {
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "scale1000"
  }, /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center",
    marginBottom: "scale300"
  }, "Kommentaren lagres..."), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_spinner.Spinner, {
    size: 56
  }))) : /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_modal.ModalBody, null, /*#__PURE__*/React.createElement(_textarea.Textarea, {
    onChange: function onChange(e) {
      return setCommentText(e.target.value);
    },
    placeholder: "Skriv en kommentar...",
    value: commentText
  })), /*#__PURE__*/React.createElement(_modal.ModalFooter, null, /*#__PURE__*/React.createElement(_Button.ModalButton, {
    kind: _button.KIND.minimal,
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "Avbryt"), /*#__PURE__*/React.createElement(_Button.ModalButton, {
    onClick: function onClick() {
      addComment();
      setShowSpinner(true);
    }
  }, "Lagre"))));
};

exports.AddCommentModal = AddCommentModal;
var _default = AddCommentModal;
exports["default"] = _default;