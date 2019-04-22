const express = require('express')
const app = express()
const port = 8888

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || 8888, () => console.log(`Example app listening on port ${port}!`));