"use client";
import useMenu from "@/data/hooks/useMenu";
import { MenuSecao } from "@/data/models/MenuSecao";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import MenuPrincipalItem from "./MenuPrincipalItem";
import { MenuItem } from "@/data/models/MenuItem";
import FlexCustom from "../FlexCustom";
import Logo from "../Logo";
import { IconArrowLeftTail, IconChevronCompactLeft, IconMenu } from "@tabler/icons-react";

export default function MenuPrincipal() {
  const { secoes, mini, toggleMini, alternarSecao } = useMenu();

  function renderizarSecoes() {
    return secoes.map((secao: MenuSecao) => (
      <MenuPrincipalSecao
        key={secao.titulo}
        titulo={secao.titulo}
        mini={mini}
        aberta={secao.aberta}
        onClick={() => alternarSecao(secao)}
      >
        {renderizarItens(secao)}
      </MenuPrincipalSecao>
    ));
  }

  function renderizarItens(secao: MenuSecao) {
    return secao.itens.map((item: MenuItem) => (
      <MenuPrincipalItem
        key={`${item.titulo}-${item.tag}`}
        icone={item.icone}
        titulo={item.titulo}
        url={item.url}
        mini={mini}
        selecionado={item.selecionado}
      />
    ));
  }

  return (
    <aside
      className={`
            flex flex-col overflow-y-auto overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            ${mini ? "items-center w-[130px]" : "w-[340px]"}
        `}
    >
      <FlexCustom  className="flex m-7 justify-between items-center">
        {!mini && <div className=""> <Logo grande/></div>}
        <div className="cursor-pointer p-2 rounded-md hover:bg-zinc-800" onClick={toggleMini}>
          {mini ? <IconMenu size={30} /> : <IconChevronCompactLeft  size={30}/>}
        </div>
      </FlexCustom>
      <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
    </aside>
  );
}
