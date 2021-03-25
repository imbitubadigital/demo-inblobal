import * as S from './styles'
import CardGrid from './CardGrid'
import { dataGrid } from './data'
export default function ServicesSection() {
  return (
    <S.Container>
      <S.Content>
        <header>
          <h2>O que fazemos</h2>
          <p>Confira algumas de nossas especialidades e serviços</p>
        </header>
        <S.Grid>
          {dataGrid.map(item => (
            <CardGrid
              key={item.id}
              title={item.title}
              icon={item.icon}
              content={item.content}
            />
          ))}
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}
