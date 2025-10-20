import { createContext, useContext, useState } from "react";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      id: transaction.id ?? Date.now().toString(),
      ...transaction,
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };
  return (
    <TransactionsContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}

export default TransactionsContext;
