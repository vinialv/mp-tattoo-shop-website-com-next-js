import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center w-full bg-cinza-950 text-cinza-300 font-inter gap-4 text-xs py-4 md:px-32 px-8">
      <div className="flex md:flex-row flex-col md:items-center items-start  md:gap-4 gap-0">
        <p>Sandro Luz Tattoo Shop</p>
        <span className="text-amarelo text-lg hidden md:block">&#8226;</span>
        <p>Rua Limoeiro, 1000 - Catalão - SP</p>
        <span className="text-amarelo text-lg hidden md:block">&#8226;</span>
      </div>
      <span className="text-amarelo text-lg block md:hidden">&#8226;</span>
      <Link
        href="https://wa.me/5511999999999"
        target="_blank"
        className="flex gap-1 items-center"
      >
        <FaWhatsapp />
        (11) 99999-9999
      </Link>
    </footer>
  );
}
