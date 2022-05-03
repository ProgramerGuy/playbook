const express = require('express')
const app = express()
app.use(express.json())

const port = 3000

app.listen(port, () => {
    console.log(`Example app on port ${port}`)
})

//HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id:1, name: "Raul"}
    const explorer2 = {id:2, name: "RaulGomex"}
    const explorer3 = {id:3, name: "RaulGustavo"}
    const explorer4 = {id:4, name: "RaulMartinez"}
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET requests ${new Date()}`)
    console.log(`Get explorer with id ${req.params.id}`)
    const explorer = {id:1, name: "Raul"}
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST requests ${new Date()}`)
    const requestBody = req.body
    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT requests ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(201).json({message: "Updated!"})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE requests ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(201).json({message: "Deleted"})
})