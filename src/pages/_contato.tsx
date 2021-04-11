import Head from 'next/head'
import { useCallback, useState } from 'react'
import { TemplateSite } from '../components/_templates/Site'
import * as S from '../styles/pages/contact'
import Form from '../components/Forms/FormBase'
import FormContact from '../components/Forms/FormContact'
import Button from '../components/Button'
import schemaValidateForm from '../helpers/validator/contact-validate'
export default function Home() {
  const [loading, setLoading] = useState(false)

  const [dataForm, setDataForm] = useState()

  const handleOnSubmit = useCallback((data: any) => {
    setLoading(true)
    setDataForm(data)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    console.log('data do form', data)
  }, [])

  return (
    <TemplateSite>
      <Head>
        <title>Contato | InGlobal Desenvolvimento</title>
      </Head>
      <S.Container>
        <S.Content>
          <header>
            <h2>Fale conosco</h2>
            <p>Preencha o formulário abaixo e fale conosco</p>
          </header>
          <S.ContentForm>
            <Form
              onSubmit={handleOnSubmit}
              // defaultValues={{contact: contact}}
              schemaValidation={schemaValidateForm}
              modeValidation="onBlur">
              <FormContact />

              <Button type="submit" title="Enviar" loading={loading} />
            </Form>
          </S.ContentForm>
        </S.Content>
      </S.Container>
    </TemplateSite>
  )
}
