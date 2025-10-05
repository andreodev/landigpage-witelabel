import Image from "next/image";
import leftCard from "../public/assets/frame.png"
import rightCard from "../public/assets/frame2.png"

export default function Notifications() {
    return (
        <>
            <div className="hidden md:flex md:flex-col absolute right-[-7.3%] top-[45%] ">
                <div className="flex items-center mb-[11px] bg-white border border-white/20 rounded-2xl h-[56px]  py-4 backdrop-blur-sm min-w-[260px]">
                    <div className="flex-1 text-left ml-[16px]"></div>
                </div>

                <div className="flex items-center rounded-lg backdrop-blur-sm min-w-[349px]">
                    <div className="flex-1 text-left ">
                        <Image
                            src={rightCard}
                            alt="Notification Icon"
                        />
                    </div>
                </div>
                <div className="flex w-full items-center gap-4 bg-[#611CE5] border absolute right-[-47.3%] top-[80%] border-white/20 rounded-[17.31px] h-[141px] backdrop-blur-sm min-w-[260px]"></div>
            </div>

            {/*left size */}
            <div className="hidden md:flex md:flex-col gap-4 absolute left-[-3px] top-[34%] ">
                   <Image
                        src={leftCard}
                       alt="Notification Icon"
                   />

                <div className="flex items-center gap-4  rounded-lg p-3 pr-4 backdrop-blur-sm min-w-[260px]">
                    <div className="flex-1 text-left">
                        <div className="flex w-full items-center gap-4 bg-[#5E03D4] absolute left-[-46.3%] top-[-1557%] rounded-2xl  py-6 h-[56px] backdrop-blur-sm min-w-[225px]"></div>
                    </div>
                </div>
            </div>
        </>
    );
}