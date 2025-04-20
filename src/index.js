import express from 'express'
const app = express()
const port = 3000

function react(req, res){
    console.log("React function hasbeen called")
    res.send('Hello World!');

}

app.get('/', react)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
