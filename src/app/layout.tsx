import type { Metadata } from "next";
import "./globals.css";
import { oswald } from "@/fonts/oswald";
import TopMenu from "@/components/shared/menu/TopMenu";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
  metadataBase: new URL('https://https://www.cabinetdentaire-lenvolee.fr'),
  icons: {
    icon: "https://zupimages.net/up/24/20/tzxo.png",
  },
  description: "Cabinet dentaire L'Envolée autour de Montpellier, à Castelnau-le-lez",
  openGraph: {
    title: "Cabinet dentaire L'Envolée autour de Montpellier, à Castelnau-le-lez - Dr. Sylvie Ma-Francin",
    description: "Cabinet dentaire L'Envolée autour de Montpellier, à Castelnau-le-lez - Dr. Sylvie Ma-Francin & Dr Quentin Lupi - Pour vos soins dentaires et l'esthétique du sourire.",
    images: ["https://zupimages.net/up/24/20/d5p7.jpg"],
    type: "website",
    locale: "fr"
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <body className={`${oswald.className} relative`}>
        <TopMenu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
