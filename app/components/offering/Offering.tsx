import React from "react";

// Define o array de serviços com TypeScript para maior segurança de tipos
type Service = {
  title: string;
  description: string;
  backgroundImage: string;
};

const services: Service[] = [
  {
    title: "Marketing de Mídias Sociais",
    description:
      "Engaje e expanda seu público nas plataformas de mídias sociais com nossas estratégias de marketing personalizadas. Desde criação de conteúdo até campanhas de anúncios, conectamos você com seu público-alvo, aproveitando insights de dados para criar histórias envolventes e fomentar interações significativas.",
    backgroundImage: '/instagram.svg',
  },
  {
    title: "Marketing Digital",
    description:
      "Maximize sua presença online com nossas soluções completas de marketing digital. Desde otimização para motores de busca até publicidade paga por clique, desenvolvemos estratégias personalizadas para as necessidades do seu negócio, garantindo que você atinja seu público-alvo e alcance resultados mensuráveis.",
    backgroundImage: '/digital.svg',
  },
  {
    title: "Design e Desenvolvimento de Sites",
    description:
      "Crie uma presença online impressionante com nossos serviços de design e desenvolvimento de sites. Nossa equipe cria sites responsivos e fáceis de usar que refletem a identidade da sua marca e proporcionam uma experiência excepcional ao usuário, ajudando você a se destacar no cenário digital.",
    backgroundImage: '/webdesign.svg',
  },
  {
    title: "SEO",
    description:
      "Otimizar a estrutura, conteúdo e palavras-chave do seu site para obter uma classificação mais alta nas páginas de resultados dos motores de busca. Nossos serviços de SEO incluem pesquisa de palavras-chave, otimização on-page e off-page, e acompanhamento de desempenho para aumentar sua visibilidade e gerar tráfego orgânico.",
    backgroundImage: '/google.svg',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full min-h-screen text-black p-8 py-20 bg-zinc-100">
      <div className="max-w-[1520px] mx-auto">
        <h1 className="text-3xl font-semibold text-start mb-20 px-6">O Que Estamos Oferecendo</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-end p-8 rounded-3xl w-full h-[350px] shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden group"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center right 35%',
              }}
            >
              {/* Overlay escuro para contraste */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-3xl pointer-events-none"></div>

              <div className="flex flex-col justify-between items-start hover:gap-3 z-10">
                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                <p className="text-white text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <button className="text-sky-200 font-medium uppercase text-sm hover:underline">
                  Leia Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
