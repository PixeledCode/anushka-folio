import { Linkedin, Mail, Resume } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Connect() {
  return (
    <main className="p-20 flex gap-16">
      <div>
        <span className="uppercase py-1 pl-3 pr-4 tagShadow rounded-full flex items-center gap-2 w-fit">
          <Image src="/tag.svg" alt="" width={20} height={20} />
          open to work
        </span>
        <h1 className="font-serif text-5xl mt-6">
          Let’s create <span className="text-primary">something</span> together!
        </h1>
        <div className="mt-10 flex flex-col gap-4">
          <ConnectLink href="#" icon={<Mail fill="var(--slate-12)" />}>
            hello@anushkagokhale.com
          </ConnectLink>
          <ConnectLink href="#" icon={<Linkedin fill="var(--slate-12)" />}>
            linkedin.com/in/anushkaag
          </ConnectLink>
          <ConnectLink href="#" icon={<Resume />} primary>
            Download Resume
          </ConnectLink>
        </div>
      </div>
      <div>
        <Image
          src="/about-quote.png"
          width={628}
          height={506}
          alt="quote from shel silverstein"
        />
      </div>
    </main>
  );
}

const ConnectLink = ({
  children,
  icon,
  href,
  primary,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  href: string;
  primary?: boolean;
}) => {
  return (
    <a href={href} className="py-2 flex items-center gap-3">
      <div className="w-6 h-6">{icon}</div>
      <span
        className={cn(
          "text-xl font-semibold border-b-2",
          primary && "text-primary border-b-primary"
        )}
      >
        {children}
      </span>
    </a>
  );
};
