import { ArrowUpRight, ChevronRight } from "@/assets/icons";
import { workExperience } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Work() {
  return (
    <section className="p-10 md:p-20 flex gap-16">
      <div className="w-full">
        <h2 className="section-title">basics</h2>
        <div className="mt-2">
          <span className="text-2xl md:text-3xl font-serif">
            Work Experience
          </span>
          <div className="mt-6 md:mt-12 flex flex-col gap-4 md:gap-6">
            {workExperience.map((item) => (
              <WorkItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/books.png"
        alt="books"
        width={400}
        height={360}
        className="-mt-10 hidden md:block h-fit"
      />
    </section>
  );
}

const WorkItem = ({
  title,
  subtitle,
  link,
  current,
}: {
  title: string;
  subtitle: string;
  link: string;
  current?: boolean;
}) => {
  return (
    <a
      href={link}
      className="flex justify-between border-b border-slate-6 pb-2 relative work-item"
    >
      {current ? (
        <div className="absolute left-0 top-1 w-6 h-6">
          <ChevronRight />
        </div>
      ) : null}
      <span
        className={cn("text-xl md:text-2xl pl-8", current && "font-semibold")}
      >
        {title}
      </span>
      <div className="flex items-center gap-10">
        <span className="text-light hidden lg:block uppercase">{subtitle}</span>
        <div className="w-6 h-6 shrink-0 work-icon">
          <ArrowUpRight />
        </div>
      </div>
    </a>
  );
};
