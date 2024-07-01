import Nav from "@components/components/Nav";
import LayoutWrapper from "@components/components/LayoutWrapper";
import "@components/styles/globals.css";
export const metadata = {
  title: "Blind Squirrel",
  description: "Blind Squirrel Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/d5e576d269.js"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body>
        <LayoutWrapper>
          <Nav />
          <main>{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
