import FlexCustom from "./FlexCustom";

interface ConteudoProps {
    children?: any
}

export default function Conteudo(props:ConteudoProps) {
    return (
        <FlexCustom col center className="flex-1 text-gray-200">
            {props.children}
        </FlexCustom>
    );
}
