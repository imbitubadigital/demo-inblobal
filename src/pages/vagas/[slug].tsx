import Head from 'next/head'
import { useCallback, useState } from 'react'
import { TemplateSite } from '../../components/_templates/Site'
import * as S from '../../styles/pages/contact'
import Form from '../../components/Forms/FormBase'
import FormJob from '../../components/Forms/FormJob'
import Button from '../../components/Button'
import schemaValidateForm from '../../helpers/validator/contact-validate'
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
        <title>Vagas | Design</title>
      </Head>
      <S.Container>
        <S.Content>
          <header>
            <h2>Faça parte do nosso time</h2>
            <p>Preencha o formulário abaixo, inscreve-se e garanta sua vaga</p>
          </header>
          <S.ContentForm>
            <Form
              onSubmit={handleOnSubmit}
              // defaultValues={{contact: contact}}
              schemaValidation={schemaValidateForm}
              modeValidation="onBlur">
              <FormJob />

              <Button type="submit" title="Inscrever-se" loading={loading} />
            </Form>
          </S.ContentForm>
        </S.Content>
      </S.Container>
    </TemplateSite>
  )
}
