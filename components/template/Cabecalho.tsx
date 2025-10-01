import { ToggleTheme } from "../ui/custom/ToggleTheme";
import FlexCustom from "./FlexCustom";
import Titulo from "./Titulo";

interface CabecalhoProps {
  titulo?: string;
  subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <FlexCustom centerCross className="justify-start p-2">
      {props.titulo && (
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      )}
      <div className="position absolute right-4 top-4">
        <ToggleTheme />
      </div>
    </FlexCustom>
  );
}
