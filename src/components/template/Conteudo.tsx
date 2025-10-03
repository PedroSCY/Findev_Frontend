import { memo, ReactNode } from "react";
import FlexCustom from "./FlexCustom";
import { Loader2 } from "lucide-react";
import Cabecalho from "./Cabecalho";
import { ToggleTheme } from "../ui/custom/ToggleTheme";

interface ConteudoProps {
  titulo?: string;
  subtitulo?: string;
  children?: ReactNode;
}

function Conteudo(props: ConteudoProps) {
  return (
    <FlexCustom col className="flex-1 p-7 items-center overflow-y-auto">
       <div className="position absolute right-4 top-4 ">
        <ToggleTheme />
      </div>
      <div className="flex flex-1 container justify-center">{props.children}</div>
    </FlexCustom>
  );
}

// pra quanto tiver Login
const ContentSkeleton = () => {
  return (
    <FlexCustom col center className="flex-1">
      <Loader2 className="animate-spin size-8 text-foreground/50" />
    </FlexCustom>
  );
};

export default memo(Conteudo);
