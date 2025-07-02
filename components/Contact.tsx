"use client";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const deContent = {
  language: "de",
  title: "Kontakt",
  description:
    "Ob Sie Fragen haben, Partnerschaftsanfragen oder einfach nur informiert werden möchten, füllen Sie das Formular rechts aus oder erreichen Sie uns direkt über die untenstehenden Kontaktdaten.",
  address: "Hauptzentrale Kerpener Str. 154, 50170 Kerpen, Germany",
  phone: "Telefon",
  email: "E-Mail",
  fullName: "Vollständiger Name",
  emailPlaceholder: "ihre.email@beispiel.de",
  phonePlaceholder: "+49 123 456789",
  messagePlaceholder: "Ihre Nachricht hier...",
  message: "Nachricht senden",
  sendMessage: "Nachricht senden",
  sending: "Wird gesendet...",
  send: "Absenden",
  success: "Nachricht erfolgreich gesendet!",
  error: "Fehler beim Senden der Nachricht.",
  contactPhone: "+49 2273 9510550",
  contactEmail: "info@docklinik.de",
};

const enContent = {
  language: "en",
  title: "Get in touch",
  description:
    "Whether you have questions, partnership inquiries, or just want to be notified, fill out the form on the right or reach us directly via the details below.",
  address: "Hauptzentrale Kerpener Str. 154, 50170 Kerpen, Germany",
  phone: "Phone",
  email: "E-Mail",
  fullName: "Your Name",
  emailPlaceholder: "your.email@gmail.com",
  phonePlaceholder: "+49 123 456789",
  messagePlaceholder: "Your message here...",
  message: "Message",
  sendMessage: "Send Message",
  sending: "Sending...",
  send: "Send",
  success: "Message sent successfully!",
  error: "Error sending message.",
  contactPhone: "+49 2273 9510550",
  contactEmail: "info@docklinik.de",
};

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const language = pathname.split("/")[1];
  const content = language === "en" ? enContent : deContent;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    console.log("name", formData.fullName);
    console.log("email", formData.email);
    console.log("phone", formData.phoneNumber);
    console.log("message", formData.message);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar theme="light" />
      <div className="relative isolate bg-white ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
                >
                  <defs>
                    <pattern
                      x="100%"
                      y={-1}
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    fill="white"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                  />
                </svg>
              </div>

              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {content.title}
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                {content.description}
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>{content.address}</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{content.contactPhone}</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <span className="hover:text-gray-900">
                      {content.contactPhone}
                    </span>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{content.contactEmail}</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <span className="hover:text-gray-900">
                      {content.contactEmail}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">{content.success}</p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">{content.error}</p>
                </div>
              )}
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    {content.fullName}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={content.fullName}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    {content.email}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={content.emailPlaceholder}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    {content.phone}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder={content.phonePlaceholder}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    {content.message}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={content.messagePlaceholder}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? content.sending : content.send}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
