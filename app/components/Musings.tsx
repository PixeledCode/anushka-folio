import { Location } from "@/assets/icons";
import Image from "next/image";

export default function Musings() {
  return (
    <section className="py-10 hidden md:block">
      <div className="bg-[url('/waves.svg')] w-full h-[87px]"></div>
      <div className="p-20 bg-slate-3">
        <h2 className="text-light uppercase">beyond basics</h2>
        <div className="mt-2">
          <span className="text-3xl font-serif">
            Musings from my Quarter-Life Crisis
          </span>
          <div className="flex gap-4 justify-center mt-12 musings">
            <Card
              title="Policy in Action Fellow @ YLAC"
              subtitle="I learned public policy basics and drafted recommendations to optimise student’s entry into UG medical education in India."
              image="/ylac.png"
              locationTag="Delhi"
              statsTag="50+ Professionals, 1 Designer"
            />
            <Card
              title="Visiting Faculty @ Srishti Manipal"
              subtitle="I facilitated the course ‘Information Visualisation’ over 6 weeks for 25 third-year undergraduate students.  "
              image="/smi.png"
              locationTag="Bengaluru"
            />
            <Card
              title="Yatri @ Jagriti Yatra"
              subtitle="I lived on a train for 15 days and explored India to better understand the 1 billion people we design for every day."
              image="/jy.png"
              locationTag="8000 KM across 10 States"
              statsTag="500 People on 1 train"
            />
          </div>
        </div>
      </div>
      <div className="bg-[url('/waves.svg')] w-full h-[87px] transform -scale-y-100"></div>
    </section>
  );
}

const Card = ({
  title,
  subtitle,
  image,
  locationTag,
  statsTag,
}: {
  title: string;
  subtitle: string;
  image: string;
  locationTag?: string;
  statsTag?: string;
}) => {
  return (
    <article className="bg-white p-2 rounded-sm max-w-[416px] shadow-md">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={388}
          height={400}
          className="w-full object-cover"
        />
        <div className="absolute bottom-4 right-4 flex flex-col gap-3 items-end">
          {locationTag && (
            <Tag>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 font-medium">
                  <Location />
                </div>
                {locationTag}
              </div>
            </Tag>
          )}
          {statsTag && <Tag>{statsTag}</Tag>}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="text-xl">{subtitle}</span>
      </div>
    </article>
  );
};

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-xl font-semibold text-primary bg-basic-white rounded-full pl-3 pr-4 py-1 w-fit">
      {children}
    </div>
  );
};
