import Head from 'next/head'
import { TemplateSite } from '../../components/_templates/Site'
import ListJobsSection from '../../components/ListJobsSection'
export default function Vagas() {
  return (
    <TemplateSite>
      <Head>
        <title>Vagas | InGlobal Desenvolvimento</title>
      </Head>
      <ListJobsSection />
    </TemplateSite>
  )
}
