import { cn } from "@/lib/utils";
import Image from "next/image";

const data: {
  title: string;
  description: string;
  time: string;
  tags?: string[];
  image: string;
}[] = [
  {
    title: "SAVii",
    description:
      "Built to support India's ambitious goal of achieving FMD-free status by 2025, the platform integrates data collected by field workers, streamlines testing workflows for diagnostic labs, and offers real-time analytics to inform decision-making.",
    time: "2025",
    tags: ["loan app", "growth strategy", "data-driven design"],
    image:
      "https://images.unsplash.com/photo-1776255076699-d2dc33434b16?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Avifauna",
    description:
      "A tool to create, and maintain a central data repository for researcher across all avian projects at Bombay Natural History Society.",
    time: "2024",
    tags: ["zero-to-one", "data exchange", "system design"],
    image:
      "https://images.unsplash.com/photo-1776255076699-d2dc33434b16?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dharini",
    description:
      "Built to support India's ambitious goal of achieving FMD-free status by 2025, the platform integrates data collected by field workers, streamlines testing workflows for diagnostic labs, and offers real-time analytics to inform decision-making.",
    time: "2024",
    tags: ["zero-to-one", "loan app", "growth strategy", "data-driven design"],
    image:
      "https://images.unsplash.com/photo-1776255076699-d2dc33434b16?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Work() {
  const BoldText = ({ children }: { children: string }) => {
    return <strong className="text-slate-12">{children}</strong>;
  };

  return (
    <main className="text-slate-11 bg-basic-white">
      <section className="py-20 md:pt-40 px-10 md:px-20 bg-[url('/work-header-texture.png')] bg-cover border-b border-slate-4">
        <h2 className="section-title">what i do</h2>
        <span className="text-3xl md:text-5xl font-serif text-primary mt-4 block">
          Product Research & Design
        </span>
        <p className="mt-4 text-xl md:text-2xl">
          Alongside <BoldText>hands-on design</BoldText> work, I lead teams,
          manage <BoldText>stakeholder interactions</BoldText>, draft{" "}
          <BoldText>product maps</BoldText>, create project timelines, and
          handle <BoldText>shipping</BoldText> and delivery seamlessly{" "}
          <BoldText>across teams</BoldText> - design, engineering, product, and
          data.
        </p>
      </section>
      <section className="py-8 md:py-12 px-10 md:px-20">
        <h3 className="sr-only">Projects</h3>
        <div className="flex flex-col gap-12 lg:gap-24">
          {data.map((item, idx) => (
            <article
              key={item.title}
              className={cn(
                "flex flex-col-reverse lg:flex-row items-start gap-6 lg:gap-10",
                idx % 2 === 0 && "lg:flex-row-reverse",
              )}
            >
              <div className="flex flex-col gap-4 lg:gap-6 w-full lg:flex-1">
                <h4 className="font-serif text-2xl lg:text-3xl text-slate-12">
                  {item.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags && item.tags.length > 0
                    ? item.tags?.map((tag) => {
                        return (
                          <span
                            key={tag}
                            className="inline-block text-sm lg:text-base uppercase text-lime-12 px-2 lg:px-3 py-1 bg-slate-3 rounded-sm"
                          >
                            {tag}
                          </span>
                        );
                      })
                    : null}
                </div>
                <p className="text-lg lg:text-xl">{item.description}</p>
                <span className="text-lg lg:text-xl">{item.time}</span>
              </div>
              <div className="w-full lg:w-[52%] lg:shrink-0">
                <Image
                  src={item.image}
                  width={845}
                  height={440}
                  alt=""
                  className="rounded-xl object-cover w-full max-h-[440px]"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
