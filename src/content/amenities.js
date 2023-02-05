import { getCdnUrl } from "../utils";

const CDN_URL__AMENITIES = getCdnUrl("/amenities");

const amenities = [
  {
    content:
      "Our front porch is a great place to sit in a rocking chair and enjoy the fresh air. Our back patio offers more outdoor seating.",
    title: "Outdoor porches",
    image: {
      alt: "Outdoor porch on sunny day",
      src: `${CDN_URL__AMENITIES}/amenities-container__back-patio.jpg`,
    },
  },
  {
    content:
      "Lawndale Manor's library offers a variety of books and magazines. The library offers a quiet place for families or friends to sit and visit. Our activities department also utilizes the library for small group and one-on-one activities.",
    title: "Library",
    image: {
      alt: "Library with two sitting chairs",
      src: `${CDN_URL__AMENITIES}/amenities-container__library.jpg`,
    },
  },
  {
    content:
      "We offer lounge rooms equipped with large, flat-screen TVs for our residents' enjoyment.",
    title: "Lounge Rooms",
    image: {
      alt: "Lounge room with large screen tv",
      src: `${CDN_URL__AMENITIES}/amenities-container__lounge.jpg`,
    },
  },
  {
    content:
      "We utilize a handicap accessible vehicle for transportation to and from local medical appointments and for outings.",
    title: "Transportation",
    nonWorkingImage: {
      alt: "Small concierge bus",
      src: `${CDN_URL__AMENITIES}/amenities-container__bus.jpg`,
    },
  },
  {
    content:
      "We pride ourselves on the cleanliness and care our dietary staff takes to ensure dining rooms are ready for a variety of uses, from preparing and serving meals to meetings and private parties.",
    title: "Dining Rooms",
    nonWorkingImage: {
      alt: "Dining room with chairs and tables",
      src: `${CDN_URL__AMENITIES}/amenities-container__dining.jpg`,
    },
  },
  {
    content:
      "Our beauty/barber shop is open weekly for haircuts, styling, manicures, and pedicures.",
    title: "Beauty/Barber Shop",
    nonWorkingImage: {
      alt: "Stylist at her station",
      src: `${CDN_URL__AMENITIES}/amenities-container__salon.jpg`,
    },
  },
  {
    content:
      "Lawndale Manor has a dedicated hospice room to allow for a peaceful transition.",
    title: "Hospice Room",
    nonWorkingImage: {
      alt: "Hospice room with bed and comfy recliner chair.",
      src: `${CDN_URL__AMENITIES}/amenities-container__hospice.jpg`,
    },
  },
  {
    content:
      "Lawndale Manor is easily navigated and accessible for individuals using wheelchairs and other assistive devices.",
    title: "Handicap Accessibility",
  },
];

export { amenities };
