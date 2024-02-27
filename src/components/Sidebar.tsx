import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sidebarData } from "../../constants/data";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Link from "next/link";

const Sidebar = ({ open }) => {
  const [sideBarActive, setSideBarActive] = useState();
  const [secondSideBarActive, setSecondSideBarActive] = useState();
  const [itemActive, setItemActive] = useState();
  const handleSidebar = (activeName) => {
    if (sideBarActive == activeName) {
      setSideBarActive("");
    } else {
      setSideBarActive(activeName);
      setSecondSideBarActive('')
    }
  };
  const handleSecondSideBarActive = (activeName) => {
    if (secondSideBarActive == activeName) {
      setSecondSideBarActive("");
    } else {
      setSecondSideBarActive(activeName)
    }
  };
  const handleItemActive = (activeName) => {
    if (itemActive == activeName) {
      setItemActive("");
    } else {
      setItemActive(activeName);
    }
  };
  console.log(sidebarData);

  return (
    <div
      className={`px-3 pt-[80px] transition-all duration-500 overflow-hidden  ${
        open ? "w-[280px]" : "w-[50px]"
      } hover:w-[280px]`}
    >
      <div className="flex flex-col gap-1">
        {sidebarData.map((sidebar, index) => (
          <div className="" key={index}>
            <div
              onClick={() => handleSidebar(sidebar.menu_name)}
              className="cursor-pointer flex justify-between items-center mb-2 transition"
            >
              <div
                className={`flex gap-2 items-center ${
                  sideBarActive == sidebar.menu_name
                    ? "text-[#3E97FF]"
                    : "text-[#4b5675]"
                }`}
              >
                <FontAwesomeIcon icon={faUser} className="text-xs p-2 px-4" />
                <p>{sidebar.menu_name}</p>
              </div>
              <FontAwesomeIcon
                icon={faUser}
                className={`text-xs transition-all ease-in duration-300 ${
                  sideBarActive == sidebar.menu_name
                    ? "rotate-180 text-[#3E97FF]"
                    : "text-[#4b5675]"
                } `}
              />
            </div>
            <div
              className={`transition-all transform ease-in-out flex flex-col gap-2  ${
                sideBarActive == sidebar.menu_name
                  ? "visible max-h-[50rem] duration-500"
                  : "invisible max-h-0 duration-200"
              }`}
            >
              {/* second sidebar  */}
              {sidebar.child_menus.map((child, index) =>
                child.child_menus ? (
                  <div className="" key={index}>
                    <div
                      onClick={() => handleSecondSideBarActive(child.menu_name)}
                      className="cursor-pointer ml-10 flex justify-between items-center mb-2 transition"
                    >
                      <div
                        className={`flex gap-2 items-center ${
                          secondSideBarActive == child.menu_name
                            ? "text-[#3E97FF]"
                            : "text-[#4b5675]"
                        }`}
                      >
                        <FontAwesomeIcon icon={faUser} className="text-xs" />
                        <p>{child.menu_name}</p>
                      </div>
                      <FontAwesomeIcon
                        icon={faUser}
                        className={`text-xs transition-all ease-in duration-300 ${
                          secondSideBarActive == child.menu_name
                            ? "rotate-180 text-[#3E97FF]"
                            : "text-[#4b5675]"
                        }`}
                      />
                    </div>
                    <div
                      className={`transition-all transform ease-in-out flex flex-col gap-2  ${
                        secondSideBarActive == child.menu_name
                          ? "visible max-h-[50rem] duration-500"
                          : "invisible max-h-0 duration-200"
                      }`}
                    >
                      {child.child_menus.map((item, index) => (
                        <div
                          key={index}
                          className={`flex gap-2 items-center ml-14 py-1 px-2 ${
                            itemActive == item.menu_name
                              ? "text-[#3E97FF] bg-gray-200 rounded-md"
                              : "text-[#4b5675]"
                          }`}
                          onClick={() => handleItemActive(item.menu_name)}
                        >
                          <FontAwesomeIcon icon={faUser} className="text-xs" />
                          <p>{item.menu_name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <li
                    key={index}
                    className={`flex gap-2 items-center ml-10 py-1 px-2 w-full ${
                      itemActive == child.menu_name
                        ? "text-[#3E97FF] bg-gray-200 rounded-md"
                        : "text-[#4b5675]"
                    }`}
                    onClick={() => handleItemActive(child.menu_name)}
                  >
                      <FontAwesomeIcon icon={faUser} className="text-xs" />
                      <p>{child.menu_name}</p>
                  </li>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
