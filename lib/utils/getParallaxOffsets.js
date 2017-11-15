'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getParallaxOffsets;

var _index = require('./index');

/**
 * Gets the parallax X and Y offsets to be applied to an element
 * based upon the percent the element has moved in the viewport
 * and the min/max offsets
 * @returns {Object}
 */

function getParallaxOffsets(offsets, percentMoved, slowerScrollRate) {
    var yMin = offsets.yMin,
        yMax = offsets.yMax,
        xMin = offsets.xMin,
        xMax = offsets.xMax,
        rMin = offsets.rMin,
        rMax = offsets.rMax;


    var yUnit = yMax.unit;
    var xUnit = xMax.unit;
    var rotateUnit = rMax.unit;

    // sets parallax to faster or slower than the rate of scroll
    var x = 0;
    var y = 0;
    var rotate = 0;

    if (slowerScrollRate) {
        x = (0, _index.scaleBetween)(percentMoved, xMin.value, xMax.value, 0, 100);
        y = (0, _index.scaleBetween)(percentMoved, yMin.value, yMax.value, 0, 100);
        rotate = (0, _index.scaleBetween)(percentMoved, rMin.value, rMax.value, 0, 100);
    } else {
        // flipped max/min
        x = (0, _index.scaleBetween)(percentMoved, xMax.value, xMin.value, 0, 100);
        y = (0, _index.scaleBetween)(percentMoved, yMax.value, yMin.value, 0, 100);
        rotate = (0, _index.scaleBetween)(percentMoved, rMax.value, rMin.value, 0, 100);
    }

    return {
        x: {
            value: x,
            unit: xUnit
        },
        y: {
            value: y,
            unit: yUnit
        },
        rotate: {
            value: rotate,
            unit: rotateUnit
        }
    };
}
module.exports = exports['default'];