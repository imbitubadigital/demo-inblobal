import Head from 'next/head'
import { TemplateSite } from '../components/_templates/Site'
import InitialSection from '../components/InitialSection'
import ServicesSection from '../components/ServicesSection'
import TimeLineSection from '../components/TimeLineSection'
import JobsSection from '../components/JobsSection'
import BudGet from '../components/BudGet'
export default function Home() {
  return (
    <TemplateSite>
      <Head>
        <title>InGlobal Desenvolvimento</title>
      </Head>
      <InitialSection />
      <ServicesSection />
      <TimeLineSection />
      <BudGet />
      <JobsSection />
    </TemplateSite>
  )
}
