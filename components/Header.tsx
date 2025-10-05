"use client"

import Notifications from "@/components/Notifications";
import { LeftArrow } from "./Icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-gradient-to-t to-[#8200FE] from-[#D74B18]  ">
        {/* Conteúdo */}
        <div className="  px-4 sm:px-0 max-w-3xl">
          <h1 className="text-3xl  sm:text-[52px]  font-bold  bg-clip-text text-transparent bg-white">
            Seu proprio gateway de pagamentos, do seu jeito
          </h1>
        </div>

          <p className="mt-8 text-white text-base max-w-4xl p-10 sm:p-0  sm:text-[20px] font-extralight ">
            Com a nossa tecnologia WiteLabel, você lança seu próprio gateway de pagamentos, pronto para escalar, com foco em experiência do usúario e personalização total
          </p>


        <div className="hidden 2xl:block">
          <Notifications />
        </div>
        <div className="mt-8 gap-5 flex">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-2 sm:p-3.5 rounded-[52px] cursor-pointer flex gap-5 items-center">
            <p className="text-[#D74B18] font-semibold text-base ml-2">Conhecer solução</p>
            <div className="bg-[#D74B18] flex items-cente p-2 sm:px-6 rounded-[9000px] py-2.5"><LeftArrow /></div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#FFFFFF80] cursor-pointer py-3.5 sm:px-8 rounded-[52px] p-2 text-white font-medium text-base gap-5">Saiba mais</motion.button>
        </div>
      </div>
    </>
  );
}