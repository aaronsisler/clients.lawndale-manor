import { getCdnUrl } from "../utils";

const CDN_URL__LEADERSHIP = getCdnUrl("/leadership");

const leadershipMembers = [
  {
    imgSrc: `${CDN_URL__LEADERSHIP}/terri_allen.jpg`,
    name: "Terri",
    title: "Administrator",
  },
  {
    imgSrc: `${CDN_URL__LEADERSHIP}/lesha.jpg`,
    name: "Lesha",
    title: "Resident Care Coordinator",
  },
  {
    imgSrc: `${CDN_URL__LEADERSHIP}/debi.jpg`,
    name: "Debi",
    title: "Director of Health Services",
  },
];

export { leadershipMembers };
