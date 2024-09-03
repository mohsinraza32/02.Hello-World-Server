import express from 'express'
import cors from 'cors';     // for cors issue

const app = express()
app.use(cors())
// const port = 3000 

app.get('/home', (req, res) => {
  res.send('I am home page!')
})
app.get('/profile', (req, res) => {
  res.send('I am profile page!')
})
app.get('/weather', (req, res) => {
  res.send({
   weather:"30",
   Temperature:"sunny",
   city:"London"
  })
})
 
const port = process.env.port || 3000;    // Heroku requirement

app.listen(3000,() => {
    console.log(`Hello world server listening on port ${3000}`);
})
