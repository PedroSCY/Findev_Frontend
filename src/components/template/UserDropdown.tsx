import {
  IconDotsVertical,
  IconLogout,
  IconUserCircle,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

interface UserDropdownProps {
  mini?: boolean;
}

export default function UserDropdown({ mini }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="flex w-full">
        <div className="flex items-center gap-2 rounded-xs px-3 py-2 select-none hover:bg-sidebar-accent hover:text-sidebar-foreground  data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-foreground">
          <Avatar className="w-10 h-10 rounded-xs grayscale">
            <AvatarFallback className="rounded-xs">FD</AvatarFallback>
          </Avatar>
          {!mini && (
            <>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Usuario</span>
                <span className="text-muted-foreground truncate text-xs">
                  adminstrador
                </span>
              </div>
              <IconDotsVertical className="ml-auto size-4" />
            </>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="right"
        align="end"
        sideOffset={4}
        className="min-w-56 rounded-xs"
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 rounded-xs px-1 py-1.5 select-none text-left text-sm">
            <Avatar className="w-10 h-10 rounded-xs grayscale">
              <AvatarFallback className="rounded-xs">FD</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Usuario</span>
              <span className="text-muted-foreground truncate text-xs">
                adminstrador
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="rounded-xs">
            <IconUserCircle />
            Conta
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem className="rounded-xs">
          <IconUserCircle />
          Notificações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href="/">
          <DropdownMenuItem className="rounded-xs">
            <IconLogout />
            Terminar Sessão
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
