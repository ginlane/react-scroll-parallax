'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.offsetMin = offsetMin;
exports.offsetMax = offsetMax;
function offsetMin(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';

    if (!(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'string' || !(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'number') {
        return new Error('[' + propName + '] in ' + componentName + ' must be a string with with "%"" or "px" units or number');
    }

    if (props[propName]) {
        var _value = props[propName];
        if (typeof _value === 'string') {
            _value = parseInt(_value, 10);
        }
        return _value <= 0 ? null : new Error('[' + propName + '] in ' + componentName + ' is greater than zero. [' + propName + '] must be less than or equal to zero.');
    }
    return null;
}

function offsetMax(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';

    if (!(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'string' || !(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'number') {
        return new Error('[' + propName + '] in ' + componentName + ' must be a string with with "%"" or "px" units or number');
    }

    if (props[propName]) {
        var _value2 = props[propName];
        if (typeof _value2 === 'string') {
            _value2 = parseInt(_value2, 10);
        }
        return _value2 >= 0 ? null : new Error('[' + propName + '] in ' + componentName + ' is less than zero. [' + propName + '] must be greater than or equal to zero.');
    }
    return null;
}