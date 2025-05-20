"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NosotrosSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="w-full relative overflow-hidden bg-white">
      {/* HERO CON VIDEO Y CURVA */}
      <div className="relative h-[90vh] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/videos/fondoSkin.mp4" type="video/mp4" />
        </video>

        {/* CURVA SVG EN BASE A LA IMAGEN */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent"></div>

        {/* TEXTO Y PRODUCTO */}
        <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center text-white px-6">
          <div className="text-center md:text-left max-w-lg space-y-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-justify">
              SKINGEN Colombia, desrrolla soluciones dermatológicas en medicina
              regenerativa que ofrece una gama de soluciones bioestimulantes
              avanzadas para restauración celular.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 md:ml-12">
            <Image
              src="https://res.cloudinary.com/dli9xljyz/image/upload/e_background_removal/f_png/v1745960036/WhatsApp_Image_2025-04-29_at_14.06.22_lfiezu.jpg"
              alt="Producto"
              width={350}
              height={450}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* SECCIÓN DE INTRODUCCIÓN */}
      <div className="text-center max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h3 className="text-2xl text-[#692324] font-bold">
          EXPERTOS EN MEDICINA REGENERATIVA
        </h3>
        <p className="text-md">Tecnología Premium</p>
        <p className="text-gray-700 ">
          Somos reconocidos en el uso tecnología de medicina regenerativa en el
          campo de la medicina estética. Con más de 15 años de experiencia,
          SKINGEN se especializa en el desarrollo, la fabricación y la
          distribución productos novedosos en el campo de la medicina
          Dermatológica y Estética.
        </p>

        <p className="text-gray-700">
          Nuestra promesa de valor es la innovación en tecnología y productos
          para preservar la estética, la belleza y la salud.
        </p>
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          {"Conoce Más"}
        </button>
      </div>

      {/* CONTENIDO ADICIONAL */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 pb-12 text-center text-gray-700"
          >
            <p>
              Nuestro equipo se esfuerza por ofrecer soluciones dermatológicas
              basadas en investigación, tecnología avanzada y seguridad clínica.
              Gracias a una filosofía de innovación constante, ayudamos a
              profesionales médicos a mejorar la calidad de vida de sus
              pacientes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 pb-12 text-center text-gray-700"
          >
            <h2 className="text-2xl font-bold text-[#692324] py-6">
              SOBRE NOSOTROS
            </h2>
            <p className="text-justify">
              SKINGEN Colombia, filial de Skingen International, fue fundada en
              el año 2015, cuenta con un portafolio de productos importados, de
              países de referencia como Inglaterra, Francia, y Estados Unidos.
              <br />
              <br />
              SKINGEN Colombia, se caracteriza por importar productos que
              demuestran un proceso de desarrollo e innovación. Mantendrá a
              través del tiempo, su compromiso por garantizar la calidad de sus
              productos, un excelente servicio y su propósito de entregar a la
              humanidad aquello que necesita para el bienestar.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 pb-12 text-center text-gray-700"
          >
            <h2 className="text-2xl font-bold text-[#692324] py-6">
              Nuestros productos novedosos, seguros y altamente efectivos se
              enfocan en afecciones dermatológicas y estéticas comunes.
            </h2>
            <p className="text-justify">
              SkinGenuity incorpora dos tecnologías ganadoras del premio Nobel.
              <br />
              <br />
              Tras años de investigación y pruebas, SkinGenuity ha perfeccionado
              el uso de factores de crecimiento humanos bioingeniería para
              regenerar la piel, el cabello, las pestañas y la salud íntima de
              la mujer. Descubra la diferencia que puede marcar en su vida, de
              forma segura y en la privacidad de su hogar. Médicos estéticos,
              cirujanos y dermatólogos a nivel mundial confían en la tecnología
              SKINGENUITY. Esta tecnología garantiza resultados efectivos en los
              tratamientos focalizados por indicación. Cada línea de producto
              está diseñada en función de las necesidades específicas de cada
              patología a tratar.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 pb-12 text-center text-gray-700"
          >
            <h2 className="text-2xl font-bold text-[#692324] py-6">
              PENSAMIENTO ESTRATEGICO SKINGEN COLOMBIA
            </h2>
            <p className="text-justify">
              Misión: Desarrollar, fabricar y comercializar tecnologías y
              productos novedosos disruptivos en el campo de la medicina
              dermatológica y estética, utilizando en nuestros productos
              ingredientes clínicamente probados.
            </p>
            <p className="text-justify">
              Visión: ser referencia ofreciendo los mejores productos de su
              clare, enfocados en nuestra audiencia altamente altamente
              especializada de médicos dermatólogos, cirujanos plásticos y
              médicos estéticos. Soportados por un equipo sólido conformados por
              nuestros empleados y socios comerciales.
            </p>
            <h2 className="text-3xl font-bold text-center mb-8 mt-8">
              Nuestros Valores
            </h2>

            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>
                <strong>Enfoque al médico y paciente:</strong> Colocamos al
                profesional de la salud y al paciente en el centro de todas
                nuestras decisiones.
              </li>
              <li>
                <strong>Innovación en tecnologías y productos:</strong> Buscamos
                constantemente soluciones innovadoras que transformen la
                estética y la medicina regenerativa.
              </li>
              <li>
                <strong>
                  Bienestar y respeto hacia nuestra gente y socios:
                </strong>{" "}
                Promovemos un entorno de trabajo positivo, ético y colaborativo.
              </li>
              <li>
                <strong>Cumplimiento y ética de leyes y legislaciones:</strong>{" "}
                Actuamos con integridad, siguiendo las normativas legales y
                éticas de cada región.
              </li>
              <li>
                <strong>Resultados y beneficios para los accionistas:</strong>{" "}
                Nos orientamos a generar valor sostenible y crecimiento a largo
                plazo.
              </li>
            </ul>
            <p className="text-justify mt-8">
            Deka Medika S.A.S. está comprometida con alcanzar la plena satisfacción de nuestros clientes, mediante el ofrecimiento de la tecnología médica mas avanzada, respaldada por las mejores marcas mundiales; así como el mejoramiento continuo de nuestros procesos, un excelente servicio y contando con profesionales.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
