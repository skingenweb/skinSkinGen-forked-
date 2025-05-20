import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6 md:px-12 border-t border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto gap-6">
        
        {/* IZQUIERDA - Enlaces de interés */}
        <div className="w-full md:w-1/3 text-left">
          <h3 className="text-sm font-bold mb-2">Enlaces de interés</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/terminos" className="hover:underline">Políticas</a></li>
            <li><a href="https://wa.me/573185797100" className="hover:underline">Contáctanos</a></li>
          </ul>
        </div>

        {/* CENTRO - Redes sociales y derechos */}
        <div className="w-full md:w-1/3 text-center">
          <div className="flex justify-center gap-4 mb-2">
            <a href="https://www.instagram.com/skingencol?igsh=dnZ6OTVnNGU3OGI1" className="hover:text-white"><IconBrandInstagram size={24} /></a>
            <a href="https://www.facebook.com/share/1ATxWAXR4e/?mibextid=qi2Omg" className="hover:text-white"><IconBrandFacebook size={24} /></a>
          </div>
          <p className="text-xs font-semibold">Colombia</p>
          <p className="text-xs mt-1">&copy; 2025 SkinGen. Todos los derechos reservados.</p>
        </div>

        {/* DERECHA - Logos */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-4">
          
          <Image
            src="/images/LogoBlanco.svg"
            alt="SkinGen Colombia"
            width={140}
            height={32}
          />
        </div>
      </div>
    </footer>
  );
}
