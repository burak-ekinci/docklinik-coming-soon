"use client";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

function generateCaptcha() {
  // Basit toplama işlemi
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${a} + ${b} = ?`,
    answer: (a + b).toString(),
  };
}

export default function NotifyMe({ lang }: { lang: "en" | "de" }) {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "loading"
  >("idle");
  const [message, setMessage] = useState<string>("");

  // Captcha ile ilgili state'ler
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<{
    question: string;
    answer: string;
  } | null>(null);
  const [captchaInput, setCaptchaInput] = useState<string>("");
  const [captchaError, setCaptchaError] = useState<string>("");
  const [captchaPassed, setCaptchaPassed] = useState<boolean>(false);

  // Captcha'yı başlat
  const startCaptcha = () => {
    setCaptcha(generateCaptcha());
    setShowCaptcha(true);
    setCaptchaInput("");
    setCaptchaError("");
  };

  // Captcha doğrulama
  const handleCaptchaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captcha && captchaInput.trim() === captcha.answer) {
      setShowCaptcha(false);
      setCaptcha(null);
      setCaptchaInput("");
      setCaptchaError("");
      setCaptchaPassed(true);
    } else {
      setCaptchaError(
        lang === "de"
          ? "Falsche Antwort, bitte versuchen Sie es erneut."
          : "Verification failed, please try again."
      );
    }
  };

  // Asıl gönderme işlemi
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setStatus("loading");
    setMessage("");
    if (!email || email.trim() === "") {
      setStatus("error");
      setMessage(
        lang === "de"
          ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
          : "Please enter a valid email address."
      );
      return;
    }
    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok && data.valid) {
        setStatus("success");
        setMessage(
          lang === "de"
            ? "Erfolgreich hinzugefügt! Sie werden benachrichtigt."
            : "Successfully added! You will be notified."
        );
        setEmail("");
        setCaptchaPassed(false);
      } else {
        setStatus("error");
        setMessage(
          data.message ||
            (lang === "de"
              ? "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
              : "An error occurred. Please try again.")
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        lang === "de"
          ? "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." + error
          : "An error occurred. Please try again." + error
      );
    }
  };

  return (
    <div>
      {/* Ekranda ilk başta buton */}
      {open !== true ? (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="px-6 py-2 lg:py-3 bg-white text-gray-900 font-semibold rounded-md shadow hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          {lang === "de" ? "Benachrichtige mich" : "Notify me"}
        </button>
      ) : (
        <form
          className="flex flex-col w-full gap-2 lg:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            // E-posta kontrolü
            if (!email || email.trim() === "") {
              setStatus("error");
              setMessage(
                lang === "de"
                  ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
                  : "Please enter a valid email address."
              );
              return;
            }
            // Eğer captcha daha geçilmediyse, captcha popup aç
            if (!captchaPassed) {
              startCaptcha();
            } else {
              handleSubmit();
            }
          }}
        >
          <div className="relative w-full">
            <EnvelopeIcon
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder={
                lang === "de" ? "Ihre E-Mail-Adresse" : "Your email address"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md bg-white py-2 lg:py-3 pl-10 pr-3 text-base text-gray-900 shadow-sm ring-1 ring-offset-0 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm"
              required
              disabled={captchaPassed && status === "loading"}
            />
          </div>
          {/* Captcha geçilmediyse Send butonu gösterme */}
          {captchaPassed ? (
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full lg:w-auto px-6 py-2 lg:py-2 bg-white text-gray-900 font-semibold rounded-md shadow hover:bg-gray-700 hover:text-white transition-all duration-300 disabled:opacity-60"
            >
              {status === "loading" && lang === "de"
                ? "Senden..."
                : status === "loading" && lang === "en"
                ? "Sending..."
                : lang === "de"
                ? "Senden"
                : "Send"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                // E-posta kontrolü
                if (!email || email.trim() === "") {
                  setStatus("error");
                  setMessage(
                    lang === "de"
                      ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
                      : "Please enter a valid email address."
                  );
                  return;
                }
                startCaptcha();
              }}
              className="w-full lg:w-auto px-6 py-2 lg:py-2 bg-white text-gray-900 font-semibold rounded-md shadow hover:bg-gray-700 hover:text-white transition-all duration-300"
            >
              {lang === "de" ? "Verifizieren" : "Verify"}
            </button>
          )}
        </form>
      )}

      {/* Captcha Pop-up */}
      {showCaptcha && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px]">
            <form onSubmit={handleCaptchaSubmit}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {lang === "de"
                  ? "Bitte beantworten Sie die Verifizierung:"
                  : "Please answer the verification question:"}
              </label>
              <div className="flex justify-center pt-3 pb-1 items-center gap-2  ">
                <span className="font-semibold text-gray-900 text-lg">
                  {captcha?.question}
                </span>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="block w-24 rounded-md bg-white py-2 pl-3 pr-3 text-base text-gray-900 shadow-sm ring-1 ring-offset-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm"
                  required
                  autoFocus
                />
              </div>
              {captchaError && (
                <div className="mb-5 text-red-600 text-sm text-center">
                  {captchaError}
                </div>
              )}
              <div className="flex justify-around gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowCaptcha(false);
                    setCaptchaInput("");
                    setCaptchaError("");
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  {lang === "de" ? "Abbrechen" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  {lang === "de" ? "Verifizieren" : "Verify"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {message && (
        <div
          className={`mt-3 px-4 py-2 rounded-md text-sm ${
            status === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : status === "error"
              ? "bg-red-50 text-red-800 border border-red-200"
              : ""
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
