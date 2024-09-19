import Btn from "./utils/Btn";

const CTA = () => {
  return (
    <section className="w-full px-10 py-16 bg-green-light text-white rounded-lg flex-center-center flex-col gap-9 text-center">
      <h2 className="text-5xl font-bold max-w-[750px] leading-[58px]">
        اكتشف جمال مصر معنا في رحلات آمنة ومريحة
      </h2>
      <Btn title="بادر بالحجز الان" customStyle="bg-blue-deep" />
    </section>
  );
};

export default CTA;
