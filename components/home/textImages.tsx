import Image from "next/image";

export default function TextWithImages() {
    return (
        <div className="flex flex-wrap justify-center items-center text-black text-3xl md:text-5xl font-bold gap-4 leading-snug">
            <span>Innovación</span>
            <div className="relative w-[90px] h-[60px] md:w-[180px] md:h-[80px] rounded-full overflow-hidden">
                <Image 
                    src="/images/1.jpg" 
                    alt="Look good" 
                    fill 
                    className="object-cover"
                />
            </div>
            
            <span className="w-full md:w-auto text-center md:text-left">Tecnologia</span>
            <div className="relative w-[90px] h-[60px] md:w-[180px] md:h-[80px] rounded-full overflow-hidden">
                <Image 
                    src="/images/2.jpg" 
                    alt="Glowy skin" 
                    fill 
                    className="object-cover"
                />
            </div>
            <span>y Calidad</span>
            <div className="relative w-[90px] h-[60px] md:w-[180px] md:h-[80px] rounded-full overflow-hidden">
                <Image 
                    src="/images/3.jpg" 
                    alt="Healthy skin" 
                    fill 
                    className="object-cover"
                />
            </div>
        </div>
    );
}
