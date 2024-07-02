import { londrina } from "../_lib/fonts";

export default function Servicos() {
  const services = [
    {
      name: "Tatuagens Personalizadas",
      content:
        "Oferecemos a criação de tatuagens personalizadas, onde cada design é desenvolvido em colaboração direta com o cliente. A partir de uma ideia inicial, trabalhamos juntos para criar uma obra de arte única que reflete sua personalidade e sentimentos.",
    },
    {
      name: "Cover-Up",
      content:
        "Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte. Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajudá-lo a reformulá-la com um design criativo e original.",
    },
    {
      name: "Restauração",
      content:
        "Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que ela volte a ter a aparência de quando foi feita pela primeira vez.",
    },
    {
      name: "Henna",
      content:
        "Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que duram de algumas semanas a alguns meses.",
    },
  ];

  return (
    <main className="md:text-start text-center min-h-fit">
      <h1
        className={`text-4xl ${londrina.className} text-amarelo font-lg font-black md:px-32 px-8 md:mt-12 mt-0`}
      >
        Serviços
      </h1>
      <section className="flex md:flex-row flex-col py-12 gap-16 md:px-32 px-12">
        {services.map((service) => (
          <article>
            <h2 className={`${londrina.className} text-branco text-xl`}>
              {service.name}
            </h2>
            <p className="text-cinza-300">{service.content}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
