const express = require('express')
const app = express()


const port = process.env.PORT || 3000
const service = process.env.SERVICE || "SECTION"

app.get('/', function(req, res) {
    res.status(200).send(`${service} on port ${port}`)
});

app.listen(port, () => console.log(`${service} on port ${port}`))
