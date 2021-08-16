require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? 'env.test' : '.env'
})

const app = require('./app');


app.listen(process.env.PORT || 3000);