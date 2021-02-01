"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fire = _firebase["default"].initializeApp({
  apiKey: 'AIzaSyAWeJA7Z-qq7rjpJOT6iXJb57vjqvbn-xk',
  authDomain: 'pata-shamba.firebaseapp.com',
  databaseURL: 'https://pata-shamba.firebaseio.com',
  projectId: 'pata-shamba-8dc6f',
  storageBucket: 'pata-shamba.appspot.com',
  messagingSenderId: '806742878649',
  appId: '1:806742878649:web:4022d04bc8a9aec0672e68',
  measurementId: 'G-D19YZZ9BV7'
});

var _default = fire;
exports["default"] = _default;