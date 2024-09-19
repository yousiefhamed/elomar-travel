"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Btn from "./utils/Btn";
import { Icon } from "@iconify/react/dist/iconify.js";

const Nav = () => {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuState) {
      return;
    }

    const handleCloseMenu = () => {
      setMenuState(false);
    };

    document.addEventListener("click", handleCloseMenu);

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [menuState]);

  return (
    <nav className="w-full flex-between-center gap-3 bg-decor-gray-light rounded-md px-5 mt-8 sticky top-8 shadow-nav z-50">
      <div className="w-60 h-full">
        <Image
          src="/logo.png"
          alt="العمر ترافيل"
          width={371}
          height={72}
          priority={true}
          className="w-full py-2 object-contain"
        />
      </div>
      <ul
        ref={menuRef}
        className={`flex-center-center gap-5 text-xl bg-decor-gray-light lg:bg-transparent nav-mobile ${
          menuState ? "open" : "close"
        }`}
      >
        <li>
          <Link href="#" className="lg:hover-menu">
            الرئيسية
          </Link>
        </li>
        <li>
          <Link href="#" className="lg:hover-menu">
            اكتشف
          </Link>
        </li>
        <li>
          <Link href="#" className="lg:hover-menu">
            تواصل معنا
          </Link>
        </li>
        <Btn title="احجز الآن" customStyle="md:hidden flex" />
      </ul>
      <div className="flex-center-center gap-3">
        <Btn title="احجز الآن" customStyle="md:flex hidden" />
        <button
          className="text-blue-deep lg:hidden inline-block"
          onClick={() => setMenuState(!menuState)}
        >
          <Icon icon="ion:menu" className="w-10 h-10 font-bold text-6xl" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
