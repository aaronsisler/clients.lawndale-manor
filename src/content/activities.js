import { getCdnUrl } from "../utils";

const CDN_URL__ACTIVITIES = getCdnUrl("/activities");

const activitiesImages = [
  {
    alt: "Game room with residents",
    src: `${CDN_URL__ACTIVITIES}/activities-container__game-room.jpg`,
  },
  {
    alt: "Lounge room with fireplace",
    src: `${CDN_URL__ACTIVITIES}/activities-container__lounge-room-fireplace.jpg`,
  },
];

const activities = [
  "Monthly Resident Outing (Weather Permitting)",
  "Monthly Birthday Party",
  "Bingo",
  "Exercise Activities",
  "Devotion",
  "Resident Council Meeting Monthly",
  "Men's Club",
  "One to One Room Visits",
  "Memory Stimulation",
  "Front & Back Porch Activities (Weather Permitting)",
  "Cooking Class",
  "Arts & Crafts",
  "Wade Nevans & Friends Gospel Group",
  "Annual Senior Prom (Summer)",
  "Annual Christmas Party (December)",
];

export { activities, activitiesImages };
