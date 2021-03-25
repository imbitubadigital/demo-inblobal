import * as S from './styles'
import ItemTimeLine from './ItemTimeLine'
import { dataTimeline } from './data'
export default function TimeLineSection() {
  return (
    <S.Container>
      <S.Content>
        <header>
          <h2>Desenvolvimento e Processos</h2>
          <p>Foco e comprometimento do início ao fim do projeto</p>
        </header>
        <S.BoxTimeLine>
          {dataTimeline.map((item, index) => (
            <ItemTimeLine
              key={item.id}
              title={item.title}
              icon={item.icon}
              content={item.content}
              type={index}
              color={item.color}
              max={dataTimeline.length}
            />
          ))}
        </S.BoxTimeLine>
      </S.Content>
    </S.Container>
  )
}
