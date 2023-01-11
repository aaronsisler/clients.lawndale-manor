import { CDN_URL, CLIENT_NAME } from "../../config";
import { getCdnUrl } from "../../utils";

const CDN_URL__ASSISTED_LIVING = getCdnUrl("/assisted-living");
const CDN_URL__CAREERS = getCdnUrl("/careers");
const CDN_URL__DAILY_LIFE = getCdnUrl("/daily-life");
const CDN_URL__DINING = getCdnUrl("/dining");
const CDN_URL__DOCUMENTS = getCdnUrl("/documents");
const CDN_URL__FAQS = getCdnUrl("/faqs");
const CDN_URL__FIRST_STEP = getCdnUrl("/first-step");
const CDN_URL__LANDING = getCdnUrl("/landing");
const CDN_URL__OUR_MISSION = getCdnUrl("/our-mission");
const CDN_URL__SHARED = getCdnUrl("/shared");
const CDN_URL__WHY_ASSISTED_LIVING = getCdnUrl("/why-assisted-living");

// General Images
const logo = {
  altText: CLIENT_NAME,
  src: `${CDN_URL}/logo.png`,
};

// Landing Container
const landingContainerSplashImage = {
  altText: "Landscape view of the front of the building",
  src: `${CDN_URL__LANDING}/landing-container__splash.jpg`,
};
const landingContainerSecondaryImage = {
  altText: "Flowers on the front outdoor porch",
  src: `${CDN_URL__LANDING}/landing-container__secondary.jpg`,
};

// Assisted Living
const assistedLivingSplashImage = {
  alt: "Nurse holding an senior lady's hand",
  src: `${CDN_URL__ASSISTED_LIVING}/assisted-living-container.jpg`,
};

// Careers Container
const careersSplashImage = {
  alt: "Staff member smiling with phone",
  src: `${CDN_URL__CAREERS}/careers-container.jpg`,
};

// Daily Life Container
const dailyLifeSplashImage = {
  alt: "Two smiling senior ladies giving each other a high five",
  src: `${CDN_URL__DAILY_LIFE}/daily-life-container.jpg`,
};

// Why Assisted Living
const whyAssistedLivingSplashImage = {
  alt: "Younger hands holding elderly hands",
  src: `${CDN_URL__WHY_ASSISTED_LIVING}/why-assisted-living-container.jpg`,
};

// First Step
const firstStepSplashImage = {
  alt: "Man holding hands together in thought",
  src: `${CDN_URL__FIRST_STEP}/first-step-container.jpg`,
};

// Our Mission
const ourMissionSplashImage = {
  alt: "Staff member hugging a resident",
  src: `${CDN_URL__OUR_MISSION}/our-mission-container.jpg`,
};

export {
  assistedLivingSplashImage,
  careersSplashImage,
  dailyLifeSplashImage,
  firstStepSplashImage,
  landingContainerSecondaryImage,
  landingContainerSplashImage,
  logo,
  ourMissionSplashImage,
  whyAssistedLivingSplashImage,
};
