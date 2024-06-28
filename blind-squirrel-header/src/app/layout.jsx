import Nav from "@components/components/Nav";

export const metadata = {
  title: "Blind Squirrel",
  description: "Blind Squirrel Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
