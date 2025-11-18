const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    'Name': 'John Doe',
    'Age': 30,
    'City': 'New York'
  }])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
