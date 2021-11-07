import Head from 'next/head'
import { InsertTheCode } from '../components/InsertTheCode'
import { Mentions } from '../components/Mentions'
import { Box } from '../UI'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Wedding Invitation</title>
        <meta name='description' content='Wedding Invitation' />
        <link rel='icon' href='/wedding.png' />
      </Head>
      <InsertTheCode />
      <Mentions />
    </Box>
  )
}
