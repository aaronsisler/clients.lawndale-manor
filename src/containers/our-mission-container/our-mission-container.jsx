import React from "react";
import { Image } from "../../atoms/image";
import { Hyperlink } from "../../atoms/hyperlink";

import { ourMissionSplashImage } from "../../content/images";

import styles from "./our-mission-container.module.scss";

const OurMissionContainer = () => (
  <div className={styles.ourMissionContainer}>
    <Image
      className={styles.ourMissionContainer__headerImage}
      alt={ourMissionSplashImage.alt}
      src={ourMissionSplashImage.src}
    />
    <div className={styles.ourMissionContainer__content}>
      <h1 className={styles.ourMissionContainer__title}>
        Our mission is caring for you.
      </h1>
      <p>
        At Lawndale Manor, we strive to create an atmosphere of comfort and
        security while providing the best possible care for each individual. We
        promote independence and encouragement to live each day to the fullest.
      </p>
      <p>
        We choose to view ourselves as a community. We do not view ourselves as
        a “facility” but as a home to our residents. We strive to provide our
        residents a safe, secure environment with individualized assistance
        based on health care and person care needs, while offering the most
        independence possible.&nbsp;
        <Hyperlink href="/leadership" title="Meet our team" />
      </p>
      <h2 className={styles.ourMissionContainer__secTitle}>
        Leading by example
      </h2>
      <p>
        We take pride in the fact that our staff within memory care do not just
        simply meet state minimum requirements for training. It is Lawndale
        Manor protocol that employees continually exhibit they have retained the
        information and can perform proper approaches and techniques with our
        residents.
      </p>
    </div>
  </div>
);

export { OurMissionContainer };
