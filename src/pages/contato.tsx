import Head from 'next/head'
import {  useCallback, useState } from 'react';
import { TemplateSite } from '../components/_templates/Site'
import * as S from '../styles/pages/home'
import Form from '../components/Forms/FormBase'
import FormContact from '../components/Forms/FormContact'


import schemaValidateForm from '../helpers/validator/contact-validate';
export default function Home() {


  const [loading, setLoading] = useState(false);

  const [dataForm, setDataForm] = useState();

  const handleOnSubmit = useCallback(
    (data: any) => {
      setDataForm(data);
    console.log('data do form', data)
    },
    [],
  );

const contact = {
  name: 'Antonio',
  email: 'email@xxxcv.com',
  subject: 'este é o assunto',
  msg: 'aqui o conteudo'
}


  return (
    <TemplateSite>
      <Head>
        <title>InGlobal Desenvolvimento</title>
      </Head>
      <h1>Página de contato</h1>


      <Form
        onSubmit={handleOnSubmit}
       // defaultValues={{contact: contact}}
        schemaValidation={schemaValidateForm}
        modeValidation="onBlur"
      >

        <div>
          <FormContact />

        </div>
        <button type="submit">VAI CORINTHIANS</button>
      </Form>


    </TemplateSite>
  )
}
