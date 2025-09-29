import { Button } from "@/components/ui/button";
import CardModal from "@/components/ui/custom/CardModal";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CardModal
        title="Findev"
        classname="bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/50"
      >
        <p className="font-bold">Olá, Bem vindo ao Findev!</p>
        <br />
        <p>
          Ainda não temos a opção de login, acesse o sistema pelo botão abaixo!
          👇
        </p>
        <br />
        <div className="flex justify-center w-full">
          <Button className="w-full" size={"lg"} variant={"secondary"}>
            Acessar
          </Button>
        </div>
      </CardModal>
    </div>
  );
}
