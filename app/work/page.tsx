import { cn } from "@/lib/utils";
import { workPage } from "@/lib/data";
import RichText from "@/components/RichText";
import Image from "next/image";

export default function Work() {
  return (
    <main className="text-slate-11 bg-basic-white">
      <section className="py-20 md:pt-40 px-10 md:px-20 bg-[url('/work-header-texture.png')] bg-cover border-b border-slate-4">
        <h2 className="section-title">what i do</h2>
        <span className="text-3xl md:text-5xl font-serif text-primary mt-4 block">
          Product Research & Design
        </span>
        <p className="mt-4 text-xl md:text-2xl">
          <RichText text={workPage.headerDescription} />
        </p>
      </section>
      <section className="py-8 md:py-12 px-10 md:px-20">
        <h3 className="sr-only">Projects</h3>
        <div className="flex flex-col gap-12 lg:gap-24">
          {workPage.projects.map((item, idx) => (
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
                    ? item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-sm lg:text-base uppercase text-lime-12 px-2 lg:px-3 py-1 bg-slate-3 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))
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
