import produtos from "@/data/Mock/produtos";
import { Produto } from "@/data/models/produtos";
import React from "react";
import Pagina from "@/components/template/Pagina";
import TabelaProdutos from "./tabelaProdutos";

async function getData(): Promise<Produto[]> {
  const res = produtos;
  return [...res];
}

export default async function ProdutosPage() {
  const data = await getData();


  return (
    <Pagina titulo="Produtos">
      <div className="container mx-auto py-10">
        <TabelaProdutos data={data}/>       
      </div>
    </Pagina>
  );
}
