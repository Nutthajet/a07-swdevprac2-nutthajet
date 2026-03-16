import Link from "next/link";

export default function TopMenuItem({title, pageRef} : {title: React.ReactNode, pageRef:string}){
    return (
        <Link href={pageRef}
        className="flex items-center justify-center w-[120px] bg-[#dcdcdc] text-[#6b4c1a]
        text-sm border-l border-[#b3b3b3] ">
        {title}
        </Link>
    );
}