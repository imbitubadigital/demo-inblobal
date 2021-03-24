import * as S from './styles'
import Button from '../../components/Button'
import Image from 'next/image'
import HomeImg from '../../assets/home2.png'
export default function InitialSession() {
  return (
    <S.Container>
      <S.Content>
        <S.Wellcome>
          <h1>
            in<span>Global</span> Desenvolvimento
          </h1>
          <h2>
            Mais que uma empresa de tecnologia, somos apaixonados pelo que
            fazemos!
          </h2>

          <p>
            Focada em desenvolvimento mobile, a <strong>inGlobal</strong> vem se
            destacando no mercado! Um equipe comprometida com as melhores
            tecnologias e um time focado o tempo todo em inovação!
          </p>

          <Button title="Conheça nossa história!" />
        </S.Wellcome>
        <S.BoxImage>
          <Image
            src={HomeImg}
            alt="Bem vindo a inglobal"
            width="600"
            height="600"
          />
        </S.BoxImage>
      </S.Content>
    </S.Container>
  )
}
