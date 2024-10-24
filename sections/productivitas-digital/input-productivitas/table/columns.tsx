import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";
import { Productivitas } from "@/constants/productivitas-digital/input-productivitas/data";

export const columns: ColumnDef<Productivitas>[] = [
  {
    accessorKey: "no",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center w-[30px]"
        column={column}
        title="No"
      />
    ),
    cell: ({ row }) => (
      <div className="w-[30px] text-center">{row.index + 1}</div>
    ),
    enableSorting: false,
    enableHiding: false,
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
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {new Date(row.getValue("date")).toLocaleDateString()}
      </div>
    ),
  },
  {
    accessorKey: "platform",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jenis Platform" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("platform")}
      </div>
    ),
  },
  {
    accessorKey: "link",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Link" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        <a
          href={row.getValue("link")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {row.getValue("link")}
        </a>
      </div>
    ),
  },
];
