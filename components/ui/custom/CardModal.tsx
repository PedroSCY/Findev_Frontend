import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

interface CardModalProps {
  children?: ReactNode;
  title?: string;
  classname?: string;
}

const CardModal = ({ title, children, classname }: CardModalProps) => {
  return (
    <Card className={`text-white rounded-xl min-w-md w-96 sm:w-[28rem] lg:w-[32rem] ${classname}`}>
      <CardHeader className="bg-transparent">
        <CardTitle className="text-center text-lg font-semibold">
          {title && <p className="text-3xl font-bold">{title}</p>}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center  px-12 pb-4 ">
      <div className="w-full">{children}</div>
      </CardContent>
    </Card>
  );
};

export default CardModal;
