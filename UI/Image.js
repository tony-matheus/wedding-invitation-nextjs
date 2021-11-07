import PropTypes from 'prop-types'
import styled from 'styled-components'
import NextImage from 'next/image'
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

const Image = styled(NextImage)`
  ${compose(border, flexbox, layout, opacity, overflow, position, space)}
  ${({ transform }) => transform && `transform: ${transform};`}
`

Image.displayName = 'Image'

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  transform: PropTypes.string,
}

export default Image
