import 'yup'

declare module 'yup' {
  interface StringSchema {
    isCpfValid(): StringSchema
  }
}
