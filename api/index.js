const app = require('./app.js');
const mongoose = require('mongoose');
require('dotenv').config()

const uri = ""
mongoose.connect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@cluster0.2bjwi.mongodb.net/test`);

mongoose.connection.once('open', _ => {
    
    console.log('Database is connected');

    app.listen(`${process.env.PORT}`, () => {
        console.log(`Server corriendo en el puerto ${process.env.PORT}`)
    })
})

mongoose.connection.on('error', err => {
    console.log(err)
})
