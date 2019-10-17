"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.credentials = credentials;
exports["goto"] = _goto4;
exports.ID = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var ID = 'auth';
exports.ID = ID;

var _goto, _below, _textBox, _write;

var _username, _password;

function init(taiko, eventEmitter) {
  var _goto2 = taiko["goto"],
      below = taiko.below,
      textBox = taiko.textBox,
      write = taiko.write;
  _goto = _goto2;
  _below = below;
  _textBox = textBox;
  _write = write;
}

function credentials(username, password) {
  _username = username;
  _password = password;
}

function _goto4(_x) {
  return _goto3.apply(this, arguments);
}

function _goto3() {
  _goto3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(url) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _goto(url);

          case 2:
            if (!String(url).endsWith('/login')) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return fillForm();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _goto3.apply(this, arguments);
}

function fillForm() {
  return _fillForm.apply(this, arguments);
}

function _fillForm() {
  _fillForm = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _write(_username, _textBox(_below('Username')));

          case 2:
            _context2.next = 4;
            return _write(_password, _textBox(_below('Password')));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fillForm.apply(this, arguments);
}