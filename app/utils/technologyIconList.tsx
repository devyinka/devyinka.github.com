import { iconType } from "../types";
import {
  JavascriptSVG,
  TypescriptSVG,
  PostgreSQLSVG,
  ReactSVG,
  TailwindSVG,
  ExpressSVG,
  NextSVG,
  MongoDBSVG,
  PythonSVG,
  CplusplusSVG,
  FigmaSVG,
  GraphQLSVG,
  NodejsSVG,
  GitSVG,
  GithubSVG,
  CSSSVG,
  HTMLSVG,
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "HTML",
    icon: <HTMLSVG color={color} size={35} />,
  },
  {
    name: "css",
    icon: <CSSSVG color={color} size={35} />,
  },
  {
    name: "JavaScript",
    icon: <JavascriptSVG color={color} size={35} />,
  },

  {
    name: "TypeScript",
    icon: <TypescriptSVG color={color} size={35} />,
  },
  {
    name: "Python",
    icon: <PythonSVG color={color} size={35} />,
  },
  {
    name: "Node.js",
    icon: <NodejsSVG color={color} size={35} />,
  },
  {
    name: "C++",
    icon: <CplusplusSVG color={color} size={35} />,
  },

  {
    name: "React",
    icon: <ReactSVG color={color} size={35} />,
  },
  {
    name: "Next.js",
    icon: <NextSVG color={color} size={35} />,
  },
  {
    name: "React Native",
    icon: <ReactSVG color={color} size={35} />,
  },

  {
    name: "Tailwind",
    icon: <TailwindSVG color={color} size={35} />,
  },
  {
    name: "Figma",
    icon: <FigmaSVG color={color} size={35} />,
  },

  {
    name: "Express",
    icon: <ExpressSVG color={color} size={35} />,
  },
  {
    name: "MongoDB",
    icon: <MongoDBSVG color={color} size={35} />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQLSVG color={color} size={35} />,
  },

  {
    name: "GraphQL",
    icon: <GraphQLSVG color={color} size={35} />,
  },
  {
    name: "Git",
    icon: <GitSVG color={color} size={35} />,
  },
  {
    name: "Github",
    icon: <GithubSVG color={color} size={35} />,
  },
];
