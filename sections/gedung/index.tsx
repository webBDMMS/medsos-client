/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { DataTable } from "@/components/custom/data-table";
import Container from "@/components/custom/layouts/container";
import React from "react";
import { columns } from "./table/columns";
import { useGetSekretariats } from "@/hooks/react-querry/use-sekretariat";
import { TypeSekretariat } from "@/types/api-types/sekretariat";

let sekretariatOptionsAll: { value: string; label: string }[] = [];

const Sekretariat = () => {
  const { data: sekretariats, isLoading, error } = useGetSekretariats();


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  sekretariatOptionsAll =
    sekretariats?.map((sekretariat: TypeSekretariat) => ({
      value: sekretariat.unit,
      label: sekretariat.unit,
    })) ?? [];

  return (
    <Container>
      <DataTable columns={columns} data={sekretariats ?? []} />
    </Container>
  );
};

export { sekretariatOptionsAll };
export default Sekretariat;
