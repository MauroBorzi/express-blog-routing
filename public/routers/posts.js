const express = require(`express`)
const router = express()


// Index
router.get(`/`, (req, res) => {
  res.send(`Elenco dei post`)
})


// Show
router.get(`/:id`, (req, res) => {
  res.send(`Dettaglio del post con id: ${req.params.id}`)
})


// Create
router.post(`/`, (req, res) => {
  res.send(`Inserisci un nuovo post`)
})


// Update
router.put(`/:id`, (req, res) => {
  res.send(`Dettaglio del post con id: ${req.params.id}`)
})