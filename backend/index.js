
const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})


app.get('/api', (req, res) => {
    try{
        res.json({
            message: "Hello from backend server",
        })
    } catch (error) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
console.log(app)