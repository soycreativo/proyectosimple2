const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/employees',require('./routes/employee.routes'));

//Starting the server


app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});