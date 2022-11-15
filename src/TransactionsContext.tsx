import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

export const TransactionsContext = createContext<Transaction[]>([])

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode
}
export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, SetTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api
      .get('transactions')
      .then(response => SetTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}