/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";
import { SekretariatPhoneTable } from "@/types/api-types/sekretariat";

export const columns: ColumnDef<SekretariatPhoneTable>[] = [
  {
    accessorKey: "no",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center w-[30px]"
        column={column}
        title="No"
      />
    ),
    cell: ({ row }: { row: any }) => (
      <div className="w-[30px] text-center">{row.index + 1}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "kota",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Kota" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("kota")}
      </div>
    ),
  },
  {
    accessorKey: "unit",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sekretariat" />
    ),
    cell: ({ row }) => (
      <div
        data-id={`row-${row.getValue("unit")}`}
        className="max-w-[500px] truncate font-medium"
      >
        {row.getValue("unit")}
      </div>
    ),
  },
  {
    accessorKey: "alamat",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Alamat Sekretariat" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("alamat")}
      </div>
    ),
  },
];
