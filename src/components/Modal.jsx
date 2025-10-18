import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

export default function Modal() {
  return createPortal(
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <form className="bg-white p-4 rounded-xl w-[35%]">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Ajouter une transaction</h3>
          <span className="text-xl text-gray-500 cursor-pointer">
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
        <div className="flex flex-col gap-2">
          <label htmlFor="montant">Montant</label>
          <input
            type="text"
            id="montant"
            placeholder="ex: -45,00 €"
            className="border-2 border-gray-300 rounded-xl p-1 outline-none"
          />
          <p className="hidden">Montant positif = revenu, négatif = dépense</p>
        </div>
      </form>
    </div>,
    document.body
  );
}
