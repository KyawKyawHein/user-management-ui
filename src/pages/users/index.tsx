import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import CustomTable from "@/components/table/CustomTable";
import TableFilter from "@/components/table/TableFilter";
import React, { useEffect, useState } from "react";
import TablePagination from "@/components/table/TablePagination";
import { UsersListInfos } from "@/constants/data";

const tableHeader = ['USER','ROLE',"LAST LOGIN","TWO-STEP","JOINED DATE"]
const index = () => {
  const [search,setSearch] = useState('')
  const [filterList,setFilterList] = useState()
  useEffect(()=>{
    const filter = UsersListInfos?.filter(val=>val.user.name.toLowerCase().includes(search.toLowerCase()))
    setFilterList(filter)
  },[search])
  useEffect(()=>{
    setFilterList(UsersListInfos)
  },[])
  return (
    <Layout>
      <div className="px-10 py-5 mt-6 bg-white mx-3 rounded-md">
        <div className="py-4">
          <h1 className="font-semibold">Users List</h1>
          <div className="">
            <Breadcrumbs />
          </div>
        </div>
        <div className="rounded-xl border">
          <div className="mb-4">
            <TableFilter placeholder={"Search User"} search={search} setSearch={setSearch}/>
            <CustomTable tableHeader={tableHeader} rowData={filterList}/>
            <div className="my-6">
              <TablePagination />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
