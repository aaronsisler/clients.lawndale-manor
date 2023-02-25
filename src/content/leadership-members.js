import { getCdnUrl } from "../utils";

const CDN_URL__LEADERSHIP = getCdnUrl("/leadership");

const leadershipMembers = [
  {
    imgSrc: `${CDN_URL__LEADERSHIP}/terri_allen.jpg`,
    name: "Terri Allen",
    title: "Administrator",
  },
  {
    imgSrc: `${CDN_URL__LEADERSHIP}/lesha.jpg`,
    name: "Iesha Small",
    title: "Resident Care Coordinator",
  },
  {
    imgSrc: `${CDN_URL__LEADERSHIP}/debi.jpg`,
    name: "Debi Short",
    title: "Director of Health Services",
  },
];

export { leadershipMembers };
