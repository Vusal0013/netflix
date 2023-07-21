import {
  createProfilesForKids,
  devicePilePng,
  downloadGif,
  downloadForLaterPng,
  phonePng,
  tv,
} from "../img";

import { videoDevicePile, videoTv } from "../video";

const articleDataEng = {
  main: {
    title: "Unlimited movies, TV shows, and more",
    subtitle: "Watch anywhere. Cancel anytime.",
  },
  subscribe: {
    title:
      "Ready to watch? Enter your email to create or restart your membership.",
    placeholder: "Email adress",
    button: "Get Started",
  },
  articles: [
    {
      title: "Enjoy on your TV",
      subtitle:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      png: tv,
      video: videoTv,
    },
    {
      title: "Download your shows to watch offline",
      subtitle:
        "Save your favorites easily and always have something to watch.",
      png: phonePng,
      downloadBar: {
        title: "Stranger Things",
        subtitle: "Downloading...",
        png: downloadForLaterPng,
        gif: downloadGif,
      },
    },
    {
      title: "Watch everywhere",
      subtitle:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      png: devicePilePng,
      video: videoDevicePile,
    },
    {
      title: "Create profiles for kids",
      subtitle:
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      png: createProfilesForKids,
    },
  ],
};

const articleDataRus = {};

export { articleDataEng };
