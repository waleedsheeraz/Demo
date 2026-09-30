import { Fraunces, Sora } from "next/font/google";
import "@/styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${fraunces.variable} ${sora.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
