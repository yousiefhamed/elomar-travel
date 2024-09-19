import Image from "next/image";
import Heading from "./utils/Heading";
import WhatsappBtn from "./utils/WhatsappBtn";
import BgScreen from "./utils/BgScreen";

const Destination = () => {
  const cities = [
    {
      name: "مرسى مطروح",
      image: "matrouh",
    },
    {
      name: "القاهرة",
      image: "cairo",
    },
    {
      name: "أسوان",
      image: "aswan",
    },
    {
      name: "الجيزة",
      image: "giza",
    },
    {
      name: "الساحل الشمالي",
      image: "northcoast",
    },
    {
      name: "الأقصر",
      image: "luxor",
    },
    {
      name: "سيوة",
      image: "siwa",
    },
    {
      name: "بور سعيد",
      image: "portsaid",
    },
  ];

  return (
    <section className="w-full flex-center-center flex-col relative">
      <BgScreen />
      <Heading title="اكتشف وجهتك المفضلة" />
      <div className="w-full justify-center items-center columns-1 xs:columns-2 md:columns-3 lg:columns-4 mb-10">
        {cities.map((city) => (
          <div
            className="w-full mb-6 relative scale-100 hover:scale-105 transition-transform duration-300"
            key={city.image}
          >
            <Image
              src={`/destinations/${city.image}.jpeg`}
              alt={city.name}
              width={300}
              height={200}
              className="w-full object-cover rounded-lg shadow-btn"
            />
            <h3 className="absolute bottom-2 right-4 text-xl font-bold text-white bg-decor-transparent px-4 pt-[3px] rounded-md">
              {city.name}
            </h3>
          </div>
        ))}
      </div>
      <WhatsappBtn />
    </section>
  );
};

export default Destination;
