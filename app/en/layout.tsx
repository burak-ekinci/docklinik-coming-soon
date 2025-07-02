import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docklinik",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
