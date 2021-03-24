import Head from 'next/head'
import { TemplateSite } from '../components/_templates/Site'
import InitialSession from '../components/InitialSession'
import * as S from '../styles/pages/home'
export default function Home() {
  return (
    <TemplateSite>
      <Head>
        <title>InGlobal Desenvolvimento</title>
      </Head>
      <InitialSession />
    </TemplateSite>
  )
}
