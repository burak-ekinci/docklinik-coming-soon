import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docklinik",
  alternates: {
    canonical: "/de",
    languages: {
      de: "/de",
    },
  },
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
