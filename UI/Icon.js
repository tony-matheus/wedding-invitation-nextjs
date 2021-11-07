import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {
  border,
  compose,
  flexbox,
  layout,
  opacity,
  overflow,
  position,
  space,
} from 'styled-system'

const Icon = styled(FontAwesomeIcon)(
  compose(border, flexbox, layout, opacity, overflow, position, space)
)

Icon.displayName = 'Icon'

Icon.propTypes = {
  alt: PropTypes.string.isRequired,
}

export default Icon
