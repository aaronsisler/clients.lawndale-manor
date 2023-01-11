import { getCdnUrl } from "../utils";

const CDN_URL__LEADERSHIP = getCdnUrl("/leadership");

const leadershipMembers = [
  {
    imgSrc: `${CDN_URL__LEADERSHIP}/terri_allen.jpg`,
    name: "Terri Allen",
    title: "Administrator",
  },
];

export { leadershipMembers };
