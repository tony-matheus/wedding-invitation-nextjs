import PropTypes from 'prop-types'
import { useState } from 'react'
import { Box, Button, Input, Image, Text } from '../UI'
import { Mountain } from '../utils/images'
import { I18n } from '../utils/translation'
import { FallingLeaves } from './FallingLeaves'
import { useRouter } from 'next/router'

export const InsertTheCode = ({ language, codeNotFound }) => {
  const [code, setCode] = useState('wedding')
  const router = useRouter()

  const onClick = () => {
    router.push(`/invitation/?code=${code.toLowerCase()}`)
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClick()
    }
  }
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      position='relative'
    >
      <FallingLeaves />
      <Box
        position='fixed'
        top='0'
        left='0'
        right='0'
        bottom={['-50%', null, '0']}
        zIndex={-1}
      >
        <Box width='100%' height='100%'>
          <Image src={Mountain} alt='flower' layout='fill' />
        </Box>
      </Box>
      <Box
        width={['100vw', null, 'auto']}
        height={['auto', null, '80vh']}
        position='relative'
        textAlign='center'
        opacity={0.99}
        mx={30}
        zIndex={9999}
        mb={[100, null, 0]}
      >
        <Text
          fontSize={[120, null, 220]}
          mt={[1, null, 0]}
          mb={1}
          font='Fleur De Leah'
          fontWeight='bold'
        >
          {codeNotFound ? 404 : 'Hello!'}
        </Text>
        <Box
          px={[10, null, 20]}
          py={20}
          borderRadius={['30px', null, '50px']}
          boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
          color='#3d1e2b'
          bg='#f0d8d2'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontSize={[30, null, 50]} font='Fleur De Leah'>
            {codeNotFound
              ? I18n[language].codeNotFound
              : I18n[language].insertTheCode}
          </Text>
          <Box px={10} width='100%'>
            <Input
              value={code}
              placeholder={I18n[language].typeTheCodeHere}
              minWidth='70vw'
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              onKeyPress={handleKeyPress}
            />
            <Button
              primary
              transparent={false}
              p={20}
              mt={20}
              width='90%'
              onClick={onClick}
            >
              {I18n[language].validateCode}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

InsertTheCode.defaultProps = {
  language: 'br',
  codeNotFound: false,
}

InsertTheCode.propTypes = {
  language: PropTypes.string,
  codeNotFound: PropTypes.bool,
}
