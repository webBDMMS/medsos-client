/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";
import { FullAchived } from "@/constants/dashboard-laporan/pemenuhan-target/data";

// Function to display a title for grouped columns
const InfoHeader = ({ title }: { title: string }) => {
  return <div className="text-base text-center font-bold">{title}</div>;
};

export const columnsFull: ColumnDef<FullAchived>[] = [
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
    accessorKey: "branch",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Cabang"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("branch")}
      </div>
    ),
  },
  {
    accessorKey: "account_name",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Nama Akun"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("account_name")}
      </div>
    ),
  },
  // Grouped columns with a shared header
  {
    id: "resume",
    header: () => <InfoHeader title="Resume" />, // Grouped column title
    columns: [
      {
        accessorKey: "numbers_of_day",
        header: ({ column }) => (
          <DataTableColumnHeader
            className="text-center"
            column={column}
            title="Jumlah Hari dengan Publikasi"
          />
        ),
        cell: ({ row }) => (
          <div className="max-w-[500px] truncate font-medium">
            {row.getValue("numbers_of_day")}
          </div>
        ),
      },
      {
        accessorKey: "average_of_day",
        header: ({ column }) => (
          <DataTableColumnHeader
            className="text-center"
            column={column}
            title="Rata-rata Publikasi per Hari"
          />
        ),
        cell: ({ row }) => (
          <div className="max-w-[500px] truncate font-medium">
            {row.getValue("average_of_day")}
          </div>
        ),
      },
      {
        accessorKey: "phone",
        header: ({ column }) => (
          <DataTableColumnHeader
            className="text-center"
            column={column}
            title="Nomor Telepon"
          />
        ),
        cell: ({ row }) => (
          <div className="max-w-[500px] truncate font-medium">
            {row.getValue("phone")}
          </div>
        ),
      },
    ],
  },
  {
    id: "month",
    header: () => <InfoHeader title="Januari" />, // Grouped column title
    columns: [
      {
        accessorKey: "number_of_publication",
        header: ({ column }) => (
          <DataTableColumnHeader
            className="text-center"
            column={column}
            title="Total Publikasi"
          />
        ),
        cell: ({ row }) => (
          <div className="max-w-[500px] truncate font-medium">
            {row.getValue("number_of_publication")}
          </div>
        ),
      },
      {
        accessorKey: "numbers_publication",
        header: ({ column }) => (
          <DataTableColumnHeader
            className="text-center"
            column={column}
            title="Jumlah Hari Dengan Publikasi"
          />
        ),
        cell: ({ row }) => (
          <div className="max-w-[500px] truncate font-medium">
            {row.getValue("numbers_publication")}
          </div>
        ),
      },
      {
        accessorKey: "total_day",
        header: ({ column }) => (
          <DataTableColumnHeader
            className="text-center"
            column={column}
            title="Jumlah Hari"
          />
        ),
        cell: ({ row }) => (
          <div className="max-w-[500px] truncate font-medium">
            {row.getValue("total_day")}
          </div>
        ),
      },
    ],
  },
];
