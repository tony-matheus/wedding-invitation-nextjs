import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system'

const Text = styled.p`
  ${compose(color, flexbox, layout, position, space, typography)}
  font-family: ${({ font }) => font};
`

Text.displayName = 'Text'

Text.defaultProps = {
  as: 'p',
  font: 'Inter',
}

Text.propTypes = {
  as: PropTypes.string,
  font: PropTypes.string,
}

export default Text
