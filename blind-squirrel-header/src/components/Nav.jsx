"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@components/images/logo.png";
import styles from "@components/styles/Home.module.scss";
import { useState, useContext, useEffect } from "react";
import CountContext from "@components/context/CountContext";
export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState();
  const [showNav, setShowNav] = useState();
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
  const { count } = useContext(CountContext);
  useEffect(() => {
    count === 100 &&
      setTimeout(() => {
        setShowNav(true);
      }, 700);
  }, [count]);

  return (
    showNav && (
      <header className={styles.header}>
        <nav className={styles.navContainer}>
          <div className={styles.navInner}>
            <div className={styles.navMobileContainer}>
              <div className={styles.navLogo}>
                <Link href="/" onClick={() => setNavIsOpen(false)}>
                  <Image
                    src={logo}
                    alt="blind squirrel games logo"
                    height={0}
                    width={0}
                  />
                </Link>
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
                    <Link
                      href={href}
                      key={index}
                      aria-label={text}
                      title={text}
                    >
                      {text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  );
}
