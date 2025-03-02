"use client";

import {
  HomeOutline,
  WorkOutline,
  ConnectOutline,
  HomeFilled,
  WorkFilled,
  ConnectFilled,
} from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white">
      <div className="flex items-center gap-4 justify-between px-20 py-6">
        <NavLink
          href="/"
          icon={pathname === "/" ? <HomeFilled /> : <HomeOutline />}
          active={pathname === "/"}
        >
          about me
        </NavLink>
        <Image src="/anushkaLogo.svg" alt="logo" width={121} height={100} />
        <div className="flex gap-8">
          <NavLink
            href="/work"
            icon={pathname === "/work" ? <WorkFilled /> : <WorkOutline />}
            active={pathname === "/work"}
          >
            work
          </NavLink>
          <NavLink
            href="/connect"
            icon={
              pathname === "/connect" ? <ConnectFilled /> : <ConnectOutline />
            }
            active={pathname === "/connect"}
          >
            connect
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({
  children,
  href,
  icon,
  active,
}: {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "text-xl font-semibold flex items-center gap-3",
        active && "text-primary"
      )}
    >
      <div className="w-5 h-5">{icon}</div>
      {children}
    </a>
  );
};
