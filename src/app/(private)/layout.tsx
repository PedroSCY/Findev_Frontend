import Conteudo from "@/components/template/Conteudo";
import MenuPrincipal from "@/components/template/Menu/MenuPrincipal";
import { MenuProvider } from "@/context/MenuProvider";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <div className="flex h-screen w-screen">
        <MenuPrincipal />
        <Conteudo>
          <main className="flex flex-1 max-w-7xl">{props.children}</main>
        </Conteudo>
      </div>
    </MenuProvider>
  );
}
