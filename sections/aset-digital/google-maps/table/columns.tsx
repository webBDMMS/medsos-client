/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";
import { GMaps } from "@/constants/google-maps/data";

export const columns: ColumnDef<GMaps>[] = [
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
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Kota" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("city")}
      </div>
    ),
  },
  {
    accessorKey: "sekretariat",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sekretariat" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("sekretariat")}
      </div>
    ),
  },
  {
    accessorKey: "business_unit_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Unit Bisnis" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("business_unit_name")}
      </div>
    ),
  },
  {
    accessorKey: "map_point",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titik Google Maps" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("map_point")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("status")}
      </div>
    ),
  },
];
