import { IconChevronDown, IconChevronRight, IconMinus, IconPlus } from "@tabler/icons-react";
import FlexCustom from "../FlexCustom";

interface MenuSecaoProps {
  titulo: string;
  mini: boolean;
  aberta: boolean;
  children: any;
  onClick?: () => void;
}

export default function MenuSecao(props: MenuSecaoProps) {
  const { titulo, mini, aberta } = props;

  return (
    <FlexCustom col gap={0} className={`${mini && "items-center"}`}>
      <span
        className={`select-none
                flex items-center justify-between
                text-sidebar-foreground uppercase font-bold p-2 rounded-xs ${
                  !mini &&
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }
                ${mini && "text-[11px]"} cursor-pointer
            `}
        onClick={() => props.onClick?.()}
      >
        {mini ? (
          titulo
        ) : (
          <>
            {titulo}
            {aberta ? <IconChevronDown size={15} /> : <IconChevronRight size={15} />}
          </>
        )}
      </span>

      {aberta && (
        <FlexCustom col gap={1.5} className="pt-2">
          {props.children}
        </FlexCustom>
      )}
    </FlexCustom>
  );
}
