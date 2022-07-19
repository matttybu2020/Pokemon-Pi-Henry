const { Sequelize, Op } = require('sequelize');
const modelPokemon = require('./models/Pokemon.js');
const modelTipo = require('./models/Type.js');

modelPokemon(db);
modelTipo(db);


const {Pokemon, Type} = db.models;

module.exports = {
  ...db.models,
  db,
  Op
}