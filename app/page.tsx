import Image from "next/image";
import CollaborateTitles from "./components/CollaborateTitles";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Musings from "./components/Musings";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <section className="p-20">
        <h1 className="text-2xl">
          Hi, I’m Anushka —{" "}
          <span className="font-semibold">
            Product Designer & Number-Crunching Storyteller
          </span>
        </h1>
        <div className="mt-8 text-5xl font-serif">
          <div className="flex gap-4">
            <p className="">I collaborate with</p>
            <div className="text-primary">
              <CollaborateTitles />
            </div>
          </div>
          <div className="relative ">
            <p>
              to bridge the gap between{" "}
              <span className="underlineSVG">data and people</span>.
            </p>
            {/* <div className="absolute -bottom-4 right-96 w-[460px] h-3 bg-[url('/underline.svg')] bg-cover bg-center"></div> */}
          </div>
        </div>
        <div className="mt-16">
          <Image
            src="/grid.svg"
            alt="grid"
            width={1000}
            height={208}
            className="w-full h-[208px]"
          />
        </div>
        <div className="py-20 mt-20 relative">
          <div className="relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-lime-7" />
            <p className="text-3xl max-w-[835px] pl-5">
              I have{" "}
              <span className="font-semibold">4+ years of experience</span>, a
              background in public policy, and expertise in designing for social
              impact. I strive to create inclusive, accessible interfaces for{" "}
              <span className="font-semibold">data products</span> and{" "}
              <span className="font-semibold">enterprise solutions</span>.
            </p>
          </div>
          <Image
            src="/anushka-helmet.png"
            alt="anushka"
            width={366}
            height={404}
            className="absolute top-0 right-0"
          />
        </div>
      </section>
      <Marquee />
      <Work />
      <Musings />
      <About />
    </main>
  );
}
