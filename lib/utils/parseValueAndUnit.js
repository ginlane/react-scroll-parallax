'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = parseValueAndUnit;
/**
 * Determines the unit of a string and parses the value
 *
 * @param {string} value
 * @return {object} The parsed value and the unit if any
 */
function parseValueAndUnit(value) {
    var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '%';

    var isBool = typeof value === 'boolean';
    var isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
    var isString = typeof value === 'string';
    var isNumb = typeof value === 'number';

    if (isBool || isObject) {
        throw new Error('Invalid value provided. Must provide a value as a string with % or px units.');
    }

    if (isNumb) {
        return {
            value: value,
            unit: defaultUnit // defaults to percent if not unit is passed
        };
    } else if (isString && value.slice(-1) === '%') {
        // remove % then parse
        value = parseInt(value.slice(0, -1), 10);

        return {
            value: value,
            unit: '%'
        };
    } else if (isString && value.slice(-2) === 'px') {
        // remove px then parse
        value = parseInt(value.slice(0, -2), 10);

        return {
            value: value,
            unit: 'px'
        };
    }
}
module.exports = exports['default'];