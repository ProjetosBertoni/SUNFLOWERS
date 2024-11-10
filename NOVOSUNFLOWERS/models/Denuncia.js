const mongoose = require(`mongoose`)

alert('entrou')

const denunciaSchema = mongoose.Schema({
  content: { type: String, require: true },
  date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('denuncia', denunciaSchema)
