// // Custom function to use with Styled Components' shouldForwardProp API
// // to keep style props from passing into the DOM as attributes
// // https://styled-components.com/docs/api#shouldforwardprop

import { props } from '@styled-system/should-forward-prop'

const propsToFilter = [
  ...props,
  'cursor',
  'custom',
  'animate',
  'hideOutline',
  'icon',
  'initial',
  'layout',
  'matched',
  'measure',
  'small',
  'larger',
  'fontSize',
  'transition',
  'translateBy',
  'trunclipse',
  'variants',
  'weight',
  'when',
  'hideLabel',
  'isDisabled',
  'error',
]

const shouldForwardProp = (prop) => !propsToFilter.includes(prop)

export default shouldForwardProp
