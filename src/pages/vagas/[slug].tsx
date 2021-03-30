import Head from 'next/head'
import { useCallback, useState } from 'react'
import { TemplateSite } from '../../components/_templates/Site'
import * as S from '../../styles/pages/contact'
import Form from '../../components/Forms/FormBase'
import FormJob from '../../components/Forms/FormJob'
import FormUpload from '../../components/Forms/FormUpload'
import Button from '../../components/Button'
import schemaValidateJob from '../../helpers/validator/job-validate'
const teste = {
  city: 'Imbituba',
  email: 'imbitubadigital@gmail.com',
  name: '',
  state: '',
  sexo: '',
  tec: []
}

export default function Home() {
  const [loading, setLoading] = useState(false)

  const [step, setStep] = useState(1)
  const [slideType, setSlideType] = useState('slide-left')
  const [dataForm, setDataForm] = useState()

  const handleOnSubmit = useCallback((data: any) => {
    setLoading(true)
    setDataForm(data)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    console.log('data do form', data)
  }, [])

  function moveStepNext() {
    setSlideType('slide-left')

    const next = step + 1 > 3 ? 3 : step + 1

    setStep(next)
  }
  function moveStepPrev() {
    setSlideType('slide-right')
    const prev = step - 1 < 1 ? 1 : step - 1

    setStep(prev)
  }

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
          {step === 1 && (
            <S.ContentForm className={slideType}>
              <Form
                onSubmit={handleOnSubmit}
                defaultValues={{ job: teste }}
                schemaValidation={schemaValidateJob}
                modeValidation="onBlur">
                <h1>PARTE 01</h1>
                <FormJob />

                <Button type="submit" title="Inscrever-se" loading={loading} />
              </Form>
            </S.ContentForm>
          )}
          {step === 2 && (
            <S.ContentForm className={slideType}>
              <Form
                onSubmit={handleOnSubmit}
                defaultValues={{ job: teste }}
                schemaValidation={schemaValidateJob}
                modeValidation="onBlur">
                <h1>PARTE 02</h1>
                <FormJob />

                <Button type="submit" title="Inscrever-se" loading={loading} />
              </Form>
            </S.ContentForm>
          )}
          {step === 3 && (
            <S.ContentForm className={slideType}>
              <FormUpload />
            </S.ContentForm>
          )}
          <button onClick={() => moveStepPrev()}>Anterior</button>
          <button onClick={() => moveStepNext()}>Proximo</button>
        </S.Content>
      </S.Container>
    </TemplateSite>
  )
}
