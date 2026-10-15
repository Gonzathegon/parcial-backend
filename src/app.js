const express = require('express')
const cors = require('cors')
require('dotenv').config()

const clientesRoutes = require('./routes/clientesRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', clientesRoutes)

app.get('/', (req, res) => {
  try{
   res.json({ mensaje: 'Backend del parcial funcionando' })}

  catch(error){"no esta entrando en la api"}
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})

module.exports = app
