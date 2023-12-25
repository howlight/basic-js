const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    // проверка на строку
    if (typeof sampleActivity !== 'string') {
        return false;
    }
    const value = Number(sampleActivity);
    // проверка value - NaN, больше 15, меньше 1
    if (Number.isNaN(value) || value > 15 || value < 1) {
        return false;
    }
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;
    const k = 0.693 / HALF_LIFE_PERIOD;
    const t = Math.log(MODERN_ACTIVITY / value) / k;

    return Math.ceil(t);
}

module.exports = {
    dateSample,
};
