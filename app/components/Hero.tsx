import Image from "next/image";
import Btn from "./utils/Btn";

const Hero = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 xs:gap-10 gap-36 min-h-svh lg:min-h-fit lg:h-svh lg:max-h-[650px] justify-center items-center">
      <div className="text-right flex flex-col gap-5 justify-center items-start">
        <h1 className="md:text-6xl text-5xl font-bold text-blue-deep leading-[140%]">
          رحلات مخصصة لك بأمان وراحة.
        </h1>
        <p className="text-3xl font-medium text-decor-gray-text leading-[140%] relative">
          نحن هنا لجعل كل رحلة ذكرى{" "}
          <span className="text-green-light font-bold xs:hidden inline-block">
            جميلة
          </span>
          <Image
            src="/icon-hero.svg"
            alt="جميلة"
            width={300}
            height={300}
            style={{
              position: "absolute",
              left: 0,
              transition: "filter 0.5s ease-in-out",
            }}
            className="xs:hidden inline-block xs:-translate-x-1/2 translate-x-0 xs:-translate-y-1/4 xs:top-0 top-[45px] -z-20"
          />
          <Image
            src="/icon-hero-text.svg"
            alt="جميلة"
            width={300}
            height={300}
            style={{
              position: "absolute",
              left: 0,
              transition: "filter 0.5s ease-in-out",
            }}
            className="xs:inline-block hidden xs:-translate-x-1/2 -translate-x-[40px] xs:-translate-y-1/4 xs:top-0 top-[45px] -z-20"
          />
        </p>
        <Btn title="احجز الآن" customStyle="" />
      </div>
      <div className="w-full flex justify-center lg:justify-end items-center">
        <Image
          src="/hero.png"
          alt="اتوبيس العمر ترافيل في واحدة من رحلاته"
          width={500}
          height={500}
          className="w-full max-w-[650px] lg:max-w-none object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
