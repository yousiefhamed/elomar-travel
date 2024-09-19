import Image from "next/image";
import Btn from "./Btn";

const WhatsappBtn = () => {
  return (
    <div className="relative w-fit hover:scale-110 transition-transform duration-300">
      <Image
        src="/icons/whatsapp3D.png"
        alt="whatsapp3D icon"
        width={78}
        height={97}
        className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-24 transition-transform duration-300 z-40"
      />
      <Btn title="استفسر الان" customStyle="pr-14 pl-8" />
    </div>
  );
};

export default WhatsappBtn;
