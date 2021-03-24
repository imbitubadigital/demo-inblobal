import Head from 'next/head'
import { TemplateSite } from '../components/_templates/Site'
import InitialSession from '../components/InitialSession'
import GridServices from '../components/GridServices'
import ProcessTimeLine from '../components/ProcessTimeLine'
import BudGet from '../components/BudGet'
export default function Home() {
  return (
    <TemplateSite>
      <Head>
        <title>InGlobal Desenvolvimento</title>
      </Head>
      <InitialSession />
      <GridServices />
      <ProcessTimeLine />
      <BudGet />
    </TemplateSite>
  )
}
