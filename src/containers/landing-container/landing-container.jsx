import React from "react";
import { Image } from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../utils";

import styles from "./landing-container.module.scss";

const CDN_URL = getCdnUrl("/landing");

const splashImage = {
  alt: "Flowers on the front outdoor porch",
  src: `${CDN_URL}/landing-container__front-porch.jpg`,
};
const outdoorImage = {
  alt: "Picture of the back of facility",
  src: `${CDN_URL}/landing-container__splash.jpg`,
};

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <Image
      className={styles.landingContainer__splashImage}
      alt={splashImage.alt}
      src={splashImage.src}
    />
    <div className={styles.landingContainer__content}>
      <h1 className={styles.landingContainer__contentTitle}>
        Life is better at Lawndale Manor
      </h1>
      <p>
        Lawndale Manor of Garner is a licensed assisted living community. You
        will find days with fewer worries, more options, and a community that
        feels just like home. Find a sense of belonging in our community of
        friends by&nbsp;
        <Hyperlink href="/daily-life" title="learning more here." />
      </p>
    </div>
    <Image
      className={styles.landingContainer__secondImage}
      alt={outdoorImage.alt}
      src={outdoorImage.src}
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

export default LandingContainer;
