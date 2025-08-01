// Importo express
const express = require(`express`)
const router = express()




// Index
router.get(`/`, (req, res) => {
  res.send(`Elenco dei post`)
})


// Show
router.get(`/:id`, (req, res) => {
  res.send(`Dettagli del post con id: ${req.params.id}`)
})


// Create
router.post(`/`, (req, res) => {
  res.send(`Inserisci un nuovo post`)
})


// Update
router.put(`/:id`, (req, res) => {
  res.send(`Modifica totale del post con id: ${req.params.id}`)
})


// Modify
router.patch(`/:id`, (req, res) => {
  res.send(`Modifica parziale del post con id: ${req.params.id}`)
})


// Delete
router.delete(`/:id`, (req, res) => {
  res.send(`Cancellazione del post con id: ${req.params.id}`)
})

module.exports = router