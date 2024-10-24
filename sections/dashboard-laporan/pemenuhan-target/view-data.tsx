"use client";
import React, { useState } from "react";
import { ChartComponents } from "./chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/custom/data-table";
import { columnsAchieved } from "./table/medsos/columns";
import achieved from "@/constants/dashboard-laporan/pemenuhan-target/achived.json";
import notAchieved from "@/constants/dashboard-laporan/pemenuhan-target/not-achived.json";
import Link from "next/link";
import { columnsGmapsAchieved } from "./table/gmaps/columns";
import gampsAchieved from "@/constants/dashboard-laporan/pemenuhan-target/achived-gmaps.json";
import gampsNotAchieved from "@/constants/dashboard-laporan/pemenuhan-target/not-achived-gmaps.json";
import { useValue } from "@/hooks/use-value";

const ViewData = () => {
  const [activeTab, setActiveTab] = useState("achieved");
  const { selectedValue } = useValue();

  return (
    <div className="grid grid-cols-7 gap-5">
      <div className="col-span-2 flex flex-col gap-3">
        <p className="text-base underline">Resume:</p>
        <p className="text-sm">
          Total Unit Bisnis Google Maps:{" "}
          <span className="text-primary underline">512/512</span>
        </p>
        <p className="text-base underline mt-5">
          Persentase Ketercapaian Target:
        </p>
        <div>
          <ChartComponents />
        </div>
      </div>
      <div className="col-span-5 flex justify-between relative">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList>
            <TabsTrigger value="achieved">Target Tercapai</TabsTrigger>
            <TabsTrigger value="notAchieved">Target Tidak Tercapai</TabsTrigger>
          </TabsList>
          <TabsContent value="achieved" className="w-full">
            {selectedValue === "instagram" ? (
              <DataTable columns={columnsAchieved} data={achieved.data} />
            ) : (
              <DataTable
                columns={columnsGmapsAchieved}
                data={gampsAchieved.data}
              />
            )}
          </TabsContent>
          <TabsContent value="notAchieved">
            {selectedValue === "instagram" ? (
              <DataTable columns={columnsAchieved} data={notAchieved.data} />
            ) : (
              <DataTable
                columns={columnsGmapsAchieved}
                data={gampsNotAchieved.data}
              />
            )}
          </TabsContent>
        </Tabs>
        <Link href={"/dashboard-laporan/complete-productivity"}>
          <p className="text-base underline text-white truncate w-auto absolute right-0 cursor-pointer">
            Lihat data lengkap (1 tahun)
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ViewData;
