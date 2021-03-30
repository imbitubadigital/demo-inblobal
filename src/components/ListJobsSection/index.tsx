import { useRouter } from 'next/router'
import * as S from './styles'
import CardJob from './CardJob'
import { dataJobs } from '../JobsSection/data'
import { useCallback } from 'react'
export default function ListJobsSection() {
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
              slug={item.slug}
              onAction={handleRedirect}
            />
          ))}
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}
