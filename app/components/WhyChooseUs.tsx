import Heading from "./utils/Heading";

const WhyChooseUs = () => {
  const features = [
    {
      title: "راحة في كل خطوة",
      description:
        "استمتع بتجربة سفر مريحة وآمنة مع خدمات مخصصة لتلبية احتياجاتك",
    },
    {
      title: "أمان مضمون طوال الرحلة",
      description:
        "لأن سلامتك هي أولويتنا، نحرص على توفير أعلى معايير الأمان في كل رحلة",
    },
    {
      title: "مرونة في جدولة الرحلات",
      description:
        "نسعى لتلبية طلباتك من خلال تنظيم رحلات تناسب جدولك وتفضيلاتك",
    },
    {
      title: "أسعار تنافسية لا تقبل المقارنة",
      description:
        "نوفر رحلات بأسعار تنافسية تناسب ميزانيتك دون المساومة على الجودة",
    },
    {
      title: "دعم متواصل على مدار الساعة",
      description:
        "فريقنا متواجد دائمًا لتقديم المساعدة والإجابة على استفساراتك",
    },
  ];

  return (
    <section className="w-full flex-center-center flex-col relative">
      <Heading title="لماذا نحن خيارك الامثل" />
      <div className="w-full flex justify-evenly gap-y-10 flex-wrap">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="w-full sm:w-[44%] lg:w-[27%] sm:mx-[1%] max-w-full px-[2%] py-7 shadow-box rounded-lg flex flex-col gap-3 border border-[#e8e8e8] relative after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:translate-x-1/2 after:w-[6px] after:h-1/2 after:bg-green-light after:rounded-full"
          >
            <h3 className="text-4xl font-bold text-blue-deep">
              {feature.title}
            </h3>
            <p className="text-xl text-decor-gray-text">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
