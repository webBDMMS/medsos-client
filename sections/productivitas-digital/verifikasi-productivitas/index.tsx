"use client";

import React from "react";
import Container from "@/components/custom/layouts/container";
import { DataTable } from "@/components/custom/data-table";
import { columns } from "./table/columns-gmaps";
import verify from "@/constants/productivitas-digital/verifikasi-productivitas/varifikasi.json";
import verifyMedsos from "@/constants/productivitas-digital/verifikasi-productivitas/varifikasiMedsos.json";
import { Separator } from "@/components/ui/separator";
import FillterActions from "./fillter-data";
import { useValue } from "@/hooks/use-value";
import { columnsMedsos } from "./table/columns-medsos";

const VerifikasiProductivitas = () => {
  const { selectedValue } = useValue();

  return (
    <Container>
      <FillterActions />
      <Separator className="my-3" />
      {selectedValue === "instagram" ? (
        <DataTable columns={columnsMedsos} data={verifyMedsos.data} />
      ) : (
        <DataTable columns={columns} data={verify.data} />
      )}
    </Container>
  );
};

export default VerifikasiProductivitas;
