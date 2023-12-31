import MainHeader from "@/components/main-header";
import "./globals.css";
import SVGHeader from "@/components/svg-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SVGHeader />
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
