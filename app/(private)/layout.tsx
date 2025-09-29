import Pagina from "@/components/template/Pagina";
import { MenuProvider } from "@/data/context/MenuProvider";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <Pagina>
        <main>{props.children}</main>
      </Pagina>
    </MenuProvider>
  );
}
