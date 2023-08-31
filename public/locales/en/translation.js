import {
  createProfilesForKids,
  devicePilePng,
  downloadGif,
  downloadForLaterPng,
  phonePng,
  tv,
} from "../../../src/assets/img";

import { videoDevicePile, videoTv } from "../../../src/assets/video";

const translation = {
  translation: {
    main: {
      title: "Unlimited movies, TV shows, and more",
      subtitle: "Watch anywhere. Cancel anytime.",
      navbar: {
        login: "Sign in",
      },
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
        customClassNameForVideo: "video-device-pile",
      },
      {
        title: "Create profiles for kids",
        subtitle:
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
        png: createProfilesForKids,
      },
    ],
    faqData: {
      header: "Frequently Asked Questions",
      content: [
        {
          title: "What is Netflix?",
          subTitle: [
            "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",

            "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
          ],
        },

        {
          title: "How much does Netflix cost?",
          subTitle: [
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.",
          ],
        },

        {
          title: "Where can I watch?",
          subTitle: [
            "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",

            "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
          ],
        },

        {
          title: "How do I cancel?",
          subTitle: [
            "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
          ],
        },

        {
          title: "What can I watch on Netflix?",
          subTitle: [
            "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
          ],
        },

        {
          title: "Is Netflix good for kids?",
          subTitle: [
            "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",

            "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
          ],
        },

        {
          title: "Why am I seeing this language?",
          subTitle: [
            "Your browser preferences determine the language shown here.",
          ],
        },
      ],
    },
    footerData: {
      footerHeading: {
        title: "Questions? Contact us.",
        link: "https://help.netflix.com/contactus",
      },
      footerContent: [
        {
          title: "FAQ",
          link: "https://help.netflix.com/support/412",
          required: true,
        },
        {
          title: "Media Center",
          link: "https://media.netflix.com/",
        },
        { title: "Ways to Watch", link: "https://www.netflix.com/watch" },
        {
          title: "Cookie Preferences",
          link: "https://www.netflix.com/az/#",
          required: true,
        },
        { title: "Speed Test", link: "https://fast.com/" },
        {
          title: "Help Center",
          link: "https://help.netflix.com/",
          required: true,
        },
        { title: "Investor Relations", link: "http://ir.netflix.com/" },
        {
          title: "Terms of Use",
          link: "https://help.netflix.com/legal/termsofuse",
          required: true,
        },
        {
          title: "Corporate Information",
          link: "https://help.netflix.com/legal/corpinfo",
          required: true,
        },
        {
          title: "Legal Notices",
          link: "https://help.netflix.com/legal/notices",
        },
        { title: "Account", link: "https://www.netflix.com/youraccount" },
        { title: "Jobs", link: "https://jobs.netflix.com/jobs" },
        {
          title: "Privacy",
          link: "https://help.netflix.com/legal/privacy",
          required: true,
        },
        { title: "Contact Us", link: "https://help.netflix.com/contactus" },
        {
          title: "Only on Netflix",
          link: "https://www.netflix.com/az/browse/genre/839338",
        },
      ],
      copyrigth: "Netflix Azerbaijan Created by Vusal Feyruz",
    },
    subscribe: {
      title:
        "Ready to watch? Enter your email to create or restart your membership.",
      form: {
        placeholder: "Email adress",
        button: "Get Started",
        errors: {
          required: "Email is required.",
          validation: "Please enter a valid email address.",
        },
      },
    },
    loginPage: {
      heading: "Sign in",
      form: {
        emailPhoneLabel: "Email or phone number",
        passwordLabel: "Password",
        errors: {
          emailPhone: {
            required: "Please enter a valid email or phone number.",
            validationEmail: "Please enter a valid email.",
            validationPhone: "Please enter a valid phone number.",
          },
          password: {
            required: "Your password must contain between 4 and 60 characters.",
          },
        },
        checkboxLabel: "Remember me",
        needHelp: "Need help?",
        button: "Sign in",
      },
      offerRegister: {
        title: "New to Netflix?",
        titleLink: "Sign up now",
      },
      captchaInfo: {
        title:
          "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
        learnMoreBtn: "Learn more.",
        learnMore: {
          firstText:
            "The information collected by Google reCAPTCHA is subject to the Google",
          secondText:
            ", and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).",
          and: "and",
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service",
        },
      },
    },
  },
};

export default translation;
