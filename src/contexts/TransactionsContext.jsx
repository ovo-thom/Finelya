import { createContext, useContext, useState } from "react";

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
    const [transactions, setTransactions] = useState([]);
     // Tu pourras ajouter addTransaction, removeTransaction ici
    return (
   <TransactionsContext.Provider value={{transactions, setTransactions}} >
    {children}
   </TransactionsContext.Provider>
    );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}

export default TransactionsContext;