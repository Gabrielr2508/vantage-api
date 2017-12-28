'use strict';
var mongoose = require('mongoose');
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

module.exports = mongoose.model('read', readSchema);