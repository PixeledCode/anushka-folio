"use client";

import { about } from "@/lib/data";
import RichText from "@/components/RichText";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className="p-10 md:p-20 flex gap-4 md:gap-16 flex-wrap lg:flex-nowrap">
        <Image
          src="/about-anushka.png"
          alt="anushka giving talk"
          width={440}
          height={256}
          className="h-fit hover:scale-97 transition-all duration-300"
        />
        <p className="text-base md:text-2xl">
          {about.paragraphs.map((para, i) => (
            <span key={i}>
              <RichText text={para} boldClassName="font-semibold" />
              {i < about.paragraphs.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
