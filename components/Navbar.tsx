"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavbarProps {
  theme?: "light" | "dark";
}

const Navbar = ({ theme }: NavbarProps) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const path = pathname.includes("/de") || pathname == "/" ? "/de" : "/en";

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigation = [
    {
      name: path == "/de" ? "Über uns" : "About",
      href: path == "/de" ? "/de/uber-uns" : "/en/about",
    },
    {
      name: path == "/de" ? "Kontakt" : "Contact",
      href: path == "/de" ? "/de/kontakt" : "/en/contact",
    },
    {
      name: path == "/de" ? "EN" : "DE",
      href: path == "/de" ? "/en" : "/de",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="absolute inset-x-0 mt-3 z-40">
      {/* Bu div nav'ın hem soldan hem sağdan eşit 1.5rem boşluk almasını sağlar */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <nav className={`flex items-center justify-between h-16 `}>
          {/* Logo solda sabit */}
          <Link href={path} className="-m-1.5 p-1.5">
            <span className="sr-only">Docklinik</span>
            <Image
              width={100}
              height={100}
              src="/logo-white.png"
              alt=""
              className={`h-6 w-auto ${
                theme === "light" ? "brightness-0" : ""
              }`}
            />
          </Link>

          {/* Masaüstü linkleri */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-md font-semibold hover:underline ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                {item.name.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Mobil menü ikonu */}
          <div className={`flex lg:hidden `}>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 p-2.5 transition-transform duration-300 ${
                mobileMenuOpen == true ? "hidden" : "text-white"
              } ${theme === "light" ? "fill-black" : "fill-white"}`}
            >
              <span className="sr-only">Toggle menu</span>
              <Bars3Icon
                className={`h-6 w-6 ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobil dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
        <DialogPanel
          className={`z-60 fixed inset-y-0 right-0 w-full max-w-sm p-6 backdrop-blur-md bg-white/80 border-l border-white/20 shadow-2xl ${
            theme === "light"
              ? "bg-white/90 backdrop-blur-md"
              : "bg-gray-900/90 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/en" className="-m-1.5 p-1.5">
              <span className="sr-only">Docklinik</span>
              <Image
                width={100}
                height={100}
                src="/logo-white.png"
                alt=""
                className={`h-6 w-auto ${
                  theme === "light" ? "brightness-0" : "brightness-30"
                }`}
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`-m-2.5 p-2.5 transition-transform duration-300 ${
                mobileMenuOpen == true ? null : "hidden"
              }`}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                      theme === "light"
                        ? "text-gray-600 hover:bg-gray-200"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
