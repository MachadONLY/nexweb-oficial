// components/DesafioCard.tsx

import React from "react";
import { IconType } from "react-icons";

interface DesafioCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const DesafioCard: React.FC<DesafioCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border shadow-xl rounded-lg bg-zinc-100 text-center w-[415px] h-[370px]">
      <div className="flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-pink-600">
        <Icon className="text-white text-5xl" /> 
      </div>
      <h3 className="text-2xl font-extrabold  text-zinc-800 mb-2">{title}</h3>
      <p className="text-zinc-600">{description}</p>
    </div>
  );
};

export default DesafioCard;
