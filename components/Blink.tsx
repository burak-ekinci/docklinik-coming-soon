"use client";
import React, { useState, useEffect } from "react";

export default function Blink({ lang }: { lang: "de" | "en" }) {
  // const phrases = ["Connect clinics", "with doctors."];
  const phrases =
    lang === "de"
      ? ["verbinden Kliniken", "mit Ärzt:innen."]
      : ["Connect clinics", "with doctors."];

  const [text, setText] = useState("");
  const [phase, setPhase] = useState(0); // Hangi cümledeyiz
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [waiting, setWaiting] = useState(false);

  // Cursor blink
  useEffect(() => {
    const timer = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(timer);
  }, []);

  // phase[1]'de 5000ms bekle sonra döngüye devam et
  useEffect(() => {
    if (waiting) {
      const waitTimeout = setTimeout(() => {
        setWaiting(false);
        setIsDeleting(true);
      }, 5000);
      return () => clearTimeout(waitTimeout);
    }
    const current = phrases[phase];
    // Hız: yazarken daha yavaş, silerken daha hızlı
    const speed = isDeleting ? 60 : 120;

    const handler = setTimeout(() => {
      setText((prev) => {
        const next = isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1);
        return next;
      });

      // Tam yazıldıysa bekleme ve silmeye başlama
      if (!isDeleting && text === current) {
        if (phase === 1) {
          setWaiting(true);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
      // Tamamen silindikten sonra diğer cümleye geç, yazmaya başla
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhase((p) => (p + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(handler);
    // waiting state'i de dependency'ye eklenmeli
  }, [text, isDeleting, phase, waiting]);

  return (
    <div className="my-auto max-w-xl">
      <p className="text-2xl ">{lang === "de" ? "Wir" : "We"}</p>
      <h2 className="text-5xl md:text-7xl md:min-w-3xl font-extrabold leading-tight mb-6">
        {text}
        <span className="inline-block ml-1">{showCursor ? "|" : ""}</span>
      </h2>
      <p className="text-lg md:text-xl mb-8">
        {lang === "de"
          ? "Docklinik – die digitale Brücke zwischen Ärzten und Kliniken."
          : "Docklinik – the digital bridge between doctors and clinics."}
      </p>
    </div>
  );
}
