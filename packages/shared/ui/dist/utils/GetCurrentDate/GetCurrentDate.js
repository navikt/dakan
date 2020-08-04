"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GetCurrentDate = exports.GetCurrentTime = void 0;
var newDate = new Date();
var monthName = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'];

var GetCurrentTime = function GetCurrentTime() {
  var hour = newDate.getHours();
  var minute = newDate.getMinutes();
  return "".concat(hour < 10 ? "0".concat(hour) : "".concat(hour), ":").concat(minute < 10 ? "0".concat(minute) : "".concat(minute));
};

exports.GetCurrentTime = GetCurrentTime;

var GetCurrentDate = function GetCurrentDate() {
  var date = newDate.getDate();
  var month = newDate.getMonth();
  var year = newDate.getFullYear();
  return "".concat(date < 10 ? "0".concat(date) : "".concat(date), ".").concat(monthName[month], ".").concat(year);
};

exports.GetCurrentDate = GetCurrentDate;
var _default = GetCurrentDate;
exports["default"] = _default;