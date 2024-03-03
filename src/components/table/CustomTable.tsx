import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "../form/input/Checkbox";
import Image from "next/image";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MenuDropdown from "../drawer/MenuDropdown";

const CustomTable = ({ tableHeader, users }) => {
  return (
    <div className="text-sm flex flex-col gap-3 lg:w-full w-11/12 customize__scroll m-auto px-4 bg-white">
      <table className="table w-full">
        <thead>
          <tr className="text-left text-gray-400 uppercase border-b border-dashed border-gray-200">
            {tableHeader.map((th, index) => (
              <React.Fragment key={index}>
                <th
                  className="px-3 py-4 text-left min-w-[125px] group cursor-pointer"
                >
                  <div className="flex items-center text-xs">
                    {th}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 w-[11px] h-[11px] opacity-0 transition duration-300 group-hover:opacity-100"
                    />
                  </div>
                </th>
              </React.Fragment>
            ))}
            <th className="px-3 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 ? (
            users.map((user, idx) => {
              return (
                <tr
                  key={idx}
                  className="capitalize border-b border-dashed border-gray-200"
                >
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.phone}</td>
                 <td>{user.role}</td>
                 <td>{user.isActive == "True" ? 'Active':'Inactive'}</td>
                  <td className="p-3">
                    <MenuDropdown />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="p-3 text-center">No data available in table</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;