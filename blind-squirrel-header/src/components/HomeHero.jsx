"use client";
import styles from "@components/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@components/images/ragnarok.png";
export default function HomeHero() {
  return (
    <div className={styles.homeHeroContainer}>
      <div className={styles.homeHeroInner}>
        <div className={styles.homeHeroSmallText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur. Vestibulum fringilla est in
            mauris auctor,
          </p>
        </div>
        <div className={styles.homeHeroHeadingImage}>
          <h1>
            Tell <span>Big</span> Tails
          </h1>
          <div className={styles.homeHeroImage}>
            <Image src={HeroImage} />
          </div>
        </div>
        <div className={styles.homeHeroButtonContainer}>
          <Link href="/">Learn more</Link>
          <Link href="/">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
