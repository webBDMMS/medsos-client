"use client";

import React from "react";
import { CustomModal } from "@/components/custom/modal";
import Container from "@/components/custom/layouts/container";
import { Separator } from "@/components/ui/separator";
import FillterActions from "./fillter-data";
import ViewData from "./view-data";


const PemenuhanProductivitas = () => {

  return (
    <Container>
      <CustomModal />
      <FillterActions />
      <Separator className="my-3 mb-7" />
      <ViewData />
    </Container>
  );
};

export default PemenuhanProductivitas;
