import PropTypes from 'prop-types'
import { Box, Image } from '../UI'
import {
  BigSplash,
  BigSplashOutline,
  SmallSplash,
  SmallSplashOutline,
} from '../utils/images'

export const Splash = ({ small }) => {
  return (
    <Box position='relative' opacity={['0.3', null, '1']}>
      <Box position='absolute' right={50}>
        <Image
          src={small ? SmallSplash : BigSplash}
          alt='flower'
          layout='fixed'
        />
      </Box>
      <Box position='absolute' right={40}>
        <Image
          src={small ? SmallSplashOutline : BigSplashOutline}
          alt='flower'
          layout='fixed'
        />
      </Box>
    </Box>
  )
}

Splash.defaultProps = {
  small: false,
}

Splash.propTypes = {
  small: PropTypes.bool,
}
