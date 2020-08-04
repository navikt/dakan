"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEMS = exports.nav = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var nav = [{
  title: 'Colors',
  itemId: '#level1.1',
  subNav: [{
    title: 'Primary',
    itemId: '#level1.1.1'
  }, {
    title: 'Shades',
    itemId: '#level1.1.2',
    subNav: [{
      title: 'Dark',
      itemId: '#level1.1.2.1'
    }, {
      title: 'Light',
      itemId: '#level1.1.2.2'
    }]
  }]
}, {
  title: 'Sizing',
  itemId: '#level1.2'
}, {
  title: 'Typography',
  itemId: '#level1.3'
}];
exports.nav = nav;

var ITEMS = _toConsumableArray(new Array(10)).map(function () {
  return {
    title: 'David Smith',
    subtitle: 'Senior Engineering Manager',
    body: 'Uber Everything',
    imgUrl: 'https://via.placeholder.com/60x60'
  };
});

exports.ITEMS = ITEMS;