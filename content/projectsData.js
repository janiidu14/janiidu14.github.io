import laksawi from "../public/laksawi-layout.png"
import portfolio from "../public/portfolio.png"

module.exports = [
  {
    id: 1,
    name: "Laksawi.com",
    coverURL: laksawi,
    description:
      "E-Commerce Website for Locally Produced Spices",
    githubURL: "https://github.com/janiidu14",
    previewURL: "https://test.laksawi.com/",
    tools: ["HTML", "CSS", "JavaScript", "MySql", "Bootstrap 5"],
    pinned: true,
  },
  {
    id: 2,
    name: "Personal Portofolio",
    coverURL: portfolio,
    description:
      "Single Application Dynamic Application for Developer Portofolio",
    githubURL: "https://github.com/janiidu14",
    previewURL: "https://google-next-docs.vercel.app/",
    tools: ["Next.js", "Tailwind CSS", "SendGrid", "HTML", "CSS"],
    pinned: true,
  },
];