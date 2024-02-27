import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import CustomTable from "@/components/table/CustomTable";
import TableFilter from "@/components/table/TableFilter";
import React from "react";

const index = () => {
  return (
    <Layout>
      <div className="px-10 mt-6 bg-white mx-3 rounded-md">
        <div className="">
          <h1 className="font-semibold">Users List</h1>
          <div className="">
            <Breadcrumbs />
          </div>
        </div>
        <div className="rounded-xl m-8 border">
          <div className="mb-4">
            <TableFilter/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
