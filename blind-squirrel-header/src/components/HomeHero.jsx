"use client";
import styles from "@components/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@components/images/ragnarok.png";

export default function HomeHero() {
  return (
    <div className={styles.homeHeroContainer}>
      <div className={styles.homeHeroInner}>
        <h1>
          <span className={styles.homeHeroHeadingOne}>TELL </span>
          <span className={styles.homeHeroHeadingTwo}> BIG </span>
          <span className={styles.homeHeroHeadingThree}>TAILS</span>
        </h1>
        <div className={styles.homeHeroTextImageButtonContainer}>
          <div className={styles.homeHeroTextImageButtonInner}>
            <div className={styles.homeHeroSmallText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur. Vestibulum fringilla
                est in mauris auctor,
              </p>
            </div>
            <div className={styles.homeHeroImage}>
              <div className={styles.homeHeroImageOverlay}></div>
              <Image
                src={HeroImage}
                alt="god of thor at ragnarok"
                height={0}
                width={0}
              />
            </div>{" "}
            <div className={styles.homeHeroButtonContainer}>
              <Link href="/" title="Learn more" aria-label="Learn more">
                Learn more<i class="fa-solid fa-arrow-right"></i>
              </Link>
              <Link href="/" title="Contact us" aria-label="Contact us">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.homeHeroBottomButtonContainer}>
          <Link href="/" title="home" aria-label="home">
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
