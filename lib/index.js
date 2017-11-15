'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParallaxController = exports.ParallaxProvider = exports.Parallax = undefined;

var _Parallax2 = require('./components/Parallax');

var _Parallax3 = _interopRequireDefault(_Parallax2);

var _ParallaxProvider2 = require('./components/ParallaxProvider');

var _ParallaxProvider3 = _interopRequireDefault(_ParallaxProvider2);

var _ParallaxController2 = require('./libs/ParallaxController');

var _ParallaxController3 = _interopRequireDefault(_ParallaxController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Parallax = _Parallax3.default;
exports.ParallaxProvider = _ParallaxProvider3.default;
exports.ParallaxController = _ParallaxController3.default;