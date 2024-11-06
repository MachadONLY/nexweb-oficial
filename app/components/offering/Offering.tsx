import React from "react";

// Define o array de serviços com TypeScript para maior segurança de tipos
type Service = {
  title: string;
  description: string;
  backgroundImage: string;
};

const services: Service[] = [
  {
    title: "Social Media Marketing",
    description:
      "Engage and expand your audience across social media platforms with our tailored marketing strategies. From content creation to ad campaigns, we connect you with your target demographic, leveraging data insights to craft compelling stories and foster meaningful interactions.",
    backgroundImage: '/instagram.svg',
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize your online presence with our comprehensive digital marketing solutions. From search engine optimization to pay-per-click advertising, we develop strategies tailored to your business needs, ensuring you reach your target audience and achieve measurable results.",
    backgroundImage: '/digital.svg',
  },
  {
    title: "Web Design & Development",
    description:
      "Create a stunning online presence with our web design and development services. Our team crafts responsive, user-friendly websites that reflect your brand identity and provide an exceptional user experience, helping you stand out in the digital landscape.",
    backgroundImage: '/webdesign.svg',
  },
  {
    title: "SEO",
    description:
      "We optimize your site's structure, content, and keywords to rank higher on search engine results pages. Our SEO services include keyword research, on-page and off-page optimization, and performance tracking to increase your visibility and drive organic traffic.",
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

              <div className="flex flex-col justify-between items-start gap-3 z-10">
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
