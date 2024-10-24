'use client'
import { DataTable } from "@/components/custom/data-table";
import Container from "@/components/custom/layouts/container";
import React from "react";
import { columns } from "./table/columns";
import { CustomModal } from "@/components/custom/modal";
import { useGetSekretariats } from "@/hooks/react-querry/sekretariat";

const NomorTelepon = () => {
  const { data: sekretariats, isLoading, error } = useGetSekretariats();

  console.log(JSON.stringify(sekretariats));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <Container>
      <CustomModal />
      <DataTable columns={columns} data={sekretariats ?? []} />
    </Container>
  );
};

export default NomorTelepon;
