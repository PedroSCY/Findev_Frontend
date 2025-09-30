"use client";
import useMenu from "@/data/hooks/useMenu";
import { MenuSecao } from "@/data/models/MenuSecao";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import MenuPrincipalItem from "./MenuPrincipalItem";
import { MenuItem } from "@/data/models/MenuItem";
import FlexCustom from "../FlexCustom";
import Logo from "../Logo";
import {
  IconLayoutSidebarLeftCollapseFilled,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";
import { ToggleTheme } from "@/components/ui/custom/ToggleTheme";

export default function MenuPrincipal() {
  const { secoes, mini, toggleMini, alternarSecao } = useMenu();

  function renderizarSecoes() {
    return secoes.map((secao: MenuSecao) => {
      if (secao.titulo === "MenuItem") {
        return (
          <FlexCustom
            key={secao.titulo}
            col
            gap={0}
            className={`${mini && "items-center"}`}
          >
            {renderizarItens(secao)}
          </FlexCustom>
        );
      } else {
        return (
          <MenuPrincipalSecao
            key={secao.titulo}
            titulo={secao.titulo}
            mini={mini}
            aberta={secao.aberta}
            onClick={() => alternarSecao(secao)}
          >
            {renderizarItens(secao)}
          </MenuPrincipalSecao>
        );
      }
    });
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
             shadow-md  transition-all duration-300 ease-out bg-sidebar
            ${mini ? " w-[130px]" : "w-[340px]"}
        `}
    >
      <FlexCustom
        className={`flex m-7 ${
          mini ? "justify-center" : "justify-between"
        } items-center`}
      >
        {!mini && (
          <div className="select-none">
            {" "}
            <Logo grande />
          </div>
        )}
        <div
          className="cursor-pointer p-2 hover:bg-sidebar-accent rounded-xs "
          onClick={toggleMini}
        >
          {mini ? (
            <IconLayoutSidebarLeftExpand size={30} />
          ) : (
            <IconLayoutSidebarLeftCollapseFilled size={30} />
          )}
        </div>
      </FlexCustom>

      <nav className="flex flex-1 flex-col gap-4 m-7">{renderizarSecoes()}</nav>

      <div className="flex m-7">
        <ToggleTheme />
      </div>
    </aside>
  );
}
