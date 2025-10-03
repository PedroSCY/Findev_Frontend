import { Button } from "@/components/ui/button";
import CardModal from "@/components/ui/custom/CardModal";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-screen bg-background justify-center items-center">
      <CardModal title="Findev" classname="bg-card">
        <div className="flex flex-col gap-4 ">
          <p className="font-bold">Olá, Bem vindo ao Findev!</p>
          <p>
            Ainda não temos a opção de login, acesse o sistema pelo botão
            abaixo! 👇
          </p>
            <Link href={"/home"}>
              <Button className="w-full rounded-xs" size={"lg"}>
                Acessar
              </Button>
            </Link>
        </div>
      </CardModal>
    </section>
  );
}
