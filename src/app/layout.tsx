import type { Metadata } from "next";
import { gotham } from "./_ui/fonts";
import "./_ui/globals.css";
import 'normalize.css/normalize.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import QueryProvider from "@/context/QueryProvider";
import { Menu } from "./_ui/Menu";
import { TopHeader } from "./_ui/TopHeader";
import { StampsContainer } from "./_ui/StampsContainer";
import { SocialMediaContainer } from "./_ui/SocialMediaContainer";
import { NavigationFooterContainer } from "./_ui/NavigationFooterContainer";
import { FooterDetails } from "./_ui/FooterDetails";

export const metadata: Metadata = {
  title: "CaribeApuesta",
  /*es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar! */
  description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela, donde encontraras una variedad de opciones como apuestas deportivas, carreras de caballos nacionales e internacionales, tragamonedas, casino en vivo, entre otros juegos.",
  keywords: [
    'Apuestas deportivas',
    'Apuestas en vivo',
    'Apuestas en Venezuela',
    'Pronósticos deportivos',
    'Apuestas deportivas en línea en Venezuela',
    'Casino en línea',
    'Casino en línea en Venezuela',
    'Juegos de azar',
    'Hipódromo',
    'Carrera de caballos',
    'Apuestas Hípicas',
    'Caballos de carrera',
    'Resultados de carreras de caballos',
    'Tragamonedas',
    'Juegos',
    'Mejores apuestas deportivas en línea en Venezuela',
    'Tragamonedas emocionantes en CaribeApuesta',
  ],
  metadataBase: new URL("http://localhost:3000/"),
  openGraph: {
    title: "¡Te damos la bienvenida a CaribeApuesta!",
    description: "El sitio número uno de apuestas en Venezuela."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className={`${gotham.className} antialiased`} >
        <SessionAuthProvider> {/* nextAuth on client component */}
          <QueryProvider > {/* React Query on client component */}
            <header>
              <TopHeader />
              <Menu />
            </header>


            <main className="mainContent">
              {children}
            </main>


            <footer className="Layout_footer">

              <SocialMediaContainer />
              <NavigationFooterContainer />
              <StampsContainer />
              <FooterDetails />
              
            </footer>
            {/* Agregamos el nodo para el modal */}
            <div id="modal-root"></div>
          </QueryProvider>
        </SessionAuthProvider>
      </body>
    </html>
  );
} 
