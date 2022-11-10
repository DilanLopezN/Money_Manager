import logoDoll from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoDoll} alt="money manager" />
          <h1>
            Money <span>Manager</span>
          </h1>
        </div>
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  )
}
