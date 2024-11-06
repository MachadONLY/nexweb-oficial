// components/DesafioEmpresa.tsx

import React from "react";
import DesafioCard from "../DesafioCard/DesafioCard";
import { FaChartLine, FaBullseye, FaLaptop } from "react-icons/fa"; // Ícones do pacote react-icons

const DesafioEmpresa: React.FC = () => {
  return (
    <section className="flex flex-col gap-20 items-center h-[700px] justify-between p-20 bg-zinc-50">
      <h2 className="text-5xl font-extrabold text-zinc-800">
        QUAL É O DESAFIO ATUAL DE SUA EMPRESA?
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <DesafioCard
          icon={FaChartLine}
          title="AUMENTAR AS VENDAS"
          description="Captar mais leads e aumentar as vendas."
        />
        <DesafioCard
          icon={FaBullseye}
          title="VISIBILIDADE DE MARCA"
          description="Tornar minha empresa mais conhecida em meu segmento."
        />
        <DesafioCard
          icon={FaLaptop}
          title="NOVO SITE OU LOJA VIRTUAL"
          description="Oferecer uma nova e melhor experiência aos visitantes."
        />
      </div>
    </section>
  );
};

export default DesafioEmpresa;
