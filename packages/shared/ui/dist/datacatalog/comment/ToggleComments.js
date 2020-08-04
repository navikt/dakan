"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToggleComments = void 0;

var React = _interopRequireWildcard(require("react"));

var _accordion = require("baseui/accordion");

var _Panel = require("../accordion/Panel");

var _block = require("baseui/block");

var _card = require("baseui/card");

var _button = require("baseui/button");

var _typography = require("baseui/typography");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Button = require("../../components/button/Button");

var _AddCommentModal = _interopRequireDefault(require("./commentModals/addCommentModal/AddCommentModal"));

var _EditCommentModal = _interopRequireDefault(require("./commentModals/editCommentModal/EditCommentModal"));

var _DeleteCommentModal = _interopRequireDefault(require("./commentModals/deleteCommentModal/DeleteCommentModal"));

var _GetValue = _interopRequireDefault(require("../../utils/GetValue/GetValue"));

var _CheckIfAuthorized = _interopRequireDefault(require("../../utils/CheckIfAuthorized/CheckIfAuthorized"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ToggleComments = function ToggleComments(prop) {
  var dataId = prop.dataId,
      comments = prop.comments,
      setComments = prop.setComments,
      clientUser = prop.clientUser,
      server = prop.server; // eslint-disable-next-line @typescript-eslint/no-unused-vars

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      commentIndex = _React$useState2[0],
      setCommentIndex = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      commentContent = _React$useState4[0],
      setCommentContent = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isDeleteModalOpen = _React$useState6[0],
      setIsDeleteModalOpen = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isAddCommentOpen = _React$useState8[0],
      setIsAddCommentOpen = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      isEditCommentOpen = _React$useState10[0],
      setIsEditCommentOpen = _React$useState10[1];

  var _React$useState11 = React.useState(''),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      isExpanded = _React$useState12[0],
      setIsExpanded = _React$useState12[1];

  var getComments = function getComments() {
    return comments.map(function (comment, index) {
      return comment && comment.properties && /*#__PURE__*/React.createElement(_block.Block, {
        padding: "scale100",
        key: 'comment_' + index
      }, /*#__PURE__*/React.createElement(_card.Card, null, /*#__PURE__*/React.createElement(_block.Block, {
        display: "flex"
      }, /*#__PURE__*/React.createElement(_block.Block, {
        flex: "1"
      }, /*#__PURE__*/React.createElement(_block.Block, {
        display: "flex"
      }, /*#__PURE__*/React.createElement(_block.Block, {
        flex: "1"
      }, /*#__PURE__*/React.createElement(_typography.LabelLarge, null, comment.properties.author)), /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_block.Block, null, 'Publisert ' + comment.properties.date + ', kl. ' + comment.properties.time))), /*#__PURE__*/React.createElement(_block.Block, {
        marginTop: "scale800"
      }, comment.properties.comment))), /*#__PURE__*/React.createElement(_block.Block, {
        marginTop: "scale800",
        display: "flex"
      }, /*#__PURE__*/React.createElement(_block.Block, {
        marginRight: "scale800"
      }, /*#__PURE__*/React.createElement(_Button.Button, {
        kind: _button.KIND.primary,
        onClick: function onClick() {
          (0, _CheckIfAuthorized["default"])(server, function () {
            setCommentIndex(index);
            setCommentContent(comment);
            setIsEditCommentOpen(true);
          });
        }
      }, "Rediger")), /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_Button.Button, {
        kind: _button.KIND.minimal,
        onClick: function onClick() {
          (0, _CheckIfAuthorized["default"])(server, function () {
            setCommentIndex(index);
            setCommentContent(comment);
            setIsDeleteModalOpen(true);
          });
        }
      }, "Slett")))));
    });
  };

  return /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_block.Block, null, /*#__PURE__*/React.createElement(_AddCommentModal["default"], {
    dataId: dataId,
    comments: comments,
    setComments: setComments,
    isOpen: isAddCommentOpen,
    setIsOpen: setIsAddCommentOpen,
    clientUser: clientUser,
    server: server
  }), /*#__PURE__*/React.createElement(_EditCommentModal["default"], {
    isOpen: isEditCommentOpen,
    setIsOpen: setIsEditCommentOpen,
    commentContent: commentContent,
    commentIndex: commentIndex,
    comments: comments,
    setComments: setComments,
    server: server
  }), /*#__PURE__*/React.createElement(_DeleteCommentModal["default"], {
    isOpen: isDeleteModalOpen,
    setIsOpen: setIsDeleteModalOpen,
    index: commentIndex,
    commentContent: commentContent,
    comments: comments,
    setComments: setComments,
    server: server
  }), /*#__PURE__*/React.createElement(_accordion.Accordion, {
    onChange: function onChange(e) {
      setIsExpanded((0, _GetValue["default"])(function () {
        return e.expanded[0].toString();
      }, ''));
    }
  }, /*#__PURE__*/React.createElement(_Panel.Panel, {
    title: "Kommentarer",
    isExpanded: isExpanded === '0'
  }, /*#__PURE__*/React.createElement(_block.Block, {
    padding: "1em"
  }, comments && comments.length > 0 && /*#__PURE__*/React.createElement(_block.Block, {
    $style: {
      maxHeight: '250px',
      overflowY: 'scroll'
    }
  }, getComments()), /*#__PURE__*/React.createElement(_block.Block, {
    display: "flex",
    paddingTop: "1em"
  }, /*#__PURE__*/React.createElement(_Button.Button, {
    onClick: function onClick() {
      (0, _CheckIfAuthorized["default"])(server, function () {
        setIsAddCommentOpen(true);
      });
    }
  }, "Skriv kommentar")))))));
};

exports.ToggleComments = ToggleComments;
var _default = ToggleComments;
exports["default"] = _default;