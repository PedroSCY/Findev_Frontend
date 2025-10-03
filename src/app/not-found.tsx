import { Button } from "@/components/ui/button";
import CardModal from "@/components/ui/custom/CardModal";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="flex min-h-screen bg-background justify-center items-center">
      <CardModal classname="bg-card">
        <div className="flex flex-col gap-4 ">
          <div className="flex w-full font-black">
            <p className="flex flex-1 items-center justify-center text-5xl">404</p>
            <p className="text-4xl">Página não <br/> encontrada</p>
          </div>
          <p className="font-bold text-xl">
            A página que você está tentando acessar não existe.
          </p>
          <Link href={"/home"}>
            <Button className="rounded-xs w-full">
              Retornar para Home
            </Button>
          </Link>
        </div>
      </CardModal>
    </section>
  );
}

export default NotFound;
