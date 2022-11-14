import Modal from 'react-modal'
import { Container, ModalButtonsContainer, RadioBox } from './styles'
import closeModal from '../../assets/closeModal.svg'
import upArrow from '../../assets/squareUpArrow.svg'
import downArrow from '../../assets/squareDownArrow.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface ModalTransactionProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ModalTransaction({
  isOpen,
  onRequestClose
}: ModalTransactionProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  function createNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="reactModal"
      className="reactModalContent"
    >
      <button type="button" onClick={onRequestClose} className="modalClose">
        <img src={closeModal} alt="fechar modal" />
      </button>
      <Container onSubmit={createNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <ModalButtonsContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType('deposit')
            }}
            isChecked={type === 'deposit'}
          >
            <img src={upArrow} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType('withdraw')
            }}
            isChecked={type === 'withdraw'}
          >
            <img src={downArrow} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </ModalButtonsContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
