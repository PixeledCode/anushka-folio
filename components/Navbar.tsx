"use client";

import { Connect, Work } from "@/assets/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="flex items-center gap-4 justify-between px-10 md:px-20 py-4 md:py-6">
        <Link href="/" className="cursor-pointer">
          <Image src="/anushkaLogo.svg" alt="logo" width={121} height={100} />
        </Link>
        <div className="flex gap-8">
          <NavLink href="/work" icon={<Work />} active={pathname === "/work"}>
            work
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("page-connect")?.offsetTop,
                behavior: "smooth",
              });
            }}
            icon={<Connect />}
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
  onClick,
  icon,
  active,
  className,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
  className?: string;
  href?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  const finalClassName = cn(
    "text-base md:text-xl font-semibold flex items-center gap-1 md:gap-3 text-black cursor-pointer transition-colors",
    (active || hovered) && "text-primary",
    className,
  );

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  const content = (
    <>
      <div className="w-4 h-4 md:w-5 md:h-5">{icon}</div>
      {children}
    </>
  );

  if (href) {
    return (
      <Link className={finalClassName} href={href} {...handlers}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName} {...handlers}>
      {content}
    </button>
  );
};
