import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/shared");

const modelRoomImages = [
  {
    alt: "Model room with beds",
    src: `${CDN_URL}/shared__beds.jpg`,
  },
  {
    alt: "Double doors in model room",
    src: `${CDN_URL}/shared__closets.jpg`,
  },
  {
    alt: "Sink and toilet in model room's bathroom",
    src: `${CDN_URL}/shared__sink_and_toilet.jpg`,
  },
  {
    alt: "Walk in shower in model room's bathroom",
    src: `${CDN_URL}/shared__walk_in_shower.jpg`,
  },
];

export { modelRoomImages };
