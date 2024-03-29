import React from "react";
import { Image } from "../../atoms/image";
import { activities, activitiesImages } from "../../content/activities";

import styles from "./activities-container.module.scss";

const ActivitiesContainer = () => (
  <div className={styles.activitiesContainer}>
    <div className={styles.activitiesContainer__header}>
      <h1 className={styles.activitiesContainer__headerTitle}>
        Making new memories
      </h1>
      <p>
        By creating new memories together, we experience close connections that
        feel like family. At Lawndale Manor, you will have the opportunity to
        find the balance that&apos;s right for you. This might include taking
        part in fitness classes, art activities, or our popular cooking classes.
      </p>
    </div>
    <div className={styles.activitiesContainer__images}>
      {activitiesImages.map((eventImage, index) => (
        <Image
          className={styles.activitiesContainer__image}
          key={index}
          alt={eventImage.alt}
          src={eventImage.src}
        />
      ))}
    </div>
    <hr />
    <div className={styles.activitiesContainer__activities}>
      <h2 className={styles.activitiesContainer__secTitle}>Activities</h2>
      <ul className={styles.activitiesContainer__list}>
        {activities.map((activity, index) => (
          <li key={index} className={styles.activitiesContainer__listItem}>
            {activity}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export { ActivitiesContainer };
