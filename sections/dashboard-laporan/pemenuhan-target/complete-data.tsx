"use client";

import React from "react";
import Container from "@/components/custom/layouts/container";
import { columnsFull } from "./table/medsos/columns-full";
import { DataTable } from "@/components/custom/data-table";
import fullAchieved from "@/constants/dashboard-laporan/pemenuhan-target/complete-achived.json";

const CompleteProductivity = () => {
  return (
    <Container>
      <div className="max-h-[90vh]">
        <DataTable columns={columnsFull} data={fullAchieved.data} />
      </div>
    </Container>
  );
};

export default CompleteProductivity;
