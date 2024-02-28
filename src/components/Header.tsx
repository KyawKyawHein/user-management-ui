import {
  faArrowRightFromBracket,
  faBars,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Input from "./form/input/Input";
import Dropdown from "./drawer/Dropdown";
import Badge from "./Badge";
import MenuDropdown from "./drawer/MenuDropdown";

const Header = ({ open, setOpen }) => {
  return (
    <header>
      <nav className="flex p-2 px-10">
        <div className="flex gap-2 items-center lg:w-[200px]">
          <div
            className="py-2 px-3 bg-white rounded-xl"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <Link href={"/"} className="text-[#3E97FF] font-bold text-xl">
            ERPPOS
          </Link>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="w-[300px]">
            <Input placeholder="Search..." />
          </div>
          <div className="flex items-center">
            <MenuDropdown icon={faLayerGroup}>
							<div>Hello</div>
						</MenuDropdown>
						<Badge count={3} icon={faBell} />
						<button className="w-[35px] h-[35px] flex items-center justify-center text-gray-500">
							<FontAwesomeIcon
								icon={faArrowRightFromBracket}
								className="w-full h-full"
							/>
						</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
