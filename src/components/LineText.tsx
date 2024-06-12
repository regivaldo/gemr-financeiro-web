import styled from 'styled-components'
import { color } from './UI/_variables'

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${color.primaryDark};
`

export default function LineText() {
  return <Line />
}
