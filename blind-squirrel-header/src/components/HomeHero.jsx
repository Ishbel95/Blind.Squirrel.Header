"use client";
import {
  homeHeroContainer,
  homeHeroInner,
  homeHeroHeadingOne,
  homeHeroHeadingTwo,
  homeHeroHeadingThree,
  homeHeroTextImageButtonContainer,
  homeHeroTextImageButtonInner,
  homeHeroSmallText,
  homeHeroImage,
  homeHeroImageOverlay,
  homeHeroButtonContainer,
  homeHeroButtonInner,
  homeHeroOrangeButton,
} from "@components/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@components/images/ragnarok.png";

export default function HomeHero() {
  return (
    <div className={homeHeroContainer}>
      <div className={homeHeroInner}>
        <h1>
          <span className={homeHeroHeadingOne}>TELL </span>
          <span className={homeHeroHeadingTwo}> BIG </span>
          <span className={homeHeroHeadingThree}>TAILS</span>
        </h1>
        <div className={homeHeroTextImageButtonContainer}>
          <div className={homeHeroTextImageButtonInner}>
            <div className={homeHeroSmallText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur. Vestibulum fringilla
                est in mauris auctor,
              </p>
            </div>
            <div className={homeHeroImage}>
              <div className={homeHeroImageOverlay}></div>
              <Image
                src={HeroImage}
                alt="god of thor at ragnarok"
                height={0}
                width={0}
                priority
              />
            </div>{" "}
            <div className={homeHeroButtonContainer}>
              <div className={homeHeroButtonInner}>
                <Link href="/" title="Learn more" aria-label="Learn more">
                  Learn more<i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="/" title="Contact us" aria-label="Contact us">
                  Contact us
                </Link>
              </div>
              <div className={homeHeroOrangeButton}>
                <Link href="/" title="home" aria-label="home">
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
