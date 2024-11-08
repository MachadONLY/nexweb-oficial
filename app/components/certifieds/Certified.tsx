"use client";

import Image from "next/image";
import React from "react";
import projects from "../../../public/projects.svg";

const Certified: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50">
      <div className="max-w-[1280px] mx-auto h-full p-6">
        <div className="py-12 gap-20 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl text-zinc-800 font-bold">
              Conheça Mais Sobre Nossos Últimos{" "}
              <span className="text-pink-500">Projetos</span>
            </h1>
          </div>

          {/* Container para o conteúdo principal */}
          <div className="w-full h-[600px] bg-gradient-to-br shadow-xl from-zinc-100 via-zinc-100 to-pink-200 rounded-xl flex items-center justify-between p-16 gap-24">
            {/* Seção de texto */}
            <div className="flex flex-col justify-between w-1/2 h-full">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl text-zinc-900 font-black">
                  Últimos Projetos
                </h1>
                <p className="font-light text-lg text-zinc-700 text-justify">
                  Clique e cheque nossos últimos projetos feitos com grandes
                  parceiros e transformações digitais incríveis que a NexWeb
                  realizou.
                </p>
              </div>

              {/* Botão para acessar projetos */}
              <button className="py-4 w-[200px]  text-pink-600 border-2  border-pink-600 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition duration-300">
                Ver Projetos
              </button>
            </div>

            {/* Seção de imagem */}
            <div className="w-1/2 h-full flex items-center justify-center">
              <Image src={projects} alt="" width={900} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
