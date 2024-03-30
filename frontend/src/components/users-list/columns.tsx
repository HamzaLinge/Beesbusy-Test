"use client";

import { TUser } from "@/types/user";

import { ColumnDef } from "@tanstack/react-table";

import DataTableColumnHeader from "@/components/users-list/data-table-column-header";
import ActionsUser from "./actions-user";

export const columns: ColumnDef<TUser>[] = [
  {
    accessorKey: "prenom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prénom" />
    ),
  },
  {
    accessorKey: "nom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nom" />
    ),
  },
  {
    accessorKey: "genre",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Genre" />
    ),
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Âge" />
    ),
  },
  {
    accessorKey: "ville",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ville" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return <ActionsUser user={user} />;
    },
  },
];
