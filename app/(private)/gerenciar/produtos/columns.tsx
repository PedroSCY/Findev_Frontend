"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Produto } from "@/data/models/produtos";
import { IconCopy, IconEdit, IconTrash } from "@tabler/icons-react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<Produto>[] = [
  {
    accessorKey: "id",
    size: 50,
    minSize: 50,
    maxSize: 100,
    header: ({ column }) => {
      return (
        <Button
          className="rounded-xs w-full justify-between"
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Código
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "sku",
    size: 50,
    minSize: 50,
    maxSize: 100,
    header: ({ column }) => {
      return (
        <Button
          className="rounded-xs w-full justify-between"
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          SKU
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "nome",
    size: 300,
    minSize: 200,
    header: ({ column }) => {
      return (
        <Button
          className="rounded-xs w-full justify-between"
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "preco",
    size: 50,
    maxSize: 80,
    header: ({ column }) => {
      return (
        <Button
          className="rounded-xs w-full justify-between"
          variant={"ghost"}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Preço
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const preco = parseFloat(row.getValue("preco"));
      const formateed = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(preco);

      return <div className="font-medium">{formateed}</div>;
    },
  },
  {
    id: "actions",
    size: 50,
    maxSize: 80,
    cell: ({ row }) => {
      const produto = row.original;

      return (
        <span className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 rounded-xs">
                <span className="sr-only">Abrir menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom">
              <DropdownMenuItem
                onClick={() => {
                  if (produto.id != undefined) {
                    navigator.clipboard.writeText(produto.id);
                  }
                }}
              >
                <IconCopy />
                Copiar ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconEdit />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconTrash />
                Deletar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      );
    },
  },
];
