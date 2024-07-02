import Image from "next/image";
import { inter, island, londrina } from "@/app/_lib/fonts";
import perfil from "@/app/_assets/perfil.png";

export default function Sobre() {
  return (
    <main className="flex flex-1 flex-col relative md:px-32 px-8 xl:items-baseline items-center">
      <h1
        className={`text-4xl ${londrina.className} font-lg font-black xl:text-baseline text-center md:mt-12 mt-0 mb-4`}
      >
        Prazer, sou <span className="text-amarelo">Sandro Luz</span>
      </h1>
      <section
        className={`flex flex-col gap-8 max-w-[711px] ${inter.className} font-light text-md text-cinza-200 xl:text-start text-center`}
      >
        <p>
          Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se
          imprime na pele. Com mais de 10 anos de experiência no mundo da
          tatuagem, dedico-me a transformar visões e emoções em arte corporal
          que expressa quem você é e o que você ama.
        </p>
        <p>
          Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço
          atentamente os desejos e as histórias de meus clientes para que cada
          peça seja única e pessoal. Especializo-me em vários estilos, desde o
          delicado traço fino até composições mais robustas e coloridas,
          garantindo que cada design não só atenda, mas supere as expectativas.
        </p>
        <p>
          Além da dedicação à arte, a segurança e o conforto são prioridades no
          meu estúdio. Utilizo apenas equipamentos esterilizados e de alta
          qualidade, e sou rigoroso quanto aos protocolos de higiene e
          segurança, garantindo uma experiência segura e confortável para todos.
        </p>
        <p>
          Visite meu estúdio e veja como a arte pode se manifestar em sua pele.
          Estou aqui para ajudá-lo a contar sua história de uma maneira única e
          eterna. Agende sua consulta e vamos juntos criar algo extraordinário!
        </p>
        <span
          className={`${island.className} text-5xl mb-4 xl:text-baseline text-center`}
        >
          Sandro Luz
        </span>
      </section>
      <Image
        src={perfil}
        alt="Imagem de Sandro Luz"
        className="xl:absolute flex md:w-96 w-48 -bottom-[60px] right-32"
      />
    </main>
  );
}
