import Head from 'next/head'
import { TemplateSite } from '../components/_templates/Site'
export default function Home() {
  return (
    <TemplateSite>
      <Head>
        <title>InGlobal Desenvolvimento</title>
      </Head>
      <h1>Nossa Equipe</h1>
    </TemplateSite>
  )
}
