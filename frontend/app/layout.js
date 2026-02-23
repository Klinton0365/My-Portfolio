import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Klinton Portfolio",
    description: "I am a Software Engineer based in Bangalore, India, with professional experience in building secure, scalable web applications. I have contributed to eCommerce startups, SaaS platforms, and multi-domain web solutions, delivering robust backend architectures, RESTful APIs, and seamless frontend experiences using Laravel, React JS, and modern full-stack technologies.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}
