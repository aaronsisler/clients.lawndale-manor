import React from "react";
import { Hyperlink } from "../../atoms/hyperlink";
import { Image } from "../../atoms/image";

import { whyAssistedLivingSplashImage } from "../../content/images";

import styles from "./why-assisted-living-container.module.scss";

const WhyAssistedLivingContainer = () => (
  <div className={styles.whyAssistedLivingContainer}>
    <Image
      className={styles.whyAssistedLivingContainer__splashImage}
      alt={whyAssistedLivingSplashImage.alt}
      src={whyAssistedLivingSplashImage.src}
    />
    <div className={styles.whyAssistedLivingContainer__content}>
      <h1 className={styles.whyAssistedLivingContainer__title}>
        What is assisted living?
      </h1>
      <p>
        Simply put, assisted living communities give older adults personalized
        care in a residential setting. They’re for seniors whose health or
        well-being requires a higher level of support, which is determined
        through a health assessment by the community according to state
        regulations. Assisted living also provides a healthy lifestyle and
        social engagement.
      </p>
      <h2 className={styles.whyAssistedLivingContainer__secTitle}>
        What can assisted living provide?
      </h2>
      <p>
        The most common assisted living services offered include medication
        management and assistance with using the bathroom, dressing, and
        grooming. Housekeeping, meals, laundry and transportation services are
        typically included. Staff is available 24/7 to help with safety, care
        and support. Residents are encouraged to bring furniture and personal
        items to make their new home feel, well, like home.
      </p>
      <p>
        Residents are assessed when they move in, so they can get an
        individualized service plan to meet specific needs and make their care
        truly personal. Some assisted living communities, such as Lawndale
        Manor, are also licensed to provide memory care. These will often have
        separate dining rooms and menus based on residents’ nutritional
        needs.&nbsp;
        <Hyperlink
          href="/assisted-living"
          title="Learn more about what we offer."
        />
      </p>
    </div>
  </div>
);

export { WhyAssistedLivingContainer };
