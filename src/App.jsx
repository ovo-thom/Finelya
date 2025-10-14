import AddTransactionButton from "./components/AddTransactionButton";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-end mb-8">
          <AddTransactionButton />
        </div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
