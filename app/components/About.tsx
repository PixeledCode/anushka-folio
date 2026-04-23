"use client";
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
          I graduated from 🎓{" "}
          <span className="font-semibold">Srishti in 2020</span> with a B.Des in
          Industrial Design. Originally from Pune, I am now{" "}
          <span className="font-semibold">based in 📍 Bengaluru</span>. <br />
          <br />
          After exploring the realm of enterprise products, I made a shift into
          the impact sector. Alongside hands-on design work, I have led teams,
          managed client interactions, drafted product maps, created project
          timelines, and handled shipping and delivery seamlessly.
        </p>
      </div>
    </section>
  );
}
