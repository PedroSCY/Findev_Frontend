import Cabecalho from "./Cabecalho";

interface PaginaProps {
  titulo?: string;
  subtitulo?: string;
  children?: any;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col w-full">
      <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
      {props.children}
    </div>
  );
}
