import { useState } from "react";
import Modal from "./Modal";

export default function AddTransactionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-green-700 text-gray-50 px-2 mt-4 md:mt-0 md:px-4 md:min-w-56 py-2 rounded-lg cursor-pointer"
      >
        Ajouter dépense / transaction
      </button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}