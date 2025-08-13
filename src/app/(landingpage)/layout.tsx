
import Landingpage from "../components/landingpage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Landingpage/>
      {children}
    </>
  );
}
