import { Container } from './styles'
import { ArrowCircleUp, ArrowCircleDown, Money } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp color="#50c878" size={32} />
        </header>
        <strong>
          {' '}
          <span>R$</span> 1000
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <ArrowCircleDown color="#f72606" size={32} />
        </header>
        <strong>
          {' '}
          <span>R$</span> -500
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <Money color="#06f766" size={42} />
        </header>
        <strong>
          {' '}
          <span>R$</span> 500
        </strong>
      </div>
    </Container>
  )
}
