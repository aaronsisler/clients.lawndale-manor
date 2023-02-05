import React from "react";
import { Image } from "../../atoms/image";
import { Hyperlink } from "../../atoms/hyperlink";
import { dailyLifeSplashImage } from "../../content/images";

import styles from "./daily-life-container.module.scss";

const DailyLifeContainer = () => (
  <div className={styles.dailyLifeContainer}>
    <Image
      className={styles.dailyLifeContainer__splashImage}
      alt={dailyLifeSplashImage.alt}
      src={dailyLifeSplashImage.src}
    />
    <div className={styles.dailyLifeContainer__content}>
      <h1 className={styles.dailyLifeContainer__title}>A day in the life</h1>
      <p>
        One of the most common questions seniors have about senior living is,
        “What am I going to do all day?” Seniors fear they&apos;ll be bored or
        lonely at the community, or that they won&apos;t have the freedom to
        choose what they&apos;ll do each day. We are here to put all those
        worries to rest.
      </p>
      <p>
        Our Assisted Living program is designed to provide the perfect balance
        of support and independence. Whether you&apos;re a social butterfly or
        prefer the peace and quiet of your own space, our community provides
        life engagement programs to meet your needs.
      </p>
      <p>
        Live your life as you always have… minus the mundane. No daily upkeep,
        maintenance calls or repairs. Simply enjoy the most remarkable parts of
        the life you lead.
      </p>
      <hr />
      <div className={styles.dailyLifeContainer__topic}>
        <h2 className={styles.dailyLifeContainer__topicTitle}>
          Engaging Activities
        </h2>
        <p className={styles.dailyLifeContainer__topicContent}>
          Our community offers residents a personalized monthly calendar of
          events. The available activities are selected based on the interests
          of each senior. They are designed to be enriching and fun for the
          residents. Activities are scheduled around-the-clock, so your loved
          one will never feel bored.&nbsp;
          <Hyperlink href="/activities" title="Learn More" />
        </p>
      </div>
      <hr />
      <div className={styles.dailyLifeContainer__topic}>
        <h2 className={styles.dailyLifeContainer__topicTitle}>
          Dining Experience
        </h2>
        <p className={styles.dailyLifeContainer__topicContent}>
          A great meal is one of life&apos;s simple pleasures. At Lawndale
          Manor, we believe dining well is part of living well. Your loved one
          will enjoy restaurant-style dining with chef-prepared meals. Each day
          features a variety of menu options that changes daily. So your loved
          one won&apos;t get bored with the food choices.&nbsp;
          <Hyperlink href="/dining" title="Learn More" />
        </p>
      </div>
      <hr />
      <div className={styles.dailyLifeContainer__topic}>
        <h2 className={styles.dailyLifeContainer__topicTitle}>Amenities</h2>
        <p className={styles.dailyLifeContainer__topicContent}>
          We strive to bring your loved one&apos;s interests to life through
          programs and outings that reflect their talents and personalities,
          while also offering new experiences that will challenge them and keep
          them mentally healthy. From wellness programs to cultural and social
          events, there are opportunities for everyone to be involved.&nbsp;
          <Hyperlink href="/amenities" title="Learn More" />
        </p>
      </div>
    </div>
  </div>
);

export { DailyLifeContainer };
