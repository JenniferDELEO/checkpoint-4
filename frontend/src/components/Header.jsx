import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-gradient-to-b from-[#B32222] to-[#CA0D0D] text-white">
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <NavLink to="/">
          <h1>LesBonnesAffaires</h1>
        </NavLink>
        <ul className="hidden lg:flex lg:justify-between">
          <NavLink to="/form" className="flex hover:border-b mr-5">
            <AiOutlinePlusSquare />
            <li className="ml-3 text-sm uppercase">Déposer une annonce</li>
          </NavLink>
          <NavLink to="/profil" className="flex hover:border-b">
            <CgProfile />
            <li className="ml-3 text-sm uppercase">Mon profil</li>
          </NavLink>
        </ul>
        <div className="lg:hidden cursor-pointer" onClick={openMenu}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          isOpen
            ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            isOpen
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] lg:w-[45%] h-screen bg-gradient-to-b from-[#B32222] to-[#CA0D0D] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div className="rounded-full p-2 cursor-pointer" onClick={openMenu}>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <NavLink to="/" onClick={openMenu}>
                <li className="py-4 text-sm">Accueil</li>
              </NavLink>
              <NavLink to="/form" onClick={openMenu}>
                <li className="py-4 text-sm">Déposer une annonce</li>
              </NavLink>
              <NavLink to="/profil" onClick={openMenu}>
                <li className="py-4 text-sm">Mon profil</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
