const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let Client  = {
    Cliente_ID: "{
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
};

app.post('/client', function (req, res) {
    var client = new Client();
    client.Client_ID = request.body.Client_ID;
    client.Nombre_usuario = request.body.Nombre_usuario ;
    client.Contraseña= request.body.Contraseña;
    client.Nombre= request.body.Nombre;
    client.Apellidos= request.body
    client.Correo_Electronico=request.body.Correo_Electronico
    client.Edad=request.body.Edad
    client.Estatura=request.body.Estatura
    client.Peso=request.body.Peso
    client.IMC=request.body.IMC
    client.EGB= request.body.EGB
    client.ETA= request.body.ETA
    client.Fecha_Creacion= request.body.Fecha_Creacion
    client.Fecha_Actualizacion = request.body.Fecha_Actualizacion
    client.save(function(err, savedClient) {
       if (err) {
           response.status(500).send({error:"Could not save product"});
       } else {
           response.send(savedClient);
       }
    });
res.send(client)
});