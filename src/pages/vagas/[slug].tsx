import Head from 'next/head'
import { useCallback, useState } from 'react'
import { TemplateSite } from '../../components/_templates/Site'
import * as S from '../../styles/pages/contact'
import Form from '../../components/Forms/FormBase'
import FormJob from '../../components/Forms/FormJob'

import FormContact from '../../components/Forms/FormContact'
import Button from '../../components/Button'
import schemaValidateJob from '../../helpers/validator/job-validate'
import schemaValidateForm from '../../helpers/validator/contact-validate'
const teste = {
  city: 'Imtibuba',
  email: 'imbitubadigital@gmail.com',
  name: 'aaa',
  state: 'SP'
}

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
            <p>Preencha o formulário abaixo, inscreva-se e garanta sua vaga</p>
          </header>
          <S.ContentForm>
            <Form
              onSubmit={handleOnSubmit}
              //  defaultValues={{ job: teste }}
              schemaValidation={schemaValidateJob}
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
