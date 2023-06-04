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
        name: "HTML",
        Icon: SiHtml5,
      },
      {
        name: "CSS",
        Icon: SiCss3,
      },
      {
        name: "JavaScript",
        Icon: DiJavascript1,
      },
      {
        name: "Python",
        Icon: SiPython,
      },
      {
        name: "PHP",
        Icon: SiPhp,
      },
      {
        name: "Java",
        Icon: DiJava,
      },
      {
        name: "MySQL",
        Icon: DiMysql,
      },
      {
        name: "R",
        Icon: SiR,
      },
    ],
  },

  frameworks: {
    title: "Frameworks/Libraries",
    data: [
      {
        name: "React.js",
        Icon: SiReact,
      },
      {
        name: "Next.js",
        Icon: SiNextdotjs,
      },
      {
        name: "Tailwind",
        Icon: SiTailwindcss,
      },
      {
        name: "Bootstrap",
        Icon: SiBootstrap,
      },
    ],
  },

  system: {
    title: "Systems",
    data: [
      {
        name: "VSCode",
        Icon: SiVisualstudiocode,
      },
      {
        name: "Github",
        Icon: SiGithub,
      },
      {
        name: "RStudio",
        Icon: SiRstudio,
      },
      {
        name: "Android Studio",
        Icon: SiAndroidstudio,
      },
      {
        name: "IntelliJ IDEA",
        Icon: SiIntellijidea,
      },

      {
        name: "Amazon S3",
        Icon: SiAmazons3,
      },
    ],
  },
};

export default tech;