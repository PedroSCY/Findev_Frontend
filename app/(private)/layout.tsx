import Conteudo from "@/components/template/Conteudo";
import MenuPrincipal from "@/components/template/Menu/MenuPrincipal";
import { MenuProvider } from "@/data/context/MenuProvider";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <div className="flex h-screen w-screen">
        <MenuPrincipal />
        <Conteudo>
          <main>{props.children}</main>
        </Conteudo>
      </div>
    </MenuProvider>
  );
}
