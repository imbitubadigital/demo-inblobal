import validator from '../validator'

const schemaValidateForm = validator.object().shape({
  contact: validator.object().shape({
    name: validator.string().required('minha mensagem'),
    email: validator.string().required().email(),
    subject: validator.string().required(),
    message: validator.string().required()
    // cpf: validator.string().optional().isCpfValid(),
  })
})

export default schemaValidateForm
