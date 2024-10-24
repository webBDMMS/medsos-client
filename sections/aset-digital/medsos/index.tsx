import { DataTable } from "@/components/custom/data-table";
import Container from "@/components/custom/layouts/container";
import React from "react";
import { columns } from "./table/columns";
import medsos from "@/constants/media-sosial/medsos.json";
import { MedsosSchema } from "@/constants/media-sosial/data";

const Medsos = () => {
  const validatedData = medsos.data.map((item) => MedsosSchema.parse(item));

  return (
    <Container>
      <DataTable columns={columns} data={validatedData} />
    </Container>
  );
};

export default Medsos;
