const mongoose = require('mongoose')

const db = process.env.dataPORT

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})