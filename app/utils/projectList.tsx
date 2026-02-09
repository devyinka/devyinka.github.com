import {
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactHookFormSVG,
  ReactnativeSVG,
  ReactSVG,
  SassSVG,
  SmartAttendanceSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
  TailwindSVG,
  TypescriptSVG,
  VueSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <SmartAttendanceSVG />,
    title: "Smart QR Event Logistics Platform",
    subtitle: "Landing page template",
    technologies: [
      {
        name: "Next js",
        icon: <NextSVG color="#61DAFB" size={16} />,
      },

      {
        name: "Javascript",
        icon: <JavascriptSVG color="#3178C6" size={16} />,
      },
      {
        name: "CSS Modules",
        icon: <CSSSVG color="#1572B6" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <TailwindSVG color="#000000" size={16} />,
      },
      {
        name: "Express",
        icon: <ExpressSVG color="#06B6D4" size={16} />,
      },
      {
        name: "MongoDB",
        icon: <MongoDBSVG color="#06B6D4" size={16} />,
      },
    ],
    description:
      "A full-stack event attendance system where students can register for multiple events with enforced track constraints. The platform uses QR codes for attendance tracking and implements role-based access control, allowing super admins to manage events and administrators while limiting sub-admins to attendance scanning.",
    imgUrl: "/videos/shadcn-landing-page.webp",
    videoUrl: "/videos/SmartAttendanceNew.mp4",
    githubUrl: "https://github.com/devyinka/NihubAttendance",
    websiteUrl: "https://nihub-attendance-vnqh.vercel.app",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "Restuarant Locator",
    subtitle: "Restaurant finder",
    technologies: [
      {
        name: "React native",
        icon: <ReactnativeSVG color="#61DAFB" size={16} />,
      },
      {
        name: "Express",
        icon: <ExpressSVG color="#000" size={16} />,
      },

      {
        name: "MongoDB",
        icon: <MongoDBSVG color="#1572B6" size={16} />,
      },
    ],
    description:
      "A Full-Stack React Native app that helps users find restaurants around a specific location by entering a place name. It fetches location coordinates using TomTom API and identifies nearby restaurants with Node Geocoder, displaying ratings, open/closed status, and other helpful details. The app features secure user authentication using Firebase, enabling users to create accounts, save favorite restaurants, and personalize their dining preferences seamlessly across devices.",
    imgUrl: "/videos/magenta.webp",
    videoUrl: "/videos/Restuarantnew.mp4",
    githubUrl: "https://github.com/devyinka/Restaurant-finder",
    websiteUrl: "",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "Food Ingredient Finder",
    subtitle: "Recipe Finder",
    technologies: [
      {
        name: "JavaScript",
        icon: <JavascriptSVG color="#F7DF1E" size={16} />,
      },
      {
        name: "React",
        icon: <ReactSVG color="#61DAFB" size={16} />,
      },
      {
        name: "CSS Modules",
        icon: <CSSSVG color="#1572B6" size={16} />,
      },
    ],
    description:
      "A React recipe discovery web application that allows users to search for meals and view ingredients and cooking instructions through a clean and intuitive interface..",
    imgUrl: "/videos/sk8ter.webp",
    videoUrl: "/videos/Recipe-finder.mp4",
    githubUrl: "https://github.com/devyinka/Recipe-App",
    websiteUrl: "",
  },
];
