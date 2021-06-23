const express = require('express')
const path = require('path')
const app = express()
PORT = 5000

app.use(express.static(path.join(__dirname, 'frontend/build')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`)
})
