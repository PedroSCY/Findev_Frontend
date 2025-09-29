import { IconCode } from "@tabler/icons-react";
import Link from "next/link";

interface MenuItemProps {
    icone?: any;
    titulo: string;
    url: string;
    mini?: boolean;
    selecionado?: boolean | undefined
}

export default function MenuItem(props: MenuItemProps) {
    const { icone, titulo, url, mini, selecionado } = props;

    return (
        <Link
            id={titulo}
            href={url}
            className={`
            flex items-center gap-2 rounded-md px-3 py-2
            ${ selecionado && "text-purple-70"}
        `}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
        </Link>
    );
}
