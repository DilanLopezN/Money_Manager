import Modal from 'react-modal'
import { Container, ModalButtonsContainer } from './styles'
import closeModal from '../../assets/closeModal.svg'
import upArrow from '../../assets/squareUpArrow.svg'
import downArrow from '../../assets/squareDownArrow.svg'

interface ModalTransactionProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ModalTransaction({
  isOpen,
  onRequestClose
}: ModalTransactionProps) {
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
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />

        <input type="number" placeholder="Valor" />

        <ModalButtonsContainer>
          <button type="button">
            <img src={upArrow} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={downArrow} alt="Saída" />
            <span>Saída</span>
          </button>
        </ModalButtonsContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
