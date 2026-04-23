import { marqueeCompanies } from "@/lib/data";
import Image from "next/image";
import ReactMarquee from "react-fast-marquee";

export default function Marquee() {
  return (
    <section className="bg-white py-10 md:py-16 border-y border-slate-4">
      <div className="flex justify-center">
        <span className="text-md uppercase text-slate-11">
          Past Collaborations
        </span>
      </div>
      <ReactMarquee>
        <div className="flex gap-10 mt-8">
          {marqueeCompanies.map((company) => (
            <Image
              key={company.src}
              src={company.src}
              alt={company.alt}
              width={200}
              height={90}
              className="object-contain h-26"
            />
          ))}
        </div>
      </ReactMarquee>
    </section>
  );
}
