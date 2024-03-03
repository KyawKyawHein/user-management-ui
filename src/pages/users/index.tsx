import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import CustomTable from "@/components/table/CustomTable";
import React, { useEffect, useState } from "react";
import TablePagination from "@/components/table/TablePagination";
import { UsersListInfos } from "@/constants/data";
import { useGetUsers } from "@/queries/userManagement.api";
import Input from "@/components/form/input/Input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/form/button/Button";
import Link from "next/link";

const tableHeader = ["Name", "Email", "Phone", "Role", "Is Active "];
const HomePage = () => {
  const [search, setSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countPagination, setCountPagination] = useState(1);
  const itemsPerPage = 10;
  const { data: users, isLoading } = useGetUsers();
  useEffect(() => {
    setCountPagination(Math.ceil(users?.length / 10));
  }, [users]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if (search.length > 0) {
      const currentPageData = searchedUser?.slice(startIndex, endIndex);
      setFilteredUsers(currentPageData);
    } else {
      const currentPageData = users?.slice(startIndex, endIndex);
      setFilteredUsers(currentPageData);
    }
  }, [currentPage, users, searchedUser]);
  useEffect(() => {
    const searchUser = users?.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    // const sliceUsers = searchUser?.slice(0,paginate)
    setCountPagination(Math.ceil(searchUser?.length / 10));
    setSearchedUser(searchUser);
  }, [search]);
  return (
    <Layout title={"User List"}>
      <div className="px-10 py-5 mt-6 bg-white mx-3 rounded-md">
        <div className="py-4 flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Users List</h1>
            <Breadcrumbs />
          </div>
          <div className="flex gap-3 items-center">
            <Input
              placeholder={"Search"}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={faMagnifyingGlass}
            />
            <Link href={'/users/create'} className="bg-blue-500 px-3 py-2 text-white rounded">Create User</Link>
          </div>
        </div>
        {isLoading ? (
          <h1 className="text-center p-3">Loading</h1>
        ) : (
          <div className="rounded-xl border">
            <div className="mb-4">
              <CustomTable tableHeader={tableHeader} users={filteredUsers} />
              <div className="my-6">
                <TablePagination
                  countPagination={countPagination}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
