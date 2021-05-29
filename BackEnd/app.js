const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const rout = require('./rout/rout')
const {errHandler, preErrHandler} = require('./errHandler/errHandler')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(rout)
app.use(preErrHandler);
app.use(errHandler);

app.listen(port,()=>{
    console.log("Listen to the port: ",port);
})