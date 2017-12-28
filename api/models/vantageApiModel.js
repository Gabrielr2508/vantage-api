'use strict';
var mongoose = require('mongoose');
var timeZone = require('mongoose-timezone');
var Schema = mongoose.Schema;

var readSchema = new Schema({
    readDate: {
        type: Date,
        default: Date.now
    },
    barometer: {
        type: Number,
    },
    inTemperature: {
        type: Number,
    },
    outTemperature: {
        type: Number,
    },
    inHumidity: {
        type: Number,
    },
    outHumidity: {
        type: Number,
    },
    windSpeed: {
        type: Number,
    },
    windDirection: {
        type: Number,
    },
    dayRain: {
        type: Number,
    },
    rainRate: {
        type: Number,
    },
    forecast: {
        type: Number,
    }
});

readSchema.plugin(timeZone, { paths: ['readDate'] });

module.exports = mongoose.model('read', readSchema);