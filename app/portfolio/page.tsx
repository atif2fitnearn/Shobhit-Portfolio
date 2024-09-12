import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Weather App",
    mockup: "/mockups/weatherAppMock.png",
    live: "https://weather-app.paytonpierce.dev",
    code: "https://github.com/paytonjewell/react-weather-app-v2",
  },
  {
    title: "Portfolio Template",
    mockup: "/mockups/portfolioTemplateMock.png",
    live: "https://reactportfoliotemplate.paytonpierce.dev/",
    code: "https://github.com/paytonjewell/ReactPortfolioTemplate",
  },
  {
    title: "Alarm Clock",
    mockup: "/mockups/clockMock.png",
    live: "https://darkmodeclock.paytonpierce.dev/",
    code: "https://github.com/paytonjewell/Analog-Clock-With-Darkmode-Toggle",
  },
  {
    title: "To-Do List",
    mockup: "/mockups/todoMock.png",
    live: "https://todolist.paytonpierce.dev/",
    code: "https://github.com/paytonjewell/To-Do-List",
  },
  {
    title: "Weather",
    mockup: "/mockups/todoMock.png",
    live: "https://theshobhitsingh.github.io/live_weather/",
    code: "https://github.com/theshobhitsingh/live_weather",
  },
];

const Portfolio = () => {
  return (
    <div className="text-center">
      <p>𝙊𝙥𝙚𝙣 𝙎𝙤𝙪𝙧𝙘𝙚 𝘾𝙤𝙣𝙩𝙧𝙞𝙗𝙪𝙩𝙞𝙤𝙣𝙨:</p>
      <Link
        className="link link-primary"
        href="https://github.com/danielcranney/profileme-dev/pull/34"
      >
        𝙿𝚛𝚘𝚏𝚒𝚕𝚎𝙼𝚎.𝚍𝚎𝚟
      </Link>
      <div className="flex flex-wrap items-start mb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="md:w-1/2 flex flex-col items-center justify-center"
          >
            <img src={project.mockup} />
            <h1 className="text-3xl mb-2">{project.title}</h1>
            <div className="flex gap-2">
              <Link
                href={project.live}
                target="_blank"
                className="btn btn-secondary"
              >
                𝗟𝗶𝘃𝗲
              </Link>
              <Link
                href={project.code}
                target="_blank"
                className="btn btn-primary"
              >
                𝗦𝗼𝘂𝗿𝗰𝗲
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
