const express = require('express');
const  bcrypt = require('bcrypt');
const app = express();

app.get('/', async (req, res) => {
  bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash("password", salt, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash)
    res.send(hash)
  }) 
 })
})
app.get('/compare', async (req, res) => {
  bcrypt.compare("password", "$2b$10$rKmKNq5gBZpmBLyHSTh8Ve8ZAzXzfs7FGj6yJHJjbK.66oA.DYGDW", function(err, result) {
   //result == true
   console.log(result)
   res.send(result)
    })  
})

app.listen(3000)