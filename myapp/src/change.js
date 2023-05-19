const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.write('<h1>Welcome to my home page</h1>')
  res.write('<h1>Hello World !!</h1>')
  res.send()
})

app.get('/about', (req, res) => {
    res.send('Welcome to about page')
  })

  app.get('/contact', (req, res) => {
    res.send('Welcome to my contact page')
  })
  
  app.get('/temp', (req, res) => {
    res.json([
    {
       id:1,
       name: "kruti",
    },
    {
        id:1,
        name: "kruti",
    },
    {
        id:1,
        name: "kruti",
    },
    ])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})