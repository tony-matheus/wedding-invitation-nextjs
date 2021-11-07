/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import { border, boxShadow, compose, space } from 'styled-system'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import Box from './Box'
import Text from './Text'
import shouldForwardProp from './shouldForwardProp'

export const StyledInput = styled('input').withConfig({
  shouldForwardProp,
})`
  width: 84%;
  z-index: 1;
  padding: 0.8rem 1rem;
  font-size: 18px;
  font-weight: 80;
  color: #333;
  border: none;
  outline: none;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
  -webkit-transition: color 0.3s, background 0.3s;
  transition: color .5s, background 0.3s;
  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.15)), to(rgba(255, 255, 255, 0.1)));
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
} input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
} input:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
} input::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
} input::placeholder {
  color: rgba(255, 255, 255, 0.6);
} input:focus {
  color: white;
  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.25)), to(rgba(0, 0, 0, 0.2)));
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.2));
} input:focus::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
} input:focus:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
} input:focus::-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.6);
} input:focus::placeholder {
  color: rgba(255, 255, 255, 0.3);
  ${compose(border, boxShadow, space)}
`

export const Input = forwardRef(
  ({ isDisabled, type, label, ...props }, ref) => (
    <Box as='label' display='block' position='relative'>
      {label && (
        <Text
          as='span'
          fontWeight='600'
          fontSize='12px'
          position='absolute'
          top='4px'
          zIndex={1}
          left={2}
        >
          {label}
        </Text>
      )}
      <StyledInput
        isDisabled={isDisabled}
        type={type || 'text'}
        pt={label ? '24px' : 2}
        pb={2}
        px={2}
        ref={ref}
        {...props}
      />
    </Box>
  )
)

Input.displayName = 'Input'

Input.defaultProps = {
  isDisabled: false,
  error: false,
  type: 'text',
  label: '',
}

Input.propTypes = {
  isDisabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
  type: PropTypes.oneOf(['date', 'email', 'text', 'password']),
  label: PropTypes.string,
}
