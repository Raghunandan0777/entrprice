import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Accredian Enterprise — Corporate Training Solutions in Data Science & AI",
  description:
    "Accredian delivers customized corporate training programs in Data Science, AI/ML, Product Management, and more. Trusted by 200+ enterprises. Upskill your workforce with IIT/IIM faculty.",
  keywords:
    "corporate training, data science training, AI training, ML training, enterprise learning, Accredian, upskilling",
  openGraph: {
    title: "Accredian Enterprise — Corporate Training Solutions",
    description: "Customized training programs for enterprise teams in Data Science, AI, and more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
