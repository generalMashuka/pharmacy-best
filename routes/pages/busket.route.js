const busketRout = require('express').Router();

const { BusketPcoduct } = require('../../db/models');
const Busket = require('../../views/Busket');

busketRout.get('/', async (req, res) => {
  res.renderComponent(Busket, {});
});
