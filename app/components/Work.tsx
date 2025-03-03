import { ArrowUpRight, ChevronRight } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Work() {
  return (
    <section className="p-20 flex gap-16">
      <Image src="/books.png" alt="books" width={400} height={360} />
      <div className="w-full">
        <h2 className="text-light uppercase">basics</h2>
        <div className="mt-2">
          <span className="text-3xl font-serif">Work Experience</span>
          <div className="mt-12 flex flex-col gap-6">
            <WorkItem
              title="Parallel HQ (2023-Present)"
              subtitle="Product Designer"
              link="#"
              current={true}
            />
            <WorkItem
              title="Srishti Manipal (2024)"
              subtitle="Visiting Faculty"
              link="#"
            />
            <WorkItem
              title="CivicDataLab (2023)"
              subtitle="Sr. Product Designer"
              link="#"
            />
            <WorkItem
              title="f1studioz (2021-22)"
              subtitle="UX Designer"
              link="#"
            />
          </div>
        </div>
      </div>
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
      className="flex justify-between border-b border-slate-6 pb-2 relative"
    >
      {current ? (
        <div className="absolute left-0 top-1 w-6 h-6">
          <ChevronRight />
        </div>
      ) : null}
      <span className={cn("text-2xl pl-8", current && "font-semibold")}>
        {title}
      </span>
      <div className="flex items-center gap-10">
        <span className="text-light">{subtitle}</span>
        <div className="w-6 h-6">
          <ArrowUpRight />
        </div>
      </div>
    </a>
  );
};
