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
            flex items-center gap-2 rounded-xs px-3 py-2 mx-1 select-none 
            ${!selecionado && "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}
            ${ selecionado && "bg-primary text-primary-foreground rounded-xs"}
        `}
        >
            {icone ?? <IconCode />}
            {!mini && titulo}
        </Link>
    );
}
