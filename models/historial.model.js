const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorialChatScheme = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    pregunta:{type: String, required: true, max: 250},
    respuesta:{type: String, required: true, max: 250},
    fecha: {type: String, required: true, max: 50}
});


HistorialChatScheme.set('toJSON', {getters: true});

module.exports = mongoose.model('HistorialChat', HistorialChatScheme);