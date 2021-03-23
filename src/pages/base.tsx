import { useState, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/avatar.png'
import * as S from '../styles/pages/home'

import { useSelector, useDispatch } from 'react-redux'
import { loadRequest } from '../store/ducks/repositories/actions'
import { ApplicationState } from '../store/'

import Footer from '../components/Footer'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: ApplicationState) => state.repositories.data)

  const loadRepo = useCallback(() => {
    dispatch(loadRequest())
  }, [])
  console.log('aqui', data)
  console.log('passou no index')
  return (
    <S.Container>
      <Head>
        <title>Página Home</title>
      </Head>
      <S.Content>
        <Image src={Logo} alt="teste" width={200} height={200} />
        <h1>Setup do Projeto</h1>
        <S.Btn onClick={loadRepo}>Ler api</S.Btn>
        <Footer />
      </S.Content>
    </S.Container>
  )
}

export default Home
