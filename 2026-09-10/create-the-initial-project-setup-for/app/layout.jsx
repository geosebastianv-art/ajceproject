import "./globals.css";

export const metadata = {
  title: "Amal Jyothi College of Engineering",
  description: "Amal Jyothi College of Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
