const express = require('express'); 
const app = express(); 
const path = require('path'); 

const PORT = process.env.PORT || 3000; 

// send static content 
app.use(express.static(path.join(__dirname + '/views/'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/landing.html'))
})

app.listen(PORT, (err) => {
    if (err) throw err; 
    console.log(`app listening on port: ${PORT}`); 
}); 