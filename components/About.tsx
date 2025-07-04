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
  subTitle: "DocKlinik – die digitale Brücke zwischen Ärzten und Kliniken!",
  description:
    "DocKlinik ist eine Self-Service-Jobplattform, die Kliniken und Ärztinnen/Ärzte schnell, transparent und vertrauensvoll miteinander verbindet. Vom Ausschreiben offener Stellen bis zur Entdeckung idealer Karriereschritte optimieren wir jeden Prozess – damit medizinisches Fachpersonal weniger Zeit mit Suchen und mehr Zeit mit Heilen verbringt.",
  subTitle2:
    "DocKlinik – Die innovative Plattform, die Kliniken und Ärzte verbindet",
  description2:
    "In der heutigen schnelllebigen Gesundheitswelt ist es wichtiger denn je, den richtigen Arzt am richtigen Ort schnell und unkompliziert zu finden. DocKlinik macht genau das möglich – und zwar auf einer einzigen, übersichtlichen Plattform.",
  description3:
    "Ob Kliniken, die qualifizierte Fachkräfte suchen, oder Ärztinnen und Ärzte, die ihre nächste Herausforderung finden möchten: Bei DocKlinik treffen Angebot und Nachfrage direkt und transparent aufeinander. Unsere smarte Plattform erleichtert die Suche, vermittelt passgenau und schafft so neue Möglichkeiten für beide Seiten.",
  description4:
    "Mit DocKlinik sparen Sie wertvolle Zeit und Ressourcen, erhöhen die Sichtbarkeit Ihrer Stellenangebote oder Ihres beruflichen Profils und profitieren von einer starken Community im Gesundheitswesen. Innovation trifft hier auf Vertrauen – für eine bessere Vernetzung und eine effektivere Zusammenarbeit.",
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
    "Zusammenkommen ist ein Anfang; Zusammenbleiben ist ein Fortschritt; Zusammenarbeiten ist ein Erfolg.",
  quoteAuthor: "Henry Ford",
  quoteAuthorTitle: "Gründer von Ford",
};

const enContent = {
  language: "en",
  title: "DocKlinik",
  subTitle: "DocKlinik – the digital bridge between doctors and clinics!",
  description:
    "DocKlinik is a self-service job platform that bridges clinics and doctors with speed, transparency, and trust. From posting open positions to discovering ideal career moves, we streamline every step—so healthcare professionals spend less time searching and more time healing.",
  subTitle2:
    "DocKlinik – the innovative platform that connects clinics and doctors",
  description2:
    "In today’s fast-moving healthcare world, quickly and effortlessly finding the right doctor in the right place has never been more important. DocKlinik makes this possible on a single, clear-cut platform.",
  description3:
    "Whether you’re a clinic searching for qualified specialists or a physician looking for your next challenge, DocKlinik brings supply and demand together directly and transparently. Our smart platform streamlines the search process, matches the perfect candidates, and opens new opportunities for both sides.",
  description4:
    "With DocKlinik you save valuable time and resources, boost the visibility of your job postings or professional profile, and benefit from a strong community within the healthcare sector. Here, innovation meets trust—enabling better networking and more effective collaboration.",
  list1Title: "Smart matching engine.",
  list1Description:
    "Proprietary algorithms surface the best doctor–clinic pairs in seconds, saving both sides countless hours.",
  list2Title: "Compliance & data privacy.",
  list2Description:
    "Built to meet rigorous GDPR and healthcare-specific standards, safeguarding every credential and conversation.",
  list3Title: "Real-time dashboards.",
  list3Description:
    "Transparent pipelines give clinics and doctors full control, from application to contract signature.",
  list4Title: "Looking ahead",
  list4Description:
    "AI-powered credential verification, video interviewing, and cross-border hiring support are on the way—so you can focus on medicine while we handle what's next.",
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
                    width={100}
                    height={100}
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
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                {content.subTitle2}
              </h2>
              <br />
              <p>{content.description2}</p>
              <br />
              <p>{content.description3}</p>
              <br />
              <p>{content.description4}</p>
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
