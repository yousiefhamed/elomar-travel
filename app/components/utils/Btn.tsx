"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const Btn = ({
  customStyle,
  title,
}: {
  customStyle: string;
  title: string;
}) => {
  return (
    <Link
      href="https://wa.me/+201208774786?text=مرحبًا، أنا مهتم بحجز رحلة معكم من خلال الموقع الإلكتروني."
      target="_blank"
      rel="noopener noreferrer"
      className={`w-fit flex justify-center items-center gap-3 rounded-xl pr-8 pl-5 py-3 text-xl font-bold text-white bg-green-dark shadow-btn hover:scale-110 transition-transform duration-300 ${customStyle}`}
    >
      {title}
      <Icon icon="solar:arrow-left-broken" className="w-7 h-7 font-bold" />
    </Link>
  );
};

export default Btn;
