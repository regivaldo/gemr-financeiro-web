import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import background from '../assets/background.jpg'

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`

export default function PublicTemplate() {
  return (
    <Main>
      <Outlet />
      <Image src={background} />
    </Main>
  )
}
