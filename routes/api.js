const { Router } = require('express');

const router = new Router();

router.get('/clients', (req, res) => {
  res.send({type: 'GET'})
});  

router.post('/clients', (req, res) => {
    res.send({type: 'POST'})
  }); 

  router.put('/clients/:id', (req, res) => {
    res.send({type: 'PUT'})
  });

  router.delete('/clients/:id', (req, res) => {
    res.send({type: 'DELETE'})
  });



module.exports = router;










// app.post('client', function(request, response) {
//     var client = new Client();
//     client.Client_ID = request.body.Client_ID;
//     client.Nombre_usuario = request.body.Nombre_usuario ;
//     client.Contraseña= request.body.Contraseña;
//     client.Nombre= request.body.Nombre;
//     client.Apellidos= request.body
//     client.Correo_Electronico=request.body.Correo_Electronico
//     client.Edad=request.body.Edad
//     client.Estatura=request.body.Estatura
//     client.Peso=request.body.Peso
//     client.IMC=request.body.IMC
//     client.EGB= request.body.EGB
//     client.ETA= request.body.ETA
//     client.Fecha_Creacion= request.body.Fecha_Creacion
//     client.Fecha_Actualizacion = request.body.Fecha_Actualizacion
//     client.save(function(err, savedClient) {
//        if (err) {
//            response.status(500).send({error:"Could not save product"});
//        } else {
//            response.send(savedClient);
//        }
//     });
// });
