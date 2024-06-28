"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@components/images/logo.png";
import styles from "@components/styles/Home.module.scss";
import { useState } from "react";
export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState();
  const navData = [
    {
      href: "/",
      text: "ABOUT",
    },
    {
      href: "/",
      text: "PROJECTS",
    },
    {
      href: "/",
      text: "CAREERS",
    },
    {
      href: "/",
      text: "NEWS",
    },
    {
      href: "/",
      text: "CONTACT US",
    },
  ];
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.navInner}>
          <div className={styles.navMobileContainer}>
            <div className={styles.navLogo}>
              <Image src={logo} />
            </div>
            <div
              className={`${styles.navBurgerContainer} ${
                navIsOpen && styles.navBurgerAnimate
              }`}
            >
              <button
                className={styles.navBurgerButton}
                onClick={() => setNavIsOpen(!navIsOpen)}
              >
                <span className={styles.navBurger}></span>
              </button>
            </div>
          </div>
          <div
            className={`${navIsOpen ? styles.navIsOpen : styles.navIsClosed}`}
          >
            <div className={styles.navLinksContainer}>
              {navData.map(({ href, text }, index) => {
                return (
                  <Link href={href} key={index}>
                    {text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
