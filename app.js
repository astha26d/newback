const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! Node Server running on EC2 Backend')
})

app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})