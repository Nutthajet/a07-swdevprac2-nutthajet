import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu(){
    return (
        <div className="fixed top-0 left-0 h-[60px] w-full bg-white border-b border-[#b3b3b3] flex z-[999]">
            <div className="flex-grow"></div>

            <TopMenuItem 
                title={
                    <div className="text-center leading-tight">
                        <span className="text-xs font-normal text-[#725116]">Menu Item</span> 
                        <br />
                        <span className="text-base font-bold text-[#725116]">Booking</span>
                    </div>
                } 
                pageRef="/booking" 
            />

            <div className="relative flex items-center justify-center w-[150px] bg-[#fbf0df] border-l border-[#b3b3b3]">
                <Image 
                    src="/img/logo.png" 
                    alt="Logo" 
                    fill 
                    className="object-contain p-2" 
                />
            </div>

        </div>

    );
}