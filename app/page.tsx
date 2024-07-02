import Image from "next/image";

import { londrina } from "./_lib/fonts";
import perfil from "@/app/_assets/perfil.png";

export default function Home() {
  return (
    <main className="flex flex-1 relative w-screen items-center md:px-32 px-8 overflow-hidden">
      <h1
        className={`absolute left-12 top-24 -z-10 text-[400px] ${londrina.className} font-black text-cinza-700 leading-none tracking-wide xl:block hidden`}
      >
        TATTOO
      </h1>
      <div className="flex flex-col xl:text-[80px] text-[48px] z-10 font-black font-inter leading-none tracking-tight">
        <h2 className="text-cinza-300">INSPIRE-SE</h2>
        <h2 className="text-cinza-300">EXPRESSE-SE</h2>
        <h2 className="text-amarelo">TATUE-SE</h2>
      </div>
      <Image
        src={perfil}
        alt="Imagem de Sandro Luz"
        className="absolute xl:w-[350px] w-80 xl:-bottom-[60px] -bottom-[150px] z-1 xl:right-32 right-[-6rem] grayscale"
      />
    </main>
  );
}
