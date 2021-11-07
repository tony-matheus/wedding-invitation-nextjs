import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  background,
  border,
  boxShadow,
  color,
  compose,
  display,
  flexbox,
  grid,
  layout,
  opacity,
  overflow,
  position,
  space,
  typography,
  system,
} from 'styled-system'
import shouldForwardProp from './shouldForwardProp'

const cursor = system({
  cursor: true,
})

const Box = styled('div').withConfig({
  shouldForwardProp,
})`
  ${compose(
    background,
    border,
    boxShadow,
    color,
    cursor,
    display,
    flexbox,
    grid,
    layout,
    opacity,
    overflow,
    position,
    space,
    typography
  )}
`

Box.defaultProps = {
  as: 'div',
}

Box.displayName = 'Box'

Box.propTypes = {
  as: PropTypes.string,
}

export default Box
