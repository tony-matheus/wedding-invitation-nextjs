import Head from 'next/head'
import { Box } from '../UI'
import { useRouter } from 'next/router'
import { invitations } from '../utils/invitations.module'
import { Invite } from '../components/Invite'
import { Mentions } from '../components/Mentions'

export default function Invitation() {
  const router = useRouter()
  const { code } = router.query

  const invite = invitations[code?.toLowerCase()]

  const language = invite?.english ? 'en' : 'br'

  return (
    <Box>
      <Head>
        <title>Wedding Invitation</title>
        <meta name='description' content='Wedding Invitation' />
        <link rel='icon' href='/wedding.png' />
      </Head>
      <Invite data={invite} language={language} />
      <Mentions />
    </Box>
  )
}
