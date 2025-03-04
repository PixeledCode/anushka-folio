import Image from "next/image";
import ReactMarquee from "react-fast-marquee";

export default function Marquee() {
  return (
    <section className="bg-white pt-14 md:pt-28 pb-6 md:pb-16">
      <ReactMarquee>
        <div className="flex gap-10">
          <Image
            src="/companies/1.png"
            alt="company 1"
            width={200}
            height={90}
            className="object-contain h-26"
          />
          <Image
            src="/companies/2.png"
            alt="company 2"
            width={200}
            height={90}
            className="object-contain h-26"
          />
          <Image
            src="/companies/3.png"
            alt="company 3"
            width={200}
            height={90}
            className="object-contain h-26"
          />
          <Image
            src="/companies/4.png"
            alt="company 4"
            width={200}
            height={90}
            className="object-contain h-26"
          />
          <Image
            src="/companies/5.png"
            alt="company 5"
            width={200}
            height={90}
            className="object-contain h-26"
          />
          <Image
            src="/companies/6.png"
            alt="company 6"
            width={200}
            height={90}
            className="object-contain h-26"
          />
          <Image
            src="/companies/7.png"
            alt="company 7"
            width={200}
            height={90}
            className="object-contain h-26"
          />
          <Image
            src="/companies/8.png"
            alt="company 8"
            width={200}
            height={90}
            className="object-contain h-26"
          />
        </div>
      </ReactMarquee>
    </section>
  );
}
