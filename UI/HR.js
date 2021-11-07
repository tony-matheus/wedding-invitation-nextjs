import styled from 'styled-components'
import { background, border, space, layout, compose } from 'styled-system'

const HR = styled.hr`
  border: none;
  border-top: 2px solid;
  ${compose(background, border, space, layout)}
`

HR.defaultProps = {
  borderColor: '#333',
}

export default HR
