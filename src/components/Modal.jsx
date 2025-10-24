import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { useTransactions } from "../contexts/TransactionsContext";
import { useState } from "react";

export default function Modal({ onClose }) {
  const [montant, setMontant] = useState("");
  const [categorie, setCategorie] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { addTransaction } = useTransactions();
  const [type, setType] = useState("revenu");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!montant || isNaN(Number(montant)) || Number(montant) === 0) return;
    const montantFinal =
      type === "dépense"
        ? -Math.abs(Number(montant))
        : Math.abs(Number(montant));
    const transaction = {
      montant: montantFinal,
      categorie,
      date,
      description,
      type,
    };
    addTransaction(transaction);
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 overflow-hidden">
      <div className="bg-white p-4 md:p-6 rounded-xl w-full max-w-xs sm:max-w-md  shadow-lg overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="max-h-[80vh] overflow-y-auto px-2"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl font-semibold">
              Ajouter une transaction
            </h3>
            <span
              onClick={onClose}
              className="text-xl md:text-2xl text-gray-500 cursor-pointer"
            >
              <RxCross2 className="hover:rotate-180" />
            </span>
          </div>
          <div className="my-5">
            <p className="mb-2">Type</p>
            <button
              type="button"
              onClick={() => setType("revenu")}
              className={`border-2 py-1 px-4 rounded-xl font-semibold mr-2 ${
                type === "revenu"
                  ? "bg-violet-600 text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              Revenu
            </button>
            <button
              type="button"
              onClick={() => setType("dépense")}
              className={`border-2 py-1 px-4 rounded-xl font-semibold ${
                type === "dépense"
                  ? "bg-violet-600 text-white border-transparent"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              Dépense
            </button>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="montant">Montant</label>
            <input
              type="text"
              id="montant"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              placeholder="ex: -45,00 €"
              className="border-2 border-gray-300 rounded-xl p-1 outline-none"
            />
            <p className="opacity-0">
              Montant positif = revenu, négatif = dépense
            </p>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="categorie">Catégorie</label>
            <select
              id="categorie"
              name="categorie"
              value={categorie}
              onChange={(e) => setCategorie(e.target.value)}
              className="border-2 border-gray-300 rounded-xl p-1 outline-none"
            >
              <option value="">Choisir une catégorie</option>
              <option value="Nourriture">Nourriture</option>
              <option value="Logement">Logement</option>
              <option value="Transport">Transport</option>
              <option value="Salaire">Salaire</option>
              <option value="Loisir">Loisir</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={date}
              id="date"
              onChange={(e) => setDate(e.target.value)}
              className="border-2 border-gray-300 rounded-xl p-1 outline-none text-gray-600"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              value={description}
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 border-gray-300 rounded-xl p-1 outline-none"
            />
          </div>
          <div className="flex justify-center gap-3">
            <button
              onClick={onClose}
              className="border-2 border-gray-300 rounded-xl py-1 px-4 cursor-pointer"
            >
              Annuler
            </button>
            <button className="border-2 rounded-xl py-1 px-12 sm:px-16 md:px-20 bg-[#119560] text-gray-50 border-transparent cursor-pointer">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
