import Image from "next/image";
import Btn from "./utils/Btn";
import BgScreen from "./utils/BgScreen";

const ValueProposition = () => {
  return (
    <section className="relative w-full grid grid-cols-1 lg:grid-cols-2 min-h-svh lg:min-h-fit lg:h-svh lg:max-h-[650px] justify-center items-center">
      <BgScreen />
      <div className="text-right flex flex-col gap-5 justify-center items-start">
        <h2 className="md:text-6xl text-5xl font-bold text-blue-deep leading-[140%]">
          استكشف مصر بأجمل معالمها
        </h2>
        <p className="text-3xl font-medium text-decor-gray-text leading-[140%] relative">
          معنا، ستتعرف على أفضل الوجهات السياحية في مصر، من الآثار القديمة إلى
          الشواطئ الساحرة، في رحلات مليئة بالمغامرة والأمان. نقدم لك تجارب
          سياحية لا تُنسى تلبي احتياجات كل المسافرين.{" "}
        </p>
        <Btn title="بادر بالحجز الآن" customStyle="" />
      </div>
      <div className="w-full flex justify-center lg:justify-end items-center">
        <Image
          src="/egypt-map.png"
          alt="اتوبيس العمر ترافيل في واحدة من رحلاته"
          width={500}
          height={500}
          className="w-full max-w-[650px] lg:max-w-none object-contain"
        />
      </div>
    </section>
  );
};

export default ValueProposition;
