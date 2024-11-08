"use client";

import React from "react";
import Image from "next/image";
import background from "../../../public/background.svg";

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-100">
      <div className="max-w-[1280px] gap-8 h-full mx-auto py-40 flex flex-col items-center justify-center bg-zinc-100 text-center">
        <div>
          <h1 className="text-7xl w-full font-black leading-tight text-zinc-950">
            Transforme Seu Negócio Com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Soluções Digitais
            </span>
          </h1>
          <p className="text-xl font-semibold  leading-relaxed text-gray-500 mt-4">
            Na NexWeb, Criamos sites modernos que levam sua empresa para o mundo digital. Nossas soluções são projetadas para aumentar sua presença online e engajar seu público.
          </p>
          <button className="mt-8 px-8 py-5 bg-blue-500 text-white  text-base  rounded-full hover:bg-blue-700 transition duration-200">
            Inicie sua Jornada Digital
          </button>
        </div>

        {/* Área do vídeo */}
        <div className="mt-12 w-full h-full bg-black rounded-lg shadow-2xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            src="/Website.mp4"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
