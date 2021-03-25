import * as S from './styles'
import CardJob from './CardJob'
import { dataJobs } from '../JobsSection/data'
export default function ListJobsSection() {
  return (
    <S.Container>
      <S.Content>
        <header>
          <h2>Faça parte do time</h2>
          <p>
            A inGlobal Desenvolvimento é também uma fomentadora de oportunidades
          </p>
        </header>
        <S.Grid>
          {dataJobs.map(item => (
            <CardJob
              key={item.id}
              title={item.title}
              icon={item.icon}
              content={item.content}
              color={item.color}
            />
          ))}
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}
