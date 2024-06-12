import styled from 'styled-components'
import logo from '../assets/logo.png'
import { background, color, shadow, text } from '../components/UI/_variables'
import { Link } from 'react-router-dom'
import LineText from '../components/LineText'

const Section = styled.section`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  width: 512px;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

const Logo = styled.img`
  width: 64px;
  height: 64px;
`

const Title = styled.h1`
  font-size: 1rem;
  text-align: center;
`

const Field = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${color.primary};
`

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: ${text.light};
  border-radius: 1rem;
  background-color: ${color.primary};
  border: 1px solid ${color.primary};
  cursor: pointer;

  &:hover {
    background-color: ${color.primaryDark};
    border: 1px solid ${color.primaryDark};
  }
`

const Info = styled.div`
  padding: 1rem;
  background-color: ${background.element};
  border-radius: 0.5rem;
  box-shadow: 2px 2px 0.5rem ${shadow};

  p {
    font-size: 1rem;
  }
`

const LastPassword = styled(Link)`
  color: ${color.primary};

  &:hover {
    color: ${color.primaryDark};
  }
`

export default function LoginPage() {
  return (
    <Section>
      <Form>
        <Logo src={logo} />
        <Title>
          Bem vindo <br /> ao Sistema Financeiro do GEMR
        </Title>
        <Field type="text" name="cpf" id="cpf" />
        <Field type="password" name="password" id="password" />
        <Buttons>
          <LastPassword to="/alterar-senha">Esqueceu a senha?</LastPassword>
          <Button type="submit">Acessar</Button>
        </Buttons>
        <LineText />
        <Info>
          <p>
            A senha inicial foi informada em reunião. Em caso de dúvidas, entre
            em contato com a Diretoria Financeira.
          </p>
        </Info>
      </Form>
    </Section>
  )
}
