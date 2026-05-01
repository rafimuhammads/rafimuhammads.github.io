import "./globals.css";

export const metadata = {
  title: "Rafi Muhammad Shidqi | Portfolio",
  description: "NOC Engineer & Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}