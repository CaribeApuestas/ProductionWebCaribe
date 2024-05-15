import { Inter, Lusitana, Montserrat } from "next/font/google";
import localFont from 'next/font/local';

export const montserrat = Montserrat({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] });


export const gotham = localFont({
    src: [
      {
        path: '../../../public/fonts/GothamBlack.otf',
        weight: '700',
      },
      {
        path: '../../../public/fonts/GothamLight.otf',
        weight: '400',
      },
      {
        path: '../../../public/fonts/GothamThin.otf',
        weight: '200',
      }
    ],
  });