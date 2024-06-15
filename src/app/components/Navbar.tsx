"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
interface menuProp {
  toggleMenu: any;
  refcontent: any;
}

const Navbar: React.FC<menuProp> = ({ toggleMenu, refcontent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Text = "MENU MENU MENU";
  return (
    <>
      <Menu isOpen={isOpen} />
      <motion.div
        drag
        dragConstraints={refcontent}
        dragElastic={0.8}
        dragMomentum={false}
        dragPropagation
        whileDrag={{ scale: 0.5 }}
        className={`remove-def menu-btn-outer   fixed p-1 md:p-2  w-16 h-16 md:w-20 md:h-20 rounded-full border-4 md:border-4  left-[50%] translate-x-[-50%] bottom-12 md:bottom-16 flex items-center justify-center ${
          isOpen ? "border-secondary" : "border-secondary"
        } active:cursor-move`}
      >
        <motion.div
          className={`remove-def group w-full h-full rounded-full  flex justify-center items-center font-bold ${
            isOpen ? "bg-secondary" : "bg-secondary"
          } transition-all duration-300 active:duration-300 ease-inc cursor-pointer drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)]`}
          onClick={() => {
            setIsOpen(!isOpen);
            toggleMenu(!isOpen);
          }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.85 }}
        >
          <div
            className={`rotate-text absolute z-[101] -top-10 scale-[92%] md:scale-100 ${
              isOpen ? "text-white opacity-0" : "text-primary opacity-100"
            }`}
          >
            {Text.split("").map((char, i) => (
              <div
                style={{ transform: `rotate(${i * 24}deg)` }}
                className="char-rotate font-montserrat text-sm md:text-base"
                key={i}
              >
                {char}
              </div>
            ))}
          </div>
          {isOpen ? (
            <Image
              src="/images/close.png"
              alt="close"
              width={100}
              height={100}
              className="w-[40%] select-none pointer-events-none"
            />
          ) : (
            <Image
              src="/images/menu.png"
              alt="Menu"
              width={100}
              height={100}
              className="w-[40%] md:opacity-0  group-hover:opacity-100 transition-opacity duration-300 ease-inc select-none pointer-events-none"
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
};
interface menuDetail {
  isOpen: boolean;
}

const Menu: React.FC<menuDetail> = ({ isOpen }) => {
  return (
    <>
      <div
        className={`menu-container w-[100vw] h-[45vh] md:h-[60vh] md:p-4 px-4 md:px-12 flex flex-wrap gap-[3%] md:gap-[5%] fixed left-0  transition-all justify-center duration-[750ms] ease-inc ${
          isOpen
            ? "bottom-0 scale-100 blur-0"
            : "bottom-[-100%] scale-75 blur-lg"
        }`}
      >
        <Link
          href="/"
          className="card w-[30%] md:w-[23%] h-32 md:h-60  overflow-hidden remove-def"
        >
          <div className="group card-inner w-full h-full border-2 md:border-4 border-secondary/40 bg-secondary/30 md:bg-transparent hover:bg-secondary  rounded-tl-[50px] md:rounded-tl-[100px] rounded-br-[50px] md:rounded-br-[100px] flex justify-center items-center text-white text-base md:text-3xl font-monsterrat font-semibold tracking-widest transition-all duration-300 hover:bg-opacity-50">
            Home
          </div>
        </Link>
        <Link
          href="/project"
          className="card w-[34%] md:w-[23%] h-32 md:h-60  overflow-hidden remove-def"
        >
          <div className="card-inner w-full h-full border-2 md:border-4 border-secondary/40 bg-secondary/30 md:bg-transparent hover:bg-secondary rounded-[50px] md:rounded-[100px]  flex justify-center items-center text-white text-base md:text-3xl font-monsterrat font-semibold tracking-widest  transition-all duration-300  hover:bg-opacity-50">
            Projects
          </div>
        </Link>
        <Link
          href="/about"
          className="card w-[30%] md:w-[23%] h-32 md:h-60  overflow-hidden remove-def"
        >
          <div className="card-inner w-full h-full border-2 md:border-4 border-secondary/40 bg-secondary/30 md:bg-transparent hover:bg-secondary rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] flex justify-center items-center text-white text-base md:text-3xl font-monsterrat font-semibold tracking-widest  transition-all duration-300  hover:bg-opacity-50">
            About
          </div>
        </Link>
      </div>
    </>
  );
};
export default Navbar;
