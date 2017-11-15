import getParallaxOffsets from 'utils/getParallaxOffsets.js';
import { parseValueAndUnit, scaleBetween } from 'utils';

const offset = {
    xMin: parseValueAndUnit('-100px'),
    xMax: parseValueAndUnit('40px'),
    yMin: parseValueAndUnit('-80%'),
    yMax: parseValueAndUnit('50%'),
    rMin: parseValueAndUnit(-30, 'deg'),
    rMax: parseValueAndUnit(30, 'deg'),
};

const percentMoved = 44;

test('Gets offsets based on percent in view', () => {
    expect(getParallaxOffsets(offset, percentMoved, false)).toEqual({
        x: {
            value: scaleBetween(
                percentMoved,
                offset.xMax.value,
                offset.xMin.value,
                0,
                100
            ),
            unit: offset.xMax.unit,
        },
        y: {
            value: scaleBetween(
                percentMoved,
                offset.yMax.value,
                offset.yMin.value,
                0,
                100
            ),
            unit: offset.yMax.unit,
        },
        rotate: {
            value: scaleBetween(
                percentMoved,
                offset.rMax.value,
                offset.rMin.value,
                0,
                100
            ),
            unit: offset.rMax.unit,
        }
    });

    expect(getParallaxOffsets(offset, percentMoved, true)).toEqual({
        x: {
            value: scaleBetween(
                percentMoved,
                offset.xMin.value,
                offset.xMax.value,
                0,
                100
            ),
            unit: offset.xMax.unit,
        },
        y: {
            value: scaleBetween(
                percentMoved,
                offset.yMin.value,
                offset.yMax.value,
                0,
                100
            ),
            unit: offset.yMax.unit,
        },
        rotate: {
            value: scaleBetween(
                percentMoved,
                offset.rMin.value,
                offset.rMax.value,
                0,
                100
            ),
            unit: offset.rMax.unit,
        }
    });
});
