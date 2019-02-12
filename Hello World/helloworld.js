const express = require ('express')
const app = express()

app.get('/', (req, res) => res.send ('Hello World!~'))

const port = 9000
app.listen(port, () => console.log (`Hello World!~ berjalan di port : ${port}`))