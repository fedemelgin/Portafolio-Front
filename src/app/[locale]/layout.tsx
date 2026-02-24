import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google"; // Importa tus fuentes aquí
import "../globals.css"; // Sube un nivel para llegar a globals
import SvgSprite from "../SvgSprite"; // Ajusta la ruta

const geistSans = Geist({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.className} min-h-screen bg-gradient-to-b from-gray-950 to-gray-900`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <SvgSprite />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
