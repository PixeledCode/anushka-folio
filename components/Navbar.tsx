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
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex items-center gap-4 justify-between px-10 md:px-20 py-4 md:py-6">
        <NavLink
          href="/"
          icon={pathname === "/" ? <HomeFilled /> : <HomeOutline />}
          active={pathname === "/"}
          className="hidden md:flex"
        >
          about me
        </NavLink>
        <Link href="/" className="block md:hidden">
          <Image src="/anushkaLogo.svg" alt="logo" width={121} height={100} />
        </Link>
        <Image
          src="/anushkaLogo.svg"
          alt="logo"
          width={121}
          height={100}
          className="hidden md:block"
        />
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
  className,
}: {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  active?: boolean;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-base md:text-xl font-semibold flex items-center gap-1 md:gap-3 text-black",
        active && "text-primary",
        className && className
      )}
    >
      <div className="w-4 h-4 md:w-5 md:h-5">{icon}</div>
      {children}
    </Link>
  );
};
