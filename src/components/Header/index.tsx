import { useState } from 'react'
import Modal from 'react-modal'
import logoDoll from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logoDoll} alt="money manager" />
          <h1>
            Money <span>Manager</span>
          </h1>
        </div>
        <button type="button" onClick={openModal}>
          Nova Transação
        </button>

        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}
