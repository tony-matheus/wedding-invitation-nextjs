import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  border,
  bottom,
  color,
  compose,
  layout,
  left,
  position,
  right,
  shadow,
  space,
  top,
  typography,
  verticalAlign,
  zIndex,
} from 'styled-system'
import { colors } from '../../utils/colors.module.js'

const buttonTypes = {
  primary: css`
    background: #92787f;
    color: #f0d8d3;
    &:hover,
    &:focus {
      background: #3d1e2b;
      color: #f0d8d3;
    }
  `,
  secondary: css`
    background: white;
    color: ${colors.blue.default};
    &:hover,
    &:focus {
      background: ${colors.blue.default};
      color: white;
    }
  `,
  negative: css`
    background: ${colors.red.default};
    color: white;
    &:hover,
    &:focus {
      background: ${colors.red.dark};
      color: white;
    }
  `,
  transparent: css`
    background: transparent;
  `,
}

export const Button = styled.button`
  appearance: none;
  border: none;
  border-radius: 4px;
  display: inline-block;
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisable }) => (isDisable ? 1 / 2 : 1)};
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  transition: 0.3s ease-out;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &:focus {
    outline: none;
  }
  ${({ primary }) => primary && buttonTypes.primary}
  ${({ secondary }) => secondary && buttonTypes.secondary}
  ${({ negative }) => negative && buttonTypes.negative}
  ${({ transparent }) => transparent && buttonTypes.transparent}
  ${compose(
    border,
    bottom,
    color,
    layout,
    left,
    position,
    right,
    shadow,
    space,
    top,
    typography,
    verticalAlign,
    zIndex
  )}
`

Button.displayName = 'Button'

Button.defaultProps = {
  adaptive: false,
  small: false,
  primary: false,
  secondary: false,
  negative: false,
  transparent: true,
}

Button.propTypes = {
  adaptive: PropTypes.bool,
  small: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  negative: PropTypes.bool,
  transparent: PropTypes.bool,
}

export default Button
