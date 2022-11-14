import { useState } from 'react'
import Modal from 'react-modal'
import logoDoll from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenModal: () => void
}
export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoDoll} alt="money manager" />
          <h1>
            Money <span>Manager</span>
          </h1>
        </div>
        <button type="button" onClick={onOpenModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
