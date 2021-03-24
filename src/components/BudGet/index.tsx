import * as S from './styles'
import Button from '../../components/Button'
import Image from 'next/image'
import PhoneImg from '../../assets/cellPhone.png'
export default function BudGet() {
  return (
    <S.Container>
      <S.Content>
        <S.BoxImage>
          <Image
            src={PhoneImg}
            alt="Bem vindo a inglobal"
            width="400"
            height="400"
          />
        </S.BoxImage>
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
      </S.Content>
    </S.Container>
  )
}
