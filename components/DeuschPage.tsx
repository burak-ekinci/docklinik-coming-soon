"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import NotifyMe from "@/components/NotifyMe";
import Link from "next/link";
import Blink from "./Blink";
import { useCounter } from "@/lib/useCounter";

const DeutschPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { counter } = useCounter();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative w-full h-screen text-white font-sans overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* Background video                                                    */}
      {/* ------------------------------------------------------------------ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
      />
      {/* Dark overlay to improve legibility */}
      <div className="absolute inset-0 bg-gray-900/60" />

      <Navbar theme="dark" />

      {/* ------------------------------------------------------------------ */}
      {/* Hero section                                                        */}
      {/* ------------------------------------------------------------------ */}
      <main className="relative z-10 flex flex-col h-full max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Headline & CTA */}
        <div className="my-auto max-w-xl">
          <Blink lang="de" />

          <NotifyMe lang="de" />
        </div>

        {/* Countdown */}
        <div className="flex flex-col pb-10 lg:flex-row lg:justify-between lg:items-center">
          {/* =============================== */}
          <div className="flex items-end">
            <span className="text-5xl font-bold">
              {counter == null || counter == 0 ? "Loading..." : counter}
            </span>

            <span className="ml-3 text-sm uppercase tracking-wider">
              <div className="flex flex-col">
                <div>Tage</div>
                <div>bis zum Start</div>
              </div>
            </span>
          </div>

          {/* =============================== */}
          <Link href="/de/impressum" className="text-md  mt-7">
            Impressum
          </Link>
        </div>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* Footer                                                              */}
      {/* ------------------------------------------------------------------ */}
    </div>
  );
};

export default DeutschPage;
