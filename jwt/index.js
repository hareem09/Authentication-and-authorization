const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser()); // Apply the middleware

app.get('/', (req, res) => {
    // Generate a JWT token
    const token= jwt.sign({email: 'hareemexample@gamil.com'},"secretkey",)
    console.log(token)
    // Set the token in a cookie
    res.cookie("token",token)
})
app.get('/read', (req, res) => {

    // Verify the token
    let data= jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmVlbWV4YW1wbGVAZ2FtaWwuY29tIiwiaWF0IjoxNzQ3MzM2MzY0fQ.71lTRv8m9-E9AgsbcPGzTJw2XWpQVNCsJ45W48vlTxA", "secretkey")
    console.log(data)
})
app.listen(3000 , () => {
    console.log("Server running on http://localhost:3000")
})