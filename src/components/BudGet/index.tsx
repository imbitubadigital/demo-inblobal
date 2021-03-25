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
          <h1>Tire sua idea do papel</h1>
          <h2>
            Conte com a <strong>inGlobal</strong> para conquistar cada um dos
            degraus dos seus objetivos!
          </h2>

          <p>
            Começe agora! Faça seu orçamento e tenha acesso a um dos nossos
            especialistas.
          </p>

          <Button title="Clique e faça seu orçamento!" />
        </S.Wellcome>
      </S.Content>
    </S.Container>
  )
}
