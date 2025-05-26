"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-slate-2 group-[.toaster]:text-foreground group-[.toaster]:border-slate-4 group-[.toaster]:shadow-popover",
          description: "group-[.toast]:text-slate-11",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-basic-white",
          cancelButton:
            "group-[.toast]:bg-slate-3 group-[.toast]:text-slate-11",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
