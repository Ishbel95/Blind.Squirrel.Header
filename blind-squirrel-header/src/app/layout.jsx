import styles from "@components/styles/Home.module.scss";
import Nav from "@components/components/Nav";
import LayoutWrapper from "@components/components/LayoutWrapper";

export const metadata = {
  title: "Blind Squirrel",
  description: "Blind Squirrel Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" styles={styles.rootContainer}>
      <head>
        <script
          src="https://kit.fontawesome.com/d5e576d269.js"
          crossorigin="anonymous"
        ></script>
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
