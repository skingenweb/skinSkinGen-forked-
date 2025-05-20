import Image from "next/image";

const productLines = [
    { name: "Dermafill", icon: "/images/productosLogos/LOGODERMAFILL.svg", link: "/productos/dermafill" },
    { name: "Manificare", icon: "/images/productosLogos/LOGOMANIFICARE.svg", link: "/manificare" },
    { name: "Cicatrices", icon: "/images/productosLogos/LOGOSCARMD.svg" ,link: "/scarmd"},
    { name: "Pestañas", icon: "/images/productosLogos/LOGOXXTRALASH.svg" , link: "/xxtralash"},
    { name: "Hematomas", icon: "/images/productosLogos/LOGOHEMATIX.svg" , link: "/hematix" },
    { name: "Dermadol", icon: "/images/productosLogos/LOGODERMADOL.svg" , link: "/dermadol" },
    { name: "Xtaz", icon: "/images/productosLogos/LOGOX-TAZ.svg" , link: "/xtaz"},
    { name: "Skingenuity", icon: "/images/productosLogos/LOGOSKINGENU.svg" , link: "/skingenuity" },
];

export default function ProductLinesGrid() {
    return (
        <div className="w-full h-100 mx-auto">
            <h2 className="text-center text-6xl mb-5 text-black font-poppins">Nuestras Marcas</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {productLines.map((line, index) => (
                    <button
                        onClick={() => window.location.href = line.link}
                        key={index}
                        className="relative bg-white/10 backdrop-blur-lg  text-black flex items-center justify-center  rounded-lg h-[200px] p-2 shadow-xl hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out hover:bg-white/20 hover:text-white ring-1 ring-white/30"
                    >
                        <Image src={line.icon} alt={line.name} width={100} height={100} className="w-full  object-cover p-4 filter grayscale hover:filter-none transition duration-300" />
                    </button>
                ))}
            </div>
        </div>
    );
}