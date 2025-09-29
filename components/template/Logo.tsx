import Link from "next/link";
import FlexCustom from "./FlexCustom";

interface LogoProps {
    subtitulo?: string;
    grande?: boolean;
    col?: boolean;
    className?: string;
}

export default function Logo(props: LogoProps) {

    return (
        <Link href="/" className="cursor-pointer">
            <FlexCustom col={props.col} centerCross className={props.className}>
                <FlexCustom col centerCross gap={0}>
                    <div
                        className={`
                        ${props.grande ? "text-4xl" : "text-2xl"}
                        font-black
                    `}
                    >
                        FinDev
                    </div>
                    {props.subtitulo && <div className=" text-sm">{props.subtitulo}</div>}
                </FlexCustom>
            </FlexCustom>
        </Link>
    );
}
