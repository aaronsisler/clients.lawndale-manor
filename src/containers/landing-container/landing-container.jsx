import React from "react";

import { Hyperlink } from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";

import {
  landingContainerSecondaryImage,
  landingContainerSplashImage,
} from "../../content/images";

import styles from "./landing-container.module.scss";

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <Image
      className={styles.landingContainer__splashImage}
      alt={landingContainerSplashImage.alt}
      src={landingContainerSplashImage.src}
    />
    <div className={styles.landingContainer__content}>
      <h1 className={styles.landingContainer__contentTitle}>
        Life is better at Lawndale Manor
      </h1>
      <p>
        Lawndale Manor, established since 1994, is a licensed assisted living
        facility located in the heart of Garner, North Carolina. We offer a
        wide-array of activities and services for residents to maintain a
        healthy lifestyle. We believe that seniors are owed the utmost respect
        for the lives they&apos;ve lived. We honor their wisdom and desire to
        serve them with dignity and respect thereby “Adding Life To Their
        Years.” Find a sense of belonging in our community of friends by&nbsp;
        <Hyperlink href="/daily-life" title="learning more here." />
      </p>
    </div>
    <Image
      className={styles.landingContainer__secondImage}
      alt={landingContainerSecondaryImage.alt}
      src={landingContainerSecondaryImage.src}
    />
    <div className={styles.landingContainer__content}>
      <h2 className={styles.landingContainer__contentSecTitle}>
        Not sure where to begin?
      </h2>
      <p>
        Sometimes it is hard to know what questions to even begin asking when it
        comes to the care of your loved ones. We are here to help you understand
        what we can provide and recommend&nbsp;
        <Hyperlink href="/why-assisted-living" title="starting here." />
      </p>
    </div>
  </div>
);

export { LandingContainer };
