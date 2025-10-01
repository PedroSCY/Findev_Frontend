import { memo, ReactNode } from "react";
import FlexCustom from "./FlexCustom";
import { Loader2 } from "lucide-react";
import Cabecalho from "./Cabecalho";

interface ConteudoProps {
  titulo?: string;
  subtitulo?: string;
  children?: ReactNode;
}

function Conteudo(props: ConteudoProps) {
  return (
    <FlexCustom col className="flex-1 p-7 ">
      <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
      {props.children}
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
