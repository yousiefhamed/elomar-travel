import Heading from "./utils/Heading";

const HowItWorks = () => {
  const steps = [
    {
      title: "طلب الرحلة",
      description: "قدم طلب رحلتك بسهولة عبر الموقع.",
    },
    {
      title: "تنظيم الرحلة",
      description: "نقوم بتنظيم الرحلة وجمع المسافرين.",
    },
    {
      title: "انطلق واستمتع",
      description: "استمتع برحلتك الآمنة والمريحة.",
    },
  ];
  return (
    <section className="w-full flex-center-center flex-col">
      <Heading title="كيف تعمل خدماتنا" />
      <div className="w-full flex flex-wrap gap-y-8 xl:gap-y-0">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`basis-full xl:basis-1/3 flex justify-center text-center xs:text-right xs:justify-start flex-col xs:flex-row xl:justify-center xs:mr-10 md:mr-0 items-center gap-4 px-2 ${
              index === 0
                ? "md:justify-start"
                : index === 1
                ? "md:justify-center"
                : "md:justify-end"
            }`}
          >
            <div className="size-28 flex-center-center rounded-full bg-green-light shadow-btn shrink-0">
              <h3 className="text-decor-gray-light text-6xl font-bold h-[40px]">
                {index + 1}
              </h3>
            </div>
            <p className="flex flex-col">
              <span className="text-blue-deep text-[32px] font-bold">
                {step.title}
              </span>
              <span className="text-decor-gray-text text-[22px]">
                {step.description}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
