const testimonials = [
    "Este producto cambió mi piel por completo.",
    "Excelente calidad y resultados sorprendentes.",
    "Lo recomiendo al 100%, me ha funcionado muy bien.",
    "Increíble servicio al cliente y envío rápido.",
    "Definitivamente lo volvería a comprar.",
];

export const InfiniteCarousel = () => {
    return (
        <div className="overflow-hidden relative w-full  mt-4">
            <div className="flex space-x-6 animate-scroll">
                {testimonials.concat(testimonials).map((text, index) => (
                    <div
                        key={index}
                        className="bg-red-500 text-white p-4 rounded-lg min-w-[250px] shadow-md h-[140px]"
                    >
                        {text}
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }
      `}</style>
        </div>
    );
};
