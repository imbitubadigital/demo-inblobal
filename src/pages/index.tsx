import Head from 'next/head'
import { TemplateSite } from '../components/_templates/Site'
import InitialSession from '../components/InitialSession'
import GridServices from '../components/GridServices'
import ProcessTimeLine from '../components/ProcessTimeLine'
import * as S from '../styles/pages/home'
export default function Home() {
  return (
    <TemplateSite>
      <Head>
        <title>InGlobal Desenvolvimento</title>
      </Head>
      <InitialSession />
      <GridServices />
      <ProcessTimeLine />
    </TemplateSite>
  )
}
