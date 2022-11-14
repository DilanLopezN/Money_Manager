import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { ModalTransaction } from './components/ModalTransaction'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }
  return (
    <>
      <Header onOpenModal={openModal} />
      <Dashboard />
      <ModalTransaction isOpen={isModalOpen} onRequestClose={closeModal} />
      <GlobalStyle />
    </>
  )
}
