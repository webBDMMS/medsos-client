/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";
import { SekretariatTable } from "@/types/api-types/sekretariat";

export const columns: ColumnDef<SekretariatTable>[] = [
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
    accessorKey: "coverage_level",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tingkat Cakupan" />
    ),
    cell: ({ row }) => {
      const vFixCoverage: string | null = row.getValue("coverage_level");
      return (
        <div className="max-w-[500px] truncate font-medium">
          {vFixCoverage ? vFixCoverage : <span>Sekretariat</span>}
        </div>
      );
    },
  },
  {
    accessorKey: "alamat",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Alamat" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("alamat")}
      </div>
    ),
  },
  {
    accessorKey: "url_google_maps",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titik Google Maps" />
    ),
    cell: ({ row }) => {
      const vFixGmaps: string | null = row.getValue("url_google_maps");
      return (
        <div className="max-w-[500px] truncate font-medium">
          {vFixGmaps ? (
            <a
              target="_blank"
              href={vFixGmaps}
              className="cursor-pointer hover:underline text-primary"
            >
              {vFixGmaps}
            </a>
          ) : (
            <span className="text-center ">#N/A</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "instagram",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Akun Instagram" />
    ),
    cell: ({ row }) => {
      const vFixIg: string | null = row.getValue("instagram");
      return (
        <div className="max-w-[500px] truncate font-medium">
          {vFixIg ? vFixIg : <span className="text-center">#N/A</span>}
        </div>
      );
    },
  },
  // {
  //   accessorKey: "no_halo",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Nomor Halo" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px] truncate font-medium">
  //       {row.getValue("no_halo")}
  //     </div>
  //   ),
  // },
  {
    accessorKey: "fix_phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fix Phone" />
    ),
    cell: ({ row }) => {
      const vFixPhone: string | null = row.getValue("fix_phone");
      return (
        <div className="max-w-[500px] truncate font-medium">
          {vFixPhone ? vFixPhone : <span className="text-center">#N/A</span>}
        </div>
      );
    },
  },
];
