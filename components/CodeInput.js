/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import {
  border,
  boxShadow,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system'
import shouldForwardProp from '../UI/shouldForwardProp'

const StyledInput = styled('input').withConfig({
  shouldForwardProp,
})`
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

  ${compose(
    border,
    boxShadow,
    space,
    typography,
    color,
    flexbox,
    layout,
    position
  )}
`

export const CodeInput = ({ onChange, ...props }) => {
  return (
    <StyledInput
      onChange={onChange}
      width={['90%', null, '400px']}
      {...props}
    />
  )
}
