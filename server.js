const express= require('express')
const app= express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// EJEMPLO DE COMO OBTENER O POSTEAR JSON 
var ingredients = [
    {
        
    "id":"1",
    "text":"Milk"
},
{
    "id":"2",
    "text":"Bacon"
},
{
    "id":"3",
    "text": "Eggs"
},{
    "id":"4",
    "text": "Raw cheese"
}
]
// app.get('/',(req,res) => {
//     res.send(ingredients)
// })





app.get('/',(req,res) => {
    res.send(ingredients)
})

app.post('/', function(request, response) {
   var ingredient = request.body;
   if (!ingredient || ingredient.text== ""){
       response.status(500).send({error: "Could not create wishlist"});
    } else {
        ingredients.push(ingredient)
        response.status(200).send(ingredients);
    }
   });

app.listen(3000, ()=>{
    console.log('ready to launch ')
})
app.use(express.static('public'))
// render son dinamicos 
// res.json



