import * as S from './styles'
import Button from '../../components/Button'
import MiniJob from './MiniJob'
import { dataJobs } from './data'
export default function JobsSection() {
  return (
    <S.Container>
      <S.Content>
        <S.Wellcome>
          <h1>Faça parte do time</h1>
          <h2>
            A <strong>inGlobal</strong> Desenvolvimento é também uma fomentadora
            de oportunidades
          </h2>

          <p>
            Se você é desenvolvedor e está em busca de novas oportunidades e
            crescimento profissional venha trabalhar com a gente!
          </p>

          <Button title="Confira nossas vagas!" />
        </S.Wellcome>
        <S.BoxGrid>
          {dataJobs.map((item, index) => (
            <MiniJob
              key={item.id}
              title={item.title}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </S.BoxGrid>
      </S.Content>
    </S.Container>
  )
}
