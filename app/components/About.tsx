import { Chat, Linkedin, Mail, Resume } from "@/assets/icons";
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
          className="h-fit"
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
      <div className="px-10 md:px-20 py-7 md:py-14 bg-basic-white flex flex-wrap gap-4 justify-between">
        <div className="flex gap-3 md:gap-5 items-center">
          <div className="w-6 md:w-8">
            <Chat />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">
            Want to know more? Let’s chai/t!
          </h2>
        </div>
        <div className="flex gap-8 md:gap-10 text-xl md:text-2xl font-semibold text-primary">
          <a
            href="mailto:hello@anushkagokhale.com"
            className="flex items-center gap-1 md:gap-3"
          >
            <div className="w-5 md:w-6">
              <Mail />
            </div>
            Email
          </a>
          <a
            href="https://linkedin.com/in/anushkaag"
            className="flex items-center gap-1 md:gap-3"
            target="_blank"
          >
            <div className="w-5 md:w-6">
              <Linkedin />
            </div>
            LinkedIn
          </a>
          <a href="#" className="flex items-center gap-1 md:gap-3">
            <div className="w-5 md:w-6">
              <Resume />
            </div>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
