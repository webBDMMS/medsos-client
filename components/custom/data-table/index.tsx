/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import useDialogStore from "@/hooks/use-dialog";
import { usePathname, useRouter } from "next/navigation";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";
import { Delete, Pencil, ScanSearch } from "lucide-react";
import { useProductivitasStore } from "@/hooks/use-productivitas";

interface DataTableProps<TData extends { id?: any }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData & { id?: any }, TValue>) {
  const { removeProductivitas } = useProductivitasStore();
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const pathname = usePathname();
  console.log("current path", pathname);
  const router = useRouter();
  const { openDialog } = useDialogStore();

  // const params = useParams<{ id: any }>();
  // const id = params.id;

  const pathConditions = {
    isSekretariat: pathname === "/gedung",
    isNoHandphone: pathname === "/aset-digital/nomor-telepon",
    isMedsos: pathname === "/aset-digital/media-sosial",
    isGMaps: pathname === "/aset-digital/google-maps",
    isProductivity: pathname === "/productivitas-digital/input-productivitas",
    isVerify: pathname === "/productivitas-digital/verifikasi-productivitas",
    isFulfillment: pathname === "/dashboard-laporan/pemenuhan-target",
    // isViewNoHandphone: pathname === `/aset-digital/nomor-telepon/${id}`,
    isCompletePorductivity:
      pathname === `/dashboard-laporan/complete-productivity`,
    // Add more conditions as needed
  };

  // You can now access the conditions like this:
  const {
    isSekretariat,
    isNoHandphone,
    isMedsos,
    isGMaps,
    isProductivity,
    isVerify,
    isFulfillment,
    isCompletePorductivity,
  } = pathConditions;

  const handleRowDoubleClick = (rowId: any) => {
    console.log(rowId);

    if (isSekretariat) {
      openDialog(rowId, "sekretariat");
    }

    if (isVerify) {
      openDialog(rowId, "verify");
    }
  };

  const handleViews = (rowData: any) => {
    console.log("view action", rowData);
    if (isNoHandphone) {
      // Untuk App Router, gunakan format string URL
      router.push(
        `/aset-digital/nomor-telepon/view-data?kota=${encodeURIComponent(
          rowData.kota
        )}&sekretariat=${encodeURIComponent(rowData.unit)}`
      );
    }
  };

  const handleEdit = (rowId: any) => {
    console.log(rowId);
    if (isNoHandphone) {
      openDialog(rowId, "edit phone");
    }
    if (isMedsos) {
      openDialog(null, "edit medsos");
    }
    if (isGMaps) {
      openDialog(null, "edit gmaps");
    }
  };

  const handleDelete = (rowId: any) => {
    console.log(rowId);
    if (isProductivity) {
      removeProductivitas(rowId);
    }
  };

  // ? adjust for set paginations
  const initialState =
    pathname !== "/dashboard-laporan/complete-productivity"
      ? {
          pagination: {
            pageSize: isProductivity || isVerify || isFulfillment ? 10 : 20,
          },
        }
      : undefined; // or just set to null if preferred

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    initialState,
    globalFilterFn: "includesString", // Set global filter function
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  {isNoHandphone || isMedsos || isGMaps || isProductivity ? ( // Aktifkan ContextMenu hanya jika pathname cocok
                    <ContextMenu>
                      <ContextMenuTrigger asChild>
                        <TableRow
                          className="transition hover:cursor-pointer hover:bg-muted"
                          data-state={row.getIsSelected() && "selected"}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuLabel data-id="actions">
                          Actions
                        </ContextMenuLabel>
                        <Separator />
                        <ContextMenuItem
                          data-id="act-view"
                          className={`${
                            isMedsos || isGMaps || isProductivity
                              ? "hidden"
                              : ""
                          }`}
                          onClick={() => handleViews(row.original)}
                        >
                          View
                          <ContextMenuShortcut>
                            <ScanSearch size={20} />
                          </ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem
                          data-id="act-edit"
                          className={`${isProductivity ? "hidden" : ""}`}
                          onClick={() => handleEdit(row.original.id!)}
                        >
                          Edit
                          <ContextMenuShortcut>
                            <Pencil size={17} />
                          </ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem
                          data-id="act-delete"
                          onClick={() => handleDelete(row.original.id!)}
                        >
                          Hapus
                          <ContextMenuShortcut>
                            <Delete size={17} />
                          </ContextMenuShortcut>
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ) : (
                    <TableRow
                      className="transition hover:cursor-pointer hover:bg-muted "
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      {...(isSekretariat || isVerify
                        ? {
                            onDoubleClick: () =>
                              handleRowDoubleClick(row.original.id!),
                          }
                        : {})}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          className={
                            isCompletePorductivity
                              ? "border border-[#262626]"
                              : ""
                          }
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pathname !== "/dashboard-laporan/complete-productivity" && (
        <DataTablePagination table={table} />
      )}
    </div>
  );
}
