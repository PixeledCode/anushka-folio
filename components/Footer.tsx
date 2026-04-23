"use client";

import { Chat, Linkedin, Mail } from "@/assets/icons";
import { toast } from "sonner";

export default function Footer() {
  return (
    <footer className="">
      <div
        className="px-10 md:px-20 py-7 md:py-14 bg-basic-white flex flex-wrap gap-4 justify-between border-y border-slate-4"
        id="page-connect"
      >
        <div className="flex gap-3 md:gap-5 items-center">
          <div className="w-6 md:w-8">
            <Chat />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold">
            Want to know more? Let’s chai/t!
          </h2>
        </div>
        <div className="flex gap-8 md:gap-10 text-xl md:text-2xl font-semibold text-primary">
          <button
            onClick={() => {
              navigator.clipboard.writeText("hello@anushkagokhale.com");
              toast("Email copied to clipboard");
            }}
            className="flex items-center gap-1 md:gap-3 cursor-pointer"
          >
            <div className="w-5 md:w-6">
              <Mail />
            </div>
            Email
          </button>
          <a
            href="https://linkedin.com/in/anushkaag"
            className="flex items-center gap-1 md:gap-3"
            target="_blank"
          >
            <div className="w-5 md:w-6">
              <Linkedin />
            </div>
            LinkedIn
          </a>
          {/* <a href="#" className="flex items-center gap-1 md:gap-3">
            <div className="w-5 md:w-6">
              <Resume />
            </div>
            Resume
          </a> */}
        </div>
      </div>
      <div className="py-10 md:py-16 px-3 flex justify-center gap-3 flex-wrap footer text-sm md:text-base">
        <span className="text-basic-white bg-lime-11 px-1 font-semibold uppercase">
          designed with ❤️ by anushkaag
        </span>
        <a
          href="https://pixeledcode.com/"
          className="text-basic-white bg-lime-11 px-1 font-semibold uppercase"
          target="_blank"
        >
          developed with ✨ by @pixeledcode
        </a>
      </div>
    </footer>
  );
}
