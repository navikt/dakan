"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delete_comment_modal = exports.edit_comment_modal = exports.add_comment_modal = exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = require("../../../theme");

var _AddCommentModal = _interopRequireDefault(require("./addCommentModal/AddCommentModal"));

var _DeleteCommentModal = _interopRequireDefault(require("./deleteCommentModal/DeleteCommentModal"));

var _EditCommentModal = _interopRequireDefault(require("./editCommentModal/EditCommentModal"));

var _Button = require("../../../components/button/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = {
  title: 'Components/Comment modals'
};
exports["default"] = _default;
var dataId = 123;
var clientUser = {
  dataId: 'test id',
  givenName: 'Name',
  surname: 'Surname',
  initial: 'NS',
  email: 'test.test@test.test'
};
var server = 'testServer';
var commentList = [{
  id: 1,
  label: 'comment',
  properties: {
    author: 'Lorem ipsum 1',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus molestie lorem, quis ultrices libero commodo vel. Cras vitae mauris porta erat congue rutrum. Integer nec facilisis mi, elementum fringilla tellus. Duis pretium lacinia rutrum. Phasellus porta eget nisi ut sagittis. Cras sollicitudin cursus urna, quis eleifend magna scelerisque sit amet. Integer mi neque, tristique euismod mi a, egestas posuere purus. Aenean interdum odio efficitur, vehicula nisl quis, pellentesque lectus. Donec lobortis accumsan sollicitudin.',
    date: '27.des.2014',
    time: '10:12'
  }
}, {
  id: 2,
  label: 'comment',
  properties: {
    author: 'Lorem ipsum 2',
    comment: 'Nulla molestie vitae nisi vel sollicitudin. Aliquam placerat, mi vel mattis facilisis, est nibh volutpat purus, eu porta nisi nisl vitae ligula. Phasellus pellentesque mauris neque, in rhoncus velit vestibulum et. Mauris ac condimentum nunc, ut rhoncus sapien. Praesent bibendum risus et pulvinar feugiat. Donec interdum leo metus, aliquet viverra quam fermentum ac. Suspendisse eu imperdiet mi. Praesent lobortis mauris lorem, a convallis risus aliquet ac. Nunc faucibus, metus quis viverra blandit, tortor metus aliquam ante, at consequat ligula leo sagittis erat. Mauris vulputate placerat odio. Sed euismod elit ligula, sed dictum nisi tempus ac.',
    date: '17.sep.2013',
    time: '17:42'
  }
}];
var commentContent = commentList[0];

var add_comment_modal = function add_comment_modal() {
  var _React$useState = React.useState(commentList),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      comments = _React$useState2[0],
      setComments = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isAddCommentOpen = _React$useState4[0],
      setIsAddCommentOpen = _React$useState4[1];

  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/React.createElement(_AddCommentModal["default"], {
    dataId: dataId,
    comments: comments,
    setComments: setComments,
    isOpen: isAddCommentOpen,
    setIsOpen: setIsAddCommentOpen,
    clientUser: clientUser,
    server: server
  }), /*#__PURE__*/React.createElement(_Button.Button, {
    onClick: function onClick() {
      return setIsAddCommentOpen(true);
    }
  }, "Add comment modal"));
};

exports.add_comment_modal = add_comment_modal;

var edit_comment_modal = function edit_comment_modal() {
  var _React$useState5 = React.useState(commentList),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      comments = _React$useState6[0],
      setComments = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isEditCommentOpen = _React$useState8[0],
      setIsEditCommentOpen = _React$useState8[1];

  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/React.createElement(_EditCommentModal["default"], {
    isOpen: isEditCommentOpen,
    setIsOpen: setIsEditCommentOpen,
    commentContent: commentContent,
    commentIndex: 0,
    comments: comments,
    setComments: setComments,
    server: server
  }), /*#__PURE__*/React.createElement(_Button.Button, {
    onClick: function onClick() {
      return setIsEditCommentOpen(true);
    }
  }, "Edit comment modal"));
};

exports.edit_comment_modal = edit_comment_modal;

var delete_comment_modal = function delete_comment_modal() {
  var _React$useState9 = React.useState(commentList),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      comments = _React$useState10[0],
      setComments = _React$useState10[1];

  var _React$useState11 = React.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      isDeleteModalOpen = _React$useState12[0],
      setIsDeleteModalOpen = _React$useState12[1];

  return /*#__PURE__*/React.createElement(_theme.ThemeProvider, {
    theme: (0, _theme.navTheme)()
  }, /*#__PURE__*/React.createElement(_DeleteCommentModal["default"], {
    isOpen: isDeleteModalOpen,
    setIsOpen: setIsDeleteModalOpen,
    index: 0,
    commentContent: commentContent,
    comments: comments,
    setComments: setComments,
    server: server
  }), /*#__PURE__*/React.createElement(_Button.Button, {
    onClick: function onClick() {
      return setIsDeleteModalOpen(true);
    }
  }, "Delete comment modal"));
};

exports.delete_comment_modal = delete_comment_modal;