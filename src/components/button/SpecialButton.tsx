import styled from 'styled-components'
import Button from './Button'
import { theme } from '../../theme'

export const SpecialButton = styled(Button)`
  background: ${theme.colors.green500};
  color: ${theme.colors.white};
  &:hover {
    background: ${theme.colors.green600};
  }
`
