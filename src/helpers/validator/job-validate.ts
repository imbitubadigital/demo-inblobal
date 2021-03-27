import validator from '../validator'

const schemaValidateJob = validator.object().shape({
  job: validator.object().shape({
    name: validator.string().required('Digite seu nome completo'),
    email: validator.string().required().email(),
    uf: validator.string().required(),
    city: validator.string().required()
    // cpf: validator.string().optional().isCpfValid(),
  })
})

export default schemaValidateJob
