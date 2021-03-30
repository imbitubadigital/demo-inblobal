import { useRouter } from 'next/router'
import * as S from './styles'
import Button from '../../components/Button'
import MiniJob from './MiniJob'
import { dataJobs } from './data'
import { useCallback } from 'react'
export default function JobsSection() {
  const router = useRouter()

  const handleRedirect = useCallback(
    (url: string) => {
      router.push(url)
    },
    [router]
  )
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

          <Button
            onAction={() => handleRedirect('vagas')}
            type={'button'}
            title="Confira nossas vagas!"
          />
        </S.Wellcome>
        <S.BoxGrid>
          {dataJobs.map(item => (
            <MiniJob
              key={item.id}
              title={item.title}
              icon={item.icon}
              color={item.color}
              onAction={handleRedirect}
            />
          ))}
        </S.BoxGrid>
      </S.Content>
    </S.Container>
  )
}
