import * as yup from 'yup';
import validCpf from './validCpf';

yup.setLocale({
  array: {
    max: ({max}) => `o campo deve ter itens iguais ou inferiores a ${max}`,
    min: ({min}) => `campo deve ter pelo menos ${min} itens`,
  },
  date: {
    max: ({max}) => `a data deve ser anterior a ${max}`,
    min: ({min}) => `a data deve ser posterior a ${min}`,
  },
  mixed: {
    default: () => `não é válido`,
    notOneOf: ({values}) => `não deve ser um dos seguintes valores: ${values}`,
    oneOf: ({values}) => `deve ser um dos seguintes valores: ${values}`,
    required: () => `campo obrigatório`,
  },
  number: {
    integer: () => `deve ser um número inteiro`,
    lessThan: ({less}) => `deve ser menor que ${less}`,
    max: ({max}) => `deve ser menor ou igual a ${max}`,
    min: ({min}) => `deve ser maior ou igual a ${min}`,
    moreThan: ({more}) => `deve ser maior que ${more}`,
    negative: () => `deve ser um número negativo`,
    positive: () => 'deve ser um número positivo',
  },
  object: {
    noUnknown: () =>
      `campo não pode ter chaves não especificadas na forma do objeto`,
  },
  string: {
    email: () => `deve ser um email válido`,
    length: ({length}) => `deve ter exatamente ${length} caracteres`,
    lowercase: () => `deve ser uma sequência minúscula`,
    matches: ({regex}) => `deve corresponder ao seguinte: \`${regex}\``,
    max: ({max}) => `deve ter no máximo ${max} caracteres`,
    min: ({min}) => `deve ter pelo menos ${min} caracteres`,
    trim: () => `não pode ter espaço antes ou depois do texto`,
    uppercase: () => `deve ser uma sequência maiúscula`,
    url: () => `deve ser um URL válido`,
  },
});

yup.addMethod<any>(yup.mixed, 'isCpfValid', function a() {
  return this.test('test-name', 'cpf inválido', validCpf);
});

const validator = yup;

export default validator;
