"use client";
import secoesMenu from "@/data/constants/secoesMenu";
import useBoolean from "@/hooks/useBoolean";
import useTamanhoJanela from "@/hooks/useTamanhoJanela";
import { MenuSecao } from "@/models/MenuSecao";
import { usePathname } from "next/navigation";
import React, { createContext, ReactNode, useEffect, useState } from "react";

const ContextoMenu = createContext({} as any);

export function MenuProvider(props: { children: ReactNode }) {
  const [mini, toggleMini, miniTrue, miniFalse] = useBoolean(false);
  const [secoes, setSecoes] = useState<any>(secoesMenu);
  let tamanho = useTamanhoJanela();
  const url = usePathname();

  useEffect(() => {
    if (tamanho === "md" || tamanho === "sm" || tamanho === "xs") {
      miniTrue();
    } else {
      miniFalse();
    }
  }, [tamanho]);

  useEffect(() => {
    if (!url) return;
    setSecoes((prev: MenuSecao[]) => selecionarItem(prev, url));
  }, [url]);

  function alternarSecao(secaoSelecionada: MenuSecao) {
    setSecoes((prev: any) =>
      prev.map((secao: any) =>
        secao.titulo === secaoSelecionada.titulo
          ? { ...secao, aberta: !secao.aberta }
          : secao
      )
    );
  }

  function selecionarItem(prevSecoes: MenuSecao[], url: string): MenuSecao[] {
    return prevSecoes.map((secao) => {
      const novosItens = (secao.itens ?? []).map((item) => ({
        ...item,
        selecionado: item.url === url,
      }));
      return { ...secao, itens: novosItens };
    });
  }

  const ctx = { secoes, mini, toggleMini, alternarSecao };

  return (
    <ContextoMenu.Provider value={ctx}>{props.children}</ContextoMenu.Provider>
  );
}

export default ContextoMenu;
