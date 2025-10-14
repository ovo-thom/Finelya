import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbSettings } from "react-icons/tb";

export default function Sidebar() {
  return (
    <aside className="h-screen w-20 md:w-72 bg-gradient-to-b from-[#4b2bc2] via-[#7e21c9] to-[#9f1dd9]">
      <ul className="text-gray-100 w-3/4 mx-auto py-12">
        <li className="flex items-center px-4 rounded-xl mb-5 py-2 focus:bg-white/20 hover:bg-white/10 cursor-pointer">
          <span className="mr-3">
            <MdSpaceDashboard className="text-2xl md:text-lg"/>
          </span>
          <span className="hidden md:inline">Tableau de bord</span>
        </li>
        <li className="flex items-center px-4 rounded-xl mb-5 py-2 focus:bg-white/20 hover:bg-white/10 cursor-pointer">
          <span className="mr-3">
            <HiOutlineDocumentText className="text-2xl md:text-lg"/>
          </span>
          <span className="hidden md:inline">Transactions</span>
        </li>
        <li className="flex items-center px-4 rounded-xl mb-5 py-2 focus:bg-white/20 hover:bg-white/10 cursor-pointer">
          <span className="mr-3">
            <TbSettings className="text-2xl md:text-lg"/>
          </span>
          <span className="hidden md:inline">Paramètres</span>
        </li>
      </ul>
    </aside>
  );
}
