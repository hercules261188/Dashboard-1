const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const app = express()

dotenv.config()

app.use(express.static(path.join(__dirname, 'frontend/build')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`)
})
