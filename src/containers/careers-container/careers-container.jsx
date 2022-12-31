import React from "react";
import { Hyperlink } from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";
import { ApplicationOnline } from "../../components/application-online";
import { careersSplashImage } from "../../content/images";

import styles from "./careers-container.module.scss";

const CareersContainer = () => (
  <div className={styles.careersContainer}>
    <Image
      className={styles.careersContainer__splashImage}
      alt={careersSplashImage.alt}
      src={careersSplashImage.src}
    />
    <div className={styles.careersContainer__header}>
      <h1>Join our team</h1>
      <p>
        Submit your application by applying online or you may download an
        application below and fill it out. To submit the downloaded application,
        please either bring it by the facility or scan and upload below.
      </p>
      <hr />
    </div>
    <div className={styles.careersContainer__content}>
      <ApplicationOnline />
      <hr />
      <Hyperlink
        href="/apply"
        title="Upload Paper Application"
        className={styles.careersContainer__contentLink}
      />
    </div>
  </div>
);

export { CareersContainer };
