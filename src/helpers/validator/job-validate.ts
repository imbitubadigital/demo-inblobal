import validator from '../validator'

const schemaValidateJob = validator.object().shape({
  job: validator.object().shape({
    name: validator.string().required('Digite seu nome completo'),
    email: validator.string().required().email(),
    uf: validator.string().required(),
    city: validator.string().required(),
    // sexo: validator.number().nullable()
    sexo: validator.number().typeError('Informe o sexo'),
    tec: validator.array().min(1, 'Selecione no mínimo 1 tecnologia'),
    birthday: validator.string()
    // cpf: validator.string().optional().isCpfValid(),
  })
})

export default schemaValidateJob
