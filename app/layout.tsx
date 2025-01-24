import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import WixContextProvider from "./_context/WixContext";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <WixContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixContextProvider>
      </body>
    </html>
  );
}
