import { faArrowRightFromBracket, faBars, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = ({open,setOpen}) => {
  return (
    <header>
      <nav className="flex p-2 px-10">
        <div className="flex gap-2 items-center lg:w-[200px]">
            <div className="py-2 px-3 bg-white rounded-xl" onClick={()=>setOpen(!open)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <Link href={'/'} className="text-[#3E97FF] font-bold text-xl">ERPPOS</Link>
        </div>
        <div className="flex justify-between items-center w-full">
            <div className="">
                <input type="text" placeholder="Search..." className="p-2 px-5 rounded ring-2 ring-gray-100 hover:ring-gray-200 rounded-lg outline-none" />
            </div>
            <div className="flex gap-4 items-center text-xl">
                <FontAwesomeIcon icon={faLayerGroup} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
