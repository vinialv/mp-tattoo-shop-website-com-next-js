import Link from "next/link";
import Image from "next/image";

import { londrina } from "../_lib/fonts";
import { FaWhatsapp } from "react-icons/fa";

import tatuador from "@/app/_assets/tattoo.png";

export default function Contato() {
  return (
    <main className="flex flex-row justify-between w-full xl:px-32 px-8">
      <section className="flex flex-col flex-1 xl:text-start text-center">
        <h1
          className={`text-4xl ${londrina.className} font-lg font-black xl:mt-12 mt-0 mb-4`}
        >
          Entre em <span className="text-amarelo">contato</span>
        </h1>
        <h3 className="py-12 text-cinza-200 xl:text-md text-sm">
          Clique no botão abaixo e envie uma mensagem.
          <br /> Vamos conversar!
        </h3>
        <Link
          href="https://wa.me/5511999999999?text=Ol%C3%A1%20Sandro%2C%20entrei%20pelo%20seu%20site%20e%20tenho%20interesse%20em%20realizar%20uma%20tatto%21%20Pode%20me%20dar%20mais%20detalhes%3F"
          target="_blank"
          className="flex xl:self-start self-center"
        >
          <button className="bg-cinza-400 w-fit p-4 rounded-md flex flex-row gap-4 items-center">
            <FaWhatsapp size={32} />
            <div>
              <p>Enviar WhatsApp</p>
              <p className="text-cinza-300 text-xs text-left">
                (11) 99999-9999
              </p>
            </div>
          </button>
        </Link>
      </section>
      <Image
        src={tatuador}
        alt="Imagem de um tatuador."
        width={600}
        className="hidden xl:block"
      />
    </main>
  );
}
