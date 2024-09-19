import Image from "next/image";
import BgScreen from "./utils/BgScreen";
import Btn from "./utils/Btn";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative mt-40 w-full">
      <BgScreen bg="bg-blue-deep" />
      <div className="w-full flex justify-start lg:justify-between items-center md:items-start md:flex-row flex-col gap-20 lg:gap-32">
        <div className="w-[450px] max-w-full flex-center-center flex-col">
          <div className="w-full max-w-[80%] h-20">
            <Image
              src="/logo-dark.png"
              alt="elomar travel logo"
              width={371}
              height={80}
              className="w-full h-full object-contain -mr-4"
            />
          </div>
          <p className="text-decor-gray-light text-lg text-center mb-5 mt-2.5">
            معنا، ستتعرف على أفضل الوجهات السياحية في مصر، من الآثار القديمة إلى
            الشواطئ الساحرة، في رحلات مليئة بالمغامرة والأمان. نقدم لك تجارب
            سياحية لا تُنسى تلبي احتياجات كل المسافرين.
          </p>
          <Btn title="احجز رحلتك الآن" customStyle="" />
        </div>
        <div className="flex justify-between flex-col gap-12 pl-0 lg:pl-40">
          <address className="w-full flex items-center md:items-start flex-col gap-2 md:text-right text-center">
            <p className="text-white text-base">
              <Icon icon="hugeicons:contact" className="w-5 h-5 inline-block" />{" "}
              <Link href="tel:+201019456685">0101-945-6685</Link>
            </p>
            <p className="text-white text-base">
              <Icon icon="mdi:location" className="w-5 h-5 inline-block" />{" "}
              <span> 123 شارع النيل، القاهرة، مصر</span>
            </p>
            <p className="text-white text-base">
              <Icon icon="ph:clock" className="w-5 h-5 inline-block" />{" "}
              <span>من السبت إلى الخميس من 9 صباحاً إلى 5 مساءً</span>{" "}
            </p>
          </address>
          <div className="w-full flex items-center md:items-start flex-col gap-2">
            <p className="text-white text-base">
              اشترك في صفحتنا علي الفيس بوك:
            </p>
            <Link
              href="https://www.facebook.com/profile.php?id=100083374020748"
              target="_blank"
              className="hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/icons/like-us-on-facebook.png"
                alt="link us on facebook icon"
                width={200}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full bg-white text-white mt-10 mb-5" />
      <div className="w-full flex justify-between items-center flex-col md:flex-row gap-5 text-white translate-y-3">
        <p className="text-xl text-center">
          &copy; جميع الحقوق محفوظة El-Omar Travel@2024
        </p>
        <div className="flex-center-center gap-5">
          <Link
            href="https://wa.me/+201208774786?text=مرحبًا 👋، أنا مهتم بحجز رحلة معكم 🚌✈️ من خلال الموقع الإلكتروني. أود معرفة المزيد من التفاصيل حول الوجهات المتاحة 🌍 وأسعار الرحلات 💰. هل بإمكانكم مساعدتي في حجز رحلتي القادمة؟ 🗺️😊"
            target="_blank"
          >
            <Icon
              icon="ri:whatsapp-line"
              className="bg-white text-blue-deep p-1 size-10 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </Link>
          <Link href="#" target="_blank">
            <Icon
              icon="ri:instagram-line"
              className="bg-white text-blue-deep p-1 size-10 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100083374020748"
            target="_blank"
          >
            <Icon
              icon="ri:facebook-fill"
              className="bg-white text-blue-deep p-1 size-10 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
