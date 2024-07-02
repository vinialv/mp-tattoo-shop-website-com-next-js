"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import logo from "@/app/_assets/logo.svg";
import { inter, londrina } from "../_lib/fonts";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [selectedPage, setSelectedPage] = useState("home");
  const pathname = usePathname();

  const isActive = (currentPath: String, pathname: string) => {
    if (currentPath.includes(pathname)) return "underline";
  };
  return (
    <header>
      <nav
        className={`flex md:flex-row flex-col justify-between md:px-32 px-8 py-8 tracking-widest ${londrina.className} font-black`}
      >
        <Link href="/">
          <Image src={logo} alt="Logotipo de Sandro Luz" />
        </Link>
        <div className="flex flex-col gap-2 md:text-center">
          <ul className="flex gap-6 text-3xl">
            <li>
              <Link
                href="/servicos"
                className={`font-londrina md:text-2xl text-lg cursor-pointer text-branco ${isActive(
                  pathname,
                  "servicos"
                )}`}
                onClick={() => {
                  setSelectedPage("servicos");
                }}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className={`font-londrina md:text-2xl text-lg cursor-pointer text-branco ${isActive(
                  pathname,
                  "sobre"
                )}`}
              >
                Sobre Mim
              </Link>
            </li>
            <li className="relative text-right">
              <Link
                href="/contato"
                className={`font-londrina md:text-2xl text-lg cursor-pointer text-branco ${isActive(
                  pathname,
                  "contato"
                )}`}
              >
                Contato
              </Link>
            </li>
          </ul>
          <div>
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              className="flex gap-1 font-inter text-xs text-cinza-300 md:visible invisible justify-end"
            >
              <span className={`flex font-light text-xs gap-1 items-center`}>
                <FaWhatsapp />
                (11) 99999-9999
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
