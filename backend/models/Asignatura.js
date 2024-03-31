const mongoose = require('mongoose');

const asignaturaSchema = new mongoose.Schema({
  asignatura: String,
  tipo: String,
  curso: String,
  grupo: String,
  horas: Number,
  espacio: String
});

module.exports = mongoose.model('Asignatura', asignaturaSchema);