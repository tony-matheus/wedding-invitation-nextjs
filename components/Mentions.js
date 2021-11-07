import { motion } from 'framer-motion'
import { Box, Text } from '../UI'

const AnimatedBox = motion(Box)

export const Mentions = () => {
  return (
    <Box
      as='footer'
      width={['300%', null, '200%']}
      height='20px'
      p={1}
      position='fixed'
      bottom='0'
      bg='#ce9182'
      color='white'
      fontWeight='bold'
    >
      <AnimatedBox
        initial={{ x: 400 }}
        animate={{ x: -1500 }}
        transition={{ duration: 30, repeat: Infinity }}
        display='flex'
      >
        <Text as='span' fontSize={[12, null, 14]} mr={[100, null, 500]}>
          Developed by <Text as='span'>Tony Lima</Text> and Design with{' '}
          <Text as='span' color='red'>
            ❤
          </Text>{' '}
          by <Text as='span'>Luise Lorenzoni Prauze</Text>
        </Text>
        <Text as='span' fontSize={[12, null, 14]}>
          Developed by <Text as='span'>Tony Lima</Text> and Design with{' '}
          <Text as='span' color='red'>
            ❤
          </Text>{' '}
          by <Text as='span'>Luise Lorenzoni Prauze</Text>
        </Text>
      </AnimatedBox>
    </Box>
  )
}
