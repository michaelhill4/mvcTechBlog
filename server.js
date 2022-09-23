const express = require('express')
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Huncho',
        database: 'employeedb'
    },
    console.log('Connected to employeedb')
)

db.query('SELECT * FROM department', function (err, results) {
    console.log(results)
})

app.use((req, res) => {
    res.status(404).end()
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})