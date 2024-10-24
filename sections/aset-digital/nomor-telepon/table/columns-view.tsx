/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";
import { ViewNomor } from "@/constants/nomor-telphone/data";

export const columnsView: ColumnDef<ViewNomor>[] = [
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
    accessorKey: "phone_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nomor Telepon" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("phone_number")}
      </div>
    ),
  },
  {
    accessorKey: "provider",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Provider" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("provider")}
      </div>
    ),
  },
  {
    accessorKey: "pj",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Penanggung Jawab" />
    ),
    cell: ({ row }) => (
      <div
        data-id={`row-${row.getValue("pj")}`}
        className="max-w-[500px] truncate font-medium"
      >
        {row.getValue("pj")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jabatan" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("position")}
      </div>
    ),
  },
  {
    accessorKey: "active_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal Aktif" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {new Date(row.getValue("active_date")).toLocaleDateString("id-ID")}
      </div>
    ),
  },
  {
    accessorKey: "non_active_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal Non Aktif" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("non_active_date")
          ? new Date(row.getValue("non_active_date")).toLocaleDateString(
              "id-ID"
            )
          : "-"}
      </div>
    ),
  },
];
