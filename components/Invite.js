import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Box, Image, Text } from '../UI'
import { colors } from '../utils/colors.module'
import { I18n } from '../utils/translation'
import flower from '../utils/images/flower.png'
import { Splash } from './Splash'
import { Gift } from './Gift'
import { SPECIAL_TYPES_TEXT, SPECIAL_TYPES } from '../utils/constants.module'

const Container = styled(Box)`
  animation: fadein 3s;
  height: 100vh;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const AnimatedBox = motion(Box)

export const Invite = ({ data, language }) => {
  console.log(data)
  return (
    <Container>
      <Gift language={language} wontParticipate={data?.wontParticipate} />
      <Box position='fixed' top={0} right={[-250, null, -100]}>
        <Splash />
      </Box>
      <Box position='fixed' top='40%' left={130}>
        <Splash small />
      </Box>
      <AnimatedBox position='fixed' top={180} right={30}>
        <Box width='88px' height='250px' display={['none', null, 'flex']}>
          <Image src={flower} alt='flower' layout='fill' />
        </Box>
      </AnimatedBox>
      <Box
        position='relative'
        display='flex'
        flexDirection='column'
        justifyContent={data?.wontParticipate ? '' : 'space-between'}
        height='100%'
      >
        <Box style={{ textTransform: 'uppercase' }} py={20} px={[20, null, 60]}>
          <Text fontSize={[12, null, 16]} letterSpacing='0.32em'>
            {I18n[language].saveDate}{' '}
            <Text as='span' color={colors.hightlight}>
              {I18n[language].date}
            </Text>
          </Text>
          {data?.name && (
            <Text fontSize={[12, null, 16]} letterSpacing='0.32em'>
              {I18n[language].to}{' '}
              <Text as='span' color={colors.hightlight}>
                {data?.name}
              </Text>
            </Text>
          )}
          {language === 'br' && (
            <Text fontSize={[12, null, 16]} letterSpacing='0.32em'>
              {I18n[language].clothes}{' '}
              <Text as='span' color={colors.hightlight}>
                {I18n[language].whichClothes}
              </Text>
            </Text>
          )}
          <Text fontSize={[12, null, 16]} letterSpacing='0.32em'>
            {I18n[language].eventLocation}{' '}
            <Text
              as='a'
              href='https://www.google.com/maps/place/Caba%C3%B1a+Del+Primo/@-3.7418599,-38.4701692,15z/data=!4m5!3m4!1s0x0:0x72cb25cc7b079694!8m2!3d-3.7418599!4d-38.4701692'
              target='_blank'
              color={colors.hightlight}
            >
              Cabana Del Primo, Shooping Rio Mar
            </Text>{' '}
            {language === 'br' && (
              <Text as='span'>
                AS{' '}
                <Text as='span' color={colors.hightlight}>
                  18:00
                </Text>
              </Text>
            )}
          </Text>
        </Box>
        <Box
          pb={30}
          px={[20, null, 60]}
          pt={20}
          mt={data?.wontParticipate ? 150 : 0}
        >
          <Text
            fontSize={[70, null, 130]}
            textAlign='left'
            my={[20, null, 10]}
            font='Fleur De Leah'
          >
            {I18n[language].coupleName}
          </Text>
          <Box style={{ textTransform: 'uppercase' }}>
            <Text
              fontSize={[14, null, 16]}
              letterSpacing='0.32em'
              lineHeight='35px'
              textAlign='left'
            >
              {data?.description}
            </Text>
          </Box>
          {data?.extra && (
            <Text
              fontSize={14}
              textAlign='left'
              mt={[50, null, 30]}
              mb={[50, null, 0]}
              style={{ textTransform: 'uppercase' }}
            >
              Extra text for you: {data?.extra}
            </Text>
          )}
          {data?.specialType && (
            <Text
              fontSize={[40, null, 80]}
              textAlign='left'
              mt={20}
              mb={0}
              font='Fleur De Leah'
            >
              {SPECIAL_TYPES_TEXT[data?.specialType]}
            </Text>
          )}
        </Box>
      </Box>
    </Container>
  )
}

Invite.defaultProps = {
  language: 'br',
}

Invite.propTypes = {
  data: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    gift: PropTypes.bool,
    wontParticipate: PropTypes.bool,
    specialType: PropTypes.oneOf(SPECIAL_TYPES),
    extra: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  language: PropTypes.string,
}
