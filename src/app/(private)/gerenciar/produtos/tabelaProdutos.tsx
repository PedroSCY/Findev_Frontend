"use client";
import DataTable from "@/components/ui/data-table";
import React, { useState } from "react";
import { columns } from "./columns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface TBProdutosProps {
  data: any[];
}

export default function TabelaProdutos({ data }: TBProdutosProps) {
  const [filtros, setFIltros] = useState<string>();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div className="grid w-full max-w-sm items-center gap-3">
          <label
            htmlFor="filtroTabelaProdutos"
            className="text-muted-foreground font-semibold"
          >
            Procurar:
          </label>
          <Input
            id="filtroTabelaProdutos"
            value={filtros ?? ""}
            onChange={(e) => setFIltros(String(e.target.value))}
            placeholder="Ex: Nome, código..."
            className="max-w-sm rounded-xs shadow-xs placeholder:text-xs font-mono"
          />
        </div>
        <Button className="rounded-xs">
          <Plus /> Novo Produto
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        filter={{ value: filtros ?? "", onChange: setFIltros }}
      />
    </div>
  );
}
