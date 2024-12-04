import "./globals.css";
import { merriweather } from "./ui/fonts";


export const metadata = {
  title: "Erick Galeana - Abogado en Acapulco | Asesoría Jurídica Personalizada",
  description: "Erick Galeana ofrece servicios jurídicos especializados en derecho familiar, civil, mercantil y laboral en Acapulco. Asesoría legal personalizada para garantizar la justicia y el progreso en cada caso.",
  keywords: "abogado en Acapulco, derecho familiar, derecho civil, derecho mercantil, derecho laboral, divorcios, pensiones alimenticias, sucesiones, guarda y custodia, amparos, asesoría legal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.className}`}
      >
        {children}
      </body>
    </html>
  );
}
