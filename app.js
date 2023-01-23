const express = require("express")
const app = express()
const PORT = process.env.Port || 3000
const https = require("https")


const instrument = {instruments: [{"name ": " Guitarr", " kind": "gasdasda"},
{"Name":"Piano","Kind":"Plingplong Instrument"}, {"Name": "skitsamma","Kind":"skitsamma2"}]}


app.get ("/joke", (req,res)=>{
    https.get("https://api.chucknorris.io/jokes/random", (response)=>{
        response.on("data",(data)=> {
            console.log(data)
            res.send(JSON.parse(data))
        })
    }).on("error", (err)=>{
        console.log("There was an error"+ err.massage)
    
})
})

app.get("/instruments",(req,res)=>{
    res.send(instrument)
})

app.get ( "/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})



app.listen (PORT, ()=>{
    console.log("Litsen to port"+ PORT)
})