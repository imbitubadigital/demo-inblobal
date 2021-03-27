import Input from '../FormComponents/Input'
import Textarea from '../FormComponents/Textarea'
import Select from '../FormComponents/Select'
import { FaUserCircle, FaInfoCircle } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'

import { FormJobProps } from './interfaces'
import * as S from './styles'
const FormJob: React.FC<FormJobProps> = ({ disabled }) => {
  return (
    <S.FormContainer>
      <Input
        name="contact.name"
        title="Nome"
        placeholderText="Informe seu nome"
        disabled={disabled}
        icon={FaUserCircle}
        type="text"
      />
      <S.ContentRow>
        <Select
          name="contact.email"
          title="Email"
          placeholderText="Informe seu e-mail"
          disabled={disabled}
          icon={ImMail4}
        />
        <Select
          name="contact.email"
          title="Email"
          placeholderText="Informe seu e-mail"
          disabled={disabled}
          icon={ImMail4}
        />
      </S.ContentRow>
      <S.ContentRow>
        <Input
          name="contact.email"
          title="Email"
          placeholderText="Informe seu e-mail"
          disabled={disabled}
          type="email"
          icon={ImMail4}
        />
        <Input
          name="contact.subject"
          title="Assunto"
          placeholderText="Informe o assunto"
          disabled={disabled}
          type="text"
          icon={FaInfoCircle}
        />
      </S.ContentRow>
      <Textarea
        name="contact.message"
        title="Mensagem"
        placeholderText="Digite sua mensagem"
        rows={5}
        disabled={disabled}
      />
    </S.FormContainer>
  )
}

export default FormJob
