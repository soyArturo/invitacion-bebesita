import { Calendar1, Gift } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import boy from "../assets/boy.png";
import boySelect from "../assets/boySelect.png";
import girl from "../assets/girl.png";
import girlSelect from "../assets/girlSelect.png";
import hojas from "../assets/hojas.png";
const Invitacion = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const finalSectionRef = useRef<HTMLDivElement>(null);
  const [showFinalSection, setShowFinalSection] = useState(false);

  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectedGender = (gender: string) => {
    setSelectedGender(gender);
    // Solo hace scroll si el género es válido
    if (gender === "boy" || gender === "girl") {
      scrollToNext();
    }
  };

  useEffect(() => {
    if (selectedGender === null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup por si desmonta
    };
  }, [selectedGender]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFinalSection(true);
        }
      },
      { threshold: 0.4 }
    );

    const section = finalSectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      <section
        className="w-full h-full flex flex-col justify-start items-center space-y-2"
        style={{
          backgroundColor: "#edeceb",
        }}
      >
        <img src={hojas} alt="" className="absolute" />
        <motion.div
          className="pt-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p
            className="text-4xl font-bold lobster text-center"
            style={{
              color: "#b88b61",
            }}
          >
            ¿Team Niña o Team Niño? <br />
            <span className="text-3xl font-normal lobster text-center">
              ¡Tu corazón que dice!
            </span>
          </p>
        </motion.div>

        <div className="flex">
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onClick={() => handleSelectedGender("girl")}
          >
            <img src={girl} className="size-50" />
            <p className="text-3xl font-bold" style={{ color: "#af8aa1" }}>
              Niña
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            onClick={() => handleSelectedGender("boy")}
          >
            <img src={boy} className="size-50" />
            <p className="text-3xl font-bold" style={{ color: "#6b7d9f" }}>
              Niño
            </p>
          </motion.div>
        </div>
      </section>
      <section
        ref={nextSectionRef}
        className="w-full h-full flex flex-col justify-start items-center"
        style={{
          backgroundColor: "#edeceb",
        }}
      >
        <img src={hojas} alt="" className="absolute" />
        <motion.p
          className="text-center text-xl px-4 pt-25 absolute font-bold lobster text-[#b88b61]"
          initial={{ opacity: 0, y: 20 }}
          animate={selectedGender ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hola! Mis papis están muy emocionados y con mucho cariño han preparado
          esta revelación. <br />
          Les haría muy felices que estés con nosotros para descubrir si llegará
          {selectedGender === "girl"
            ? "una princesa 🎀"
            : selectedGender === "boy"
            ? "un campeón 🚀"
            : "sorpresa 💝"}
          .
        </motion.p>
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={selectedGender ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          src={
            selectedGender === "girl"
              ? girlSelect
              : selectedGender === "boy"
              ? boySelect
              : ""
          }
          className="scale-50 absolute pt-25"
          alt=""
        />
      </section>
      <section
        ref={finalSectionRef}
        className="w-full h-full flex flex-col justify-start items-center space-y-3 relative"
        style={{
          backgroundColor: "#edeceb",
        }}
      >
        <div className="flex flex-col justify-center items-center space-y-4 py-3">
          <motion.p
            className="text-2xl font-bold lobster text-center pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={showFinalSection ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ¡Te esperamos!
          </motion.p>

          <motion.p
            className="text-xl text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={showFinalSection ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Calendar1 className="inline mr-2 size-15 text-[#60432a]" /> <br />
            <span className="font-bold">Domingo 20 de Julio a la 1:30 PM</span>
          </motion.p>

          <motion.p
            className="text-xl text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={showFinalSection ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="font-bold">Jardín Los Tulipanes</span>
          </motion.p>

          <motion.a
            className="bg-[#b88b61] text-lg text-white px-4 py-2 rounded-lg"
            href="https://maps.app.goo.gl/VHctJ9H4TUXQa2Bq8"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={showFinalSection ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Cómo llegar
          </motion.a>

          <motion.p
            className="text-lg text-center px-4 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={showFinalSection ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Gift className="inline mr-2 size-15 text-[#60432a]" /> <br />
            ¿Seré{" "}
            {selectedGender === "girl"
              ? "una dulce princesa 🎀"
              : "un valiente campeón 🚀"}
            ?<br /> No olvides traer{" "}
            {selectedGender === "girl" ? "toallitas húmedas" : "pañales"} para
            que la fiesta sea aún más divertida. 🎉
          </motion.p>
          <motion.div
            className="flex flex-col justify-center items-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={showFinalSection ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-lg text-center px-4 font-bold">
              No olvides confirmar tu asistencia, <br /> ¡así mis papis podrán
              prepararlo todo con mucho amor! 💖
            </p>
            <a
              href="https://wa.me/526645701664?text=¡Hola!%20Confirmo%20mi%20asistencia."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b88b61] text-lg text-white px-4 py-2 rounded-lg"
            >
              Confirmar Asistencia
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Invitacion;
