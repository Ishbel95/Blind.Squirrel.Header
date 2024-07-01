"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@components/images/logo.png";
import {
  header,
  navContainer,
  navInner,
  navMobileContainer,
  navLogo,
  navBurgerContainer,
  navBurgerAnimate,
  navBurgerButton,
  navBurger,
  navClosed,
  navOpen,
  navLinksContainer,
} from "@components/styles/Home.module.scss";
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
      <header className={header}>
        <nav className={navContainer}>
          <div className={navInner}>
            <div className={navMobileContainer}>
              <div className={navLogo}>
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
                className={`${navBurgerContainer} ${
                  navIsOpen && navBurgerAnimate
                }`}
              >
                <button
                  className={navBurgerButton}
                  onClick={() => setNavIsOpen(!navIsOpen)}
                >
                  <span className={navBurger}></span>
                </button>
              </div>
            </div>
            <div className={`${navIsOpen ? navOpen : navClosed}`}>
              <div className={navLinksContainer}>
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
