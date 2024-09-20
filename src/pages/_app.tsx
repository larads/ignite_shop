import { Roboto_Flex as Roboto } from 'next/font/google'
import type { AppProps } from "next/app";
import Image from 'next/image';

import { globalStyles } from '@/styles/globals';
import { Container, Header } from '@/styles/pages/app';

import Logo from '../assets/Logo.svg'
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container className={roboto.className}>
      <Header>
        <Image src={Logo} alt='' />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
