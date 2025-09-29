import FlexCustom from "./FlexCustom";
import Titulo from "./Titulo";

interface CabecalhoProps {
  titulo?: string;
  subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <FlexCustom centerCross className="justify-start">
      {props.titulo && (
        <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      )}
    </FlexCustom>
  );
}
