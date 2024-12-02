import React from "react";
import { motion } from "framer-motion";

const WelcomeComponente = () => {
  return (
    <div className="w-full h-screen lg:h-full bg-[#F4EAD1] col-span-1  sm:col-span-3 relative  flex items-center justify-center">
      <img
        src="/images/bg.png"
        className="w-full h-full object-none absolute"
        alt="logo"
      />{" "}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
        className="flex"
      >
        <div className="bg-[#FFFEFE] border-2 border-dashed border-[#A20A0A] w-full max-w-[440px] py-[40px] rounded-3xl mx-[10px] relative">
          <div className="flex flex-col gap-4 p-4">
            {" "}
            <p className="text-center text-[#A20A0A] text-[42px] font-bold font-geist-sans leading-[40px]">
              Calendario de Adviento
            </p>
            {/* <p className="text-center text-[#A20A0A] text-[24px] font-semibold font-geist-sans text-nowrap leading-[30px]">
              A Countdown to <br /> Christmas Eve
            </p> */}
            <p className="text-center text-[#4C8E8B] text-[16px] font-semibold font-belleza leading-[24px]">
              Barbara, este calendario de adviento lo creé pensando en ti, en
              cada sonrisa que me das y en lo afortunado que me siento de
              tenerte a mi lado. Cada día es una pequeña sorpresa para
              recordarte cuánto te quiero y lo agradecido que estoy por
              compartir este diciembre contigo. Espero que cada regalo te haga
              sentir lo mismo que siento por ti, porque no hay nada más especial
              que ver tu felicidad. ¡Feliz diciembre, mi amor!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeComponente;
