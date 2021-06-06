
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api'

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>;

 const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(res => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data;
    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{
      transactions, createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}