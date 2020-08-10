var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var client  = new Schema({
    Cliente_ID: {
        type: Number,
        validate: {
            validator : Number.isInteger
        }
    },
    Nombre_usuario : String,
    Contraseña: String,
    Nombre: String,
    Apellidos:String,
    Correo_Electronico: String, 
    Edad: {
        type: Number,
        validate: {
            validator : Number.isInteger
        }
    },
    Estatura: {type: Number, default: 0 , validator:{
        validator: Number.parseInt
    }},
    Peso: {type: Number, default: 0 , validator:{
        validator: Number.parseInt
    }},
    IMC: {type: Number, default: 0 , validator:{
        validator: Number.parseInt
    }},
    GEB: {type: Number, default: 0 , validator:{
        validator: Number.parseInt
    }},
    ETA: {type: Number, default: 0 , validator:{
        validator: Number.parseInt
    }},
    Fecha_Creacion : Date,
    Fecha_Actualizacion : Date
});

module.exports = mongoose.model('Client', client);

// {
//     "Client_ID" : 1,
//     "Nombre_usuario": "Alejandro",
//     "Contraseña": "password",
//     "Nombre": "Alex",
//     "Apellidos" :"Perez Flores",
//     "Correo_Electronico" : "lala@gmail.com",
//     "Edad" : 22,
//     "Estatura" : 1.50,
//     "Peso" : 40.5,
//     "IMC": 20.4,
//     "GEB" : 40.8 ,
//     "ETA" : 40.9,
//     "Fecha_Creacion " : "\"2014-01-01T23:28:56.782Z\"",
//     "Fecha_Actualizacion" :  "\"2015-01-01T23:28:56.782Z\""

// }

