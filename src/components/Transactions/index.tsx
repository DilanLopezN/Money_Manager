import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export function Transactions() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freelancer</td>
            <td className="deposit">R$1000</td>
            <td>Desenvolvimento</td>
            <td>11/11/2022</td>
          </tr>
          <tr>
            <td>Comida</td>
            <td className="withdraw"> - R$250</td>
            <td>Alimentação</td>
            <td>11/11/2022</td>
          </tr>
          <tr>
            <td>Jogos</td>
            <td className="withdraw"> - R$250</td>
            <td>Lazer</td>
            <td>11/11/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
