'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ChampionSchema = new Schema({
  id: Number,
  freeToPlay: Boolean,
  active: Boolean,
  timestamp: Number
});

module.exports = mongoose.model('Champions', ChampionSchema);