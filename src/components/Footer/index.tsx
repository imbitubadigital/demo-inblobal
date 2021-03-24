import * as S from './styles'
import Link from 'next/link'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import Image from 'next/image'
import LogoImg from '../../assets/logo.png'
export default function Footer() {
  return (
    <S.Container>
      <Image src={LogoImg} alt="teste" width={300} height={167} />
      <S.Social>
        <S.BtnSocial>
          <FiFacebook color="#fff" size={26} />
        </S.BtnSocial>
        <S.BtnSocial>
          <FiInstagram color="#fff" size={26} />
        </S.BtnSocial>
      </S.Social>
      <S.Actions>
        <li>
          <Link href="/">
            <a>Termos de Uso</a>
          </Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link href="/">
            <a>A Empresa</a>
          </Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </li>
      </S.Actions>
      <S.Cnpj>CNPJ: 34.394.905/0001-29</S.Cnpj>
      <S.Copy>© Todos os direitos reservados</S.Copy>
      <S.Dev>
        Implementado por:{' '}
        <span>
          In<span>Global</span>
        </span>{' '}
        Desenvolvimentos
      </S.Dev>
    </S.Container>
  )
}
