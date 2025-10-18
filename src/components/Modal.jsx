import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ onClose }) {
  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <form className="bg-white p-6 rounded-xl w-[35%]">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Ajouter une transaction</h3>
          <span
            onClick={onClose}
            className="text-xl text-gray-500 cursor-pointer"
          >
            <RxCross2 />
          </span>
        </div>
        <div className="my-5">
          <p className="mb-2">Type</p>
          <button className="border-2 border-gray-300 py-1 px-4 rounded-xl font-semibold mr-2 hover:bg-[#4b2bc2] hover:text-gray-50 hover:border-transparent duration-200">
            Revenu
          </button>
          <button className="border-2 border-gray-300 py-1 px-4 rounded-xl font-semibold hover:bg-[#4b2bc2] hover:text-gray-50 hover:border-transparent duration-200">
            Dépense
          </button>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="montant">Montant</label>
          <input
            type="text"
            id="montant"
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
            className="border-2 border-gray-300 rounded-xl p-1 outline-none"
          >
            <option value="">Choisir une catégorie</option>
            <option value="Nourriture">Nourriture</option>
            <option value="Logement">Logement</option>
            <option value="Transport">Transport</option>
            <option value="Salaire">Salaire</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="categorie">Date</label>
          <input
            type="date"
            className="border-2 border-gray-300 rounded-xl p-1 outline-none text-gray-600"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="categorie">Description</label>
          <input
            type="text"
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
          <button className="border-2 rounded-xl py-1 px-20 bg-[#119560] text-gray-50 border-transparent cursor-pointer">
            Ajouter
          </button>
        </div>
      </form>
    </div>,
    document.body
  );
}
