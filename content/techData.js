import {
  SiVisualstudiocode,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPhp,
  SiR,
  SiGithub,
  SiAndroidstudio,
  SiIntellijidea,
  SiRstudio,
  SiAmazons3
} from "react-icons/si";

import { 
  DiJava, 
  DiJavascript1, 
  DiMysql 
} from "react-icons/di";


const tech = {
  languages: {
    title: "Languages",
    data: [
      {
        id: 1,
        name: "HTML",
        Icon: SiHtml5,
      },
      {
        id: 2,
        name: "CSS",
        Icon: SiCss3,
      },
      {
        id: 3,
        name: "JavaScript",
        Icon: DiJavascript1,
      },
      {
        id: 4,
        name: "Python",
        Icon: SiPython,
      },
      {
        id: 5,
        name: "PHP",
        Icon: SiPhp,
      },
      {
        id: 6,
        name: "Java",
        Icon: DiJava,
      },
      {
        id: 7,
        name: "MySQL",
        Icon: DiMysql,
      },
      {
        id: 8,
        name: "R",
        Icon: SiR,
      },
    ],
  },

  frameworks: {
    title: "Frameworks/Libraries",
    data: [
      {
        id: 1,
        name: "React.js",
        Icon: SiReact,
      },
      {
        id: 2,
        name: "Next.js",
        Icon: SiNextdotjs,
      },
      {
        id: 3,
        name: "Tailwind",
        Icon: SiTailwindcss,
      },
      {
        id: 4,
        name: "Bootstrap",
        Icon: SiBootstrap,
      },
    ],
  },

  system: {
    title: "Systems",
    data: [
      {
        id: 1,
        name: "VSCode",
        Icon: SiVisualstudiocode,
      },
      {
        id: 2,
        name: "Github",
        Icon: SiGithub,
      },
      {
        id: 3,
        name: "RStudio",
        Icon: SiRstudio,
      },
      {
        id: 4,
        name: "Android Studio",
        Icon: SiAndroidstudio,
      },
      {
        id: 5,
        name: "IntelliJ IDEA",
        Icon: SiIntellijidea,
      },

      {
        id: 6,
        name: "Amazon S3",
        Icon: SiAmazons3,
      },
    ],
  },
};

export default tech;