import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, require: true },
    nombreReal: { type: String, require: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: String,
  