import { Chat, Linkedin, Mail, Resume } from "@/assets/icons";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <div className="p-20 flex gap-16">
        <Image
          src="/about-anushka.png"
          alt="anushka giving talk"
          width={440}
          height={256}
        />
        <p className="text-2xl">
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
      <div className="px-20 py-14 bg-basic-white flex justify-between">
        <div className="flex gap-5 items-center">
          <div className="w-8 h-8">
            <Chat />
          </div>
          <h2 className="text-2xl font-semibold">
            Want to know more? Let’s chai/t!
          </h2>
        </div>
        <div className="flex gap-10 text-2xl font-semibold text-primary">
          <a href="#" className="flex items-center gap-3">
            <div className="w-6 h-6">
              <Mail />
            </div>
            Email
          </a>
          <a href="#" className="flex items-center gap-3">
            <div className="w-6 h-6">
              <Linkedin />
            </div>
            LinkedIn
          </a>
          <a href="#" className="flex items-center gap-3">
            <div className="w-6 h-6">
              <Resume />
            </div>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
