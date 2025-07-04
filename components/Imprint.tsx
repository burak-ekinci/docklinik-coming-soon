"use client";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const enContent = {
  title: "Imprint",
  subTitle: "Information according to § 5 TMG:",

  companyName: "Company Name",
  companyNameAnswer: "HR digi. GmbH",

  address: "Address",
  addressAnswer: "Kerpener Str. 154, 50170 Kerpen, Germany",

  commercialRegister: "Commercial Register",
  commercialRegisterAnswer: "District Court of Cologne, HRB 109982",

  taxNumber: "Tax Number",
  taxNumberAnswer: "203/5753/1355",

  representative:
    "Managing Director / Person Responsible according to § 5 TMG & § 55 RStV",
  representativeAnswer: "Hakan Evranli",

  email: "Email",
  emailAnswer: "info@hr-digi.de",

  phone: "Phone",
  phoneAnswer: "+49 2273 951055-0",

  subTitle2: "Disclaimer of Liability",
  desc2:
    "HR digi. GmbH assumes no liability for the correctness, completeness, or up-to-dateness of the information provided. Liability claims against HR digi. GmbH related to material or immaterial damages caused by the use or non-use of the information provided are excluded, unless there is demonstrable intentional or grossly negligent fault. All offers are non-binding and subject to change without notice.",
  subTitle3: "External Links",
  desc3:
    "HR digi. GmbH accepts no responsibility for external links. At the time of linking, no illegal content was apparent on the linked pages. HR digi. GmbH has no influence on the current and future design, content, or authorship of linked sites.",
  subTitle4: "Copyright",
  desc4:
    "The content and works on these pages created by the website operator are subject to German copyright law. Reproduction, editing, distribution, or any kind of use outside the limits of copyright law requires the prior written consent of the respective author or creator. Protected trademarks and brand names are subject to the ownership rights of their respective registered owners.",
  subTitle5: "Data Protection",
  desc5:
    "The submission of personal or business data (email addresses, names, addresses) takes place on a voluntary basis. Such data will only be stored and processed to handle inquiries. Please note that data transmission via email may be unsecured and subject to vulnerabilities.",
  subTitle6: "Legal Validity",
  desc6:
    "If individual provisions of this text are invalid or incomplete, the validity of the remaining parts remains unaffected.",
};

const deContent = {
  title: "Impressum",
  subTitle: "Angaben gemäß § 5 TMG:",

  companyName: "Firmenname",
  companyNameAnswer: "HR digi. GmbH",

  address: "Adresse",
  addressAnswer: "Kerpener Str. 154, 50170 Kerpen, Deutschland",

  commercialRegister: "Handelsregister",
  commercialRegisterAnswer: "Amtsgericht Köln, HRB 109982",

  taxNumber: "Steuer-Nr.",
  taxNumberAnswer: "203/5753/1355",

  representative:
    "Vertretungsberechtigter Geschäftsführer / Verantwortlich gemäß § 5 TMG & § 55 RStV",
  representativeAnswer: "Hakan Evranli",

  email: "E-Mail",
  emailAnswer: "info@hr-digi.de",

  phone: "Telefon",
  phoneAnswer: "+49 2273 951055-0",

  subTitle2: "Haftungsausschluss",
  desc2:
    "Die HR digi. GmbH übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen. Haftungsansprüche gegen HR digi. GmbH, die sich auf Schäden materieller oder ideeller Art beziehen, sind grundsätzlich ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Die HR digi. GmbH behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen oder zu löschen.",
  subTitle3: "Externe Links",
  desc3:
    "Für Inhalte externer Links übernimmt die HR digi. GmbH keine Haftung. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Auf die zukünftige Gestaltung, Inhalte oder Urheberschaft der verlinkten Seiten hat die HR digi. GmbH keinen Einfluss.",
  subTitle4: "Urheberrecht",
  desc4:
    "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Geschützte Marken und Warenzeichen unterliegen den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer.",
  subTitle5: "Datenschutz",
  desc5:
    "Die Preisgabe persönlicher oder geschäftlicher Daten (E-Mail-Adressen, Namen, Anschriften) erfolgt seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderten Informationen ist nicht gestattet. Es wird darauf hingewiesen, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.",
  subTitle6: "Rechtswirksamkeit dieses Haftungsausschlusses",
  desc6:
    "Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten. Sofern einzelne Formulierungen oder Teile dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Impressums in ihrem Inhalt und ihrer Gültigkeit davon unberührt.",
};

const Imprint = () => {
  const pathname = usePathname();
  const lang = pathname.includes("en") ? "en" : "de";
  const content = lang === "de" ? deContent : enContent;
  return (
    <>
      <Navbar theme="light" />

      {/* üstteki tasarımı beğenmedim alttaki tasarıma üstteki yazıları entegre edilecek */}
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {content.title}
          </h1>
          <div className="px-4 mt-10 sm:px-0">
            <h2 className="text-base/7 font-semibold text-gray-900">
              {content.subTitle}
            </h2>
          </div>
          <div className="mt-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.companyName}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.companyNameAnswer}
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.address}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.addressAnswer}
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.commercialRegister}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.commercialRegisterAnswer}
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.taxNumber}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.taxNumberAnswer}
                </dd>
              </div>
              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.representative}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.representativeAnswer}
                </dd>
              </div>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.email}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.emailAnswer}
                </dd>
              </div>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.phone}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.phoneAnswer}
                </dd>
              </div>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.subTitle2}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.desc2}
                </dd>
              </div>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.subTitle3}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.desc3}
                </dd>
              </div>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.subTitle4}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.desc4}
                </dd>
              </div>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.subTitle5}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.desc5}
                </dd>
              </div>

              <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                <dt className="text-sm/6 font-medium text-gray-900">
                  {content.subTitle6}
                </dt>
                <dd className="mt-1 text-sm/6 text-gray-700 sm:mt-2">
                  {content.desc6}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imprint;
