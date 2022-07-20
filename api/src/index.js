const { Sequelize, Op } = require('sequelize');
const modelPokemon = require('./models/Pokemon.js');
const modelType = require('./models/Type.js');

modelPokemon(db);
modelType(db);


const {Pokemon, Type} = db.models;

module.exports = {
  ...db.models,
  db,
  Op
}