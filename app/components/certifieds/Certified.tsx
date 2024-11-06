"use client";

import React, { useState } from "react";
import {
  FaRocket,
  FaHeadset,
  FaSmile,
  FaAward,
  FaNetworkWired,
  FaHandshake,
} from "react-icons/fa";

const CertifiedContent: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <div className="max-w-[1520px] w-full mx-auto px-4 text-white">
        {/* Cartões de Recursos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-72 text-center">
          {[
            {
              icon: FaRocket,
              title: "Histórico Comprovado",
              text: "Construímos uma reputação como um parceiro confiável e seguro para alcançar o sucesso nos negócios.",
              additionalText:
                "Nossa experiência nos permite impulsionar sua empresa de forma eficaz e adaptativa no mercado. Com um histórico sólido em entregar resultados consistentes, estamos preparados para enfrentar qualquer desafio do seu setor, garantindo que você se mantenha competitivo e bem-sucedido.",
            },
            {
              icon: FaNetworkWired,
              title: "Soluções Personalizadas",
              text: "Oferecemos soluções personalizadas para atender aos seus objetivos, público e setor específicos.",
              additionalText:
                "Nossas soluções são projetadas sob medida, levando em conta suas necessidades exclusivas. Trabalhamos lado a lado com sua equipe para desenvolver estratégias e implementar soluções tecnológicas que promovem eficiência, segurança e escalabilidade.",
            },
            {
              icon: FaHandshake,
              title: "Foco no Cliente",
              text: "O seu sucesso é nossa prioridade. Priorizamos entender os objetivos do seu negócio.",
              additionalText:
                "Nosso compromisso é construir relacionamentos de longo prazo com base na confiança e nos resultados. Oferecemos suporte contínuo e adaptamos nossas abordagens conforme seu negócio evolui, garantindo uma parceria duradoura e benéfica.",
            },
          ].map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative p-8 rounded-lg border border-gray-700 shadow-xl overflow-hidden transition-all duration-500 ${
                hoveredCard === index
                  ? "h-[430px] scale-105"
                  : "h-[250px] scale-100"
              }`}
              style={{
                transformOrigin: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-zinc-950 opacity-70 rounded-lg"></div>
              <div className="relative z-10">
                <item.icon className="text-5xl text-sky-300 mx-auto mb-4 drop-shadow-md" />
                <h4 className="text-2xl font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-zinc-400 ">{item.text}</p>
                {/* Texto adicional exibido ao hover */}
                <p
                  className={`text-zinc-400 font-light mt-4 transition-opacity duration-500 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.additionalText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ícones do Rodapé */}
        <div className="flex justify-center space-x-6 mt-12 transition-all duration-300">
          {[
            { icon: FaRocket, text: "Inovação Contínua" },
            { icon: FaHeadset, text: "Suporte Dedicado" },
            { icon: FaSmile, text: "Experiências Positivas com Clientes" },
            { icon: FaAward, text: "Compromisso com a Excelência" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-zinc-900 rounded-3xl py-4 px-6 text-white"
            >
              <item.icon className="text-sky-300" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertifiedContent;

