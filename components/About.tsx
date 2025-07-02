"use client";
import React, { useState, useEffect } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Image from "next/image";

const deContent = {
  language: "de",
  title: "DocKlinik",
  subTitle: "Einstellen mit Vertrauen",
  description:
    "DocKlinik ist eine Self-Service-Jobplattform, die Kliniken und Ärztinnen/Ärzte schnell, transparent und vertrauensvoll miteinander verbindet. Vom Ausschreiben offener Stellen bis zur Entdeckung idealer Karriereschritte optimieren wir jeden Prozess – damit medizinisches Fachpersonal weniger Zeit mit Suchen und mehr Zeit mit Heilen verbringt.",
  description2:
    "Wir befähigen Kliniken, selbstbewusst einzustellen, und unterstützen Ärztinnen/Ärzte dabei, ihre Laufbahn voranzubringen – mit einer reibungslosen, daten­getriebenen Recruiting-Erfahrung, die speziell auf die Anforderungen des Gesundheitswesens zugeschnitten ist. Legen Sie ein Profil an, definieren Sie Ihre Präferenzen und lassen Sie unsere intelligente Matching-Engine den Rest erledigen. Kliniken veröffentlichen detaillierte Stellen, Ärztinnen/Ärzte präsentieren ihre Expertise, und unsere Plattform verbindet beide Seiten in Echtzeit.",
  list1Title: "Intelligente Matching-Engine.",
  list1Description:
    "Proprietäre Algorithmen finden in Sekundenschnelle die besten Arzt-Klinik-Paare und sparen beiden Seiten unzählige Stunden.",
  list2Title: "Compliance & Datenschutz.",
  list2Description:
    "Entwickelt, um strenge DSGVO- und gesundheits­spezifische Standards zu erfüllen und jede Qualifikation sowie jedes Gespräch zu schützen.",
  list3Title: "Dashboards in Echtzeit.",
  list3Description:
    "Transparente Pipelines geben Kliniken und Ärztinnen/Ärzten von der Bewerbung bis zur Vertrags­unterzeichnung volle Kontrolle.",
  list4Title: "Blick nach vorn",
  list4Description:
    "KI-gestützte Zeugnisprüfung, Video-Interviews und Unterstützung bei grenz­überschreitender Einstellung sind in Arbeit – damit Sie sich auf die Medizin konzentrieren können, während wir den Rest übernehmen.",
  quote:
    "Zusammenkommen ist ein Anfang; Zusammenbleiben ist Fortschritt; Zusammenarbeiten ist Erfolg.",
  quoteAuthor: "Henry Ford",
  quoteAuthorTitle: "Gründer von Ford",
};

const enContent = {
  language: "en",
  title: "DocKlinik",
  subTitle: "Hire confidently",
  description:
    "DocKlinik is a self‑service job platform that bridges clinics and doctors with speed, transparency, and trust. From posting open positions to discovering ideal career moves, we streamline every step—so healthcare professionals spend less time searching and more time healing.",
  description2:
    "We empower clinics to hire confidently and doctors to advance their careers—by delivering a frictionless, data‑driven hiring experience built for the unique demands of healthcare. Create a profile, set your preferences, and let our smart matching engine do the rest. Clinics post detailed roles, doctors showcase expertise, and our platform connects both sides in real time.",
  list1Title: "Smart matching engine.",
  list1Description:
    "Proprietary algorithms surface the best doctor–clinic pairs in seconds, saving both sides countless hours.",
  list2Title: "Compliance & data privacy.",
  list2Description:
    "Built to meet rigorous GDPR and healthcare‑specific standards, safeguarding every credential and conversation.",
  list3Title: "Real‑time dashboards.",
  list3Description:
    "Transparent pipelines give clinics and doctors full control, from application to contract signature.",
  list4Title: "Looking ahead",
  list4Description:
    "AI‑powered credential verification, video interviewing, and cross‑border hiring support are on the way—so you can focus on medicine while we handle what's next.",
  quote:
    "Coming together is a beginning; keeping together is progress; working together is success.",
  quoteAuthor: "Henry Ford",
  quoteAuthorTitle: "Founder of Ford",
};

export default function About() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isDe = pathname.includes("de");
  const content = isDe ? deContent : enContent;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar theme="light" />
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
            }}
            className="aspect-801/1036 w-200.25 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base/7 font-semibold text-indigo-600">
              {content.subTitle}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-6 text-xl/8 text-gray-700">
              {content.description}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg
                aria-hidden="true"
                className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
              >
                <defs>
                  <pattern
                    id="quote-pattern"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#quote-pattern)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                  <p>{content.quote}</p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <Image
                    alt=""
                    src="/henry.jpg"
                    className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">
                      {content.quoteAuthor}
                    </div>
                    <div className="text-gray-600">
                      {content.quoteAuthorTitle}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
              <p>{content.description}</p>
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      {content.list1Title}
                    </strong>{" "}
                    {content.list1Description}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      {content.list2Title}
                    </strong>{" "}
                    {content.list2Description}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      {content.list3Title}
                    </strong>{" "}
                    {content.list3Description}
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                {content.list4Title}
              </h2>
              <p className="mt-6">{content.list4Description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
