"use client";

import React from "react";
import Image from "next/image";

import projectsData from "@content/projectsData";

// import { BsGithub } from "react-icons/bs";
import { MdOutlineLink } from "react-icons/md";

export default function Projects() {
    return (
        <section>
            <div className="container mb-10 p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectsData &&
                    projectsData.map((project, index) => {
                        if (project.name === "" && project.githubURL === "")
                            return null;
                        return <Project key={index} project={project} />;
                    })}
            </div>
        </section>
    );
}


export function Project({ project }) {
    return (
        <div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 my-auto ">
            <div className="rounded-lg shadow bg-gray-900 relative flex flex-col items-center justify-center">
                <Image
                    src={project.coverURL}
                    alt={project.name} className="rounded-t-lg"
                    height={400}
                />

                <div className="p-5">
                    <a href="#">
                        <h5 className="my-5 lg:text-xl font-bold tracking-tight text-white"> {project.name} </h5>
                    </a>
                    <p id="description" className=" mb-5 font-normal text-sm lg:text-md text-gray-400"> {project.description} </p>
                    <div className="mb-5 flex items-center gap-1 flex-wrap">
                        {project.tools.map((tool, index) => {
                            return (
                                <span
                                    key={`${tool}-${index}`}
                                    className="bg-gray-100 text-gray-500 rounded px-2 py-1 text-xxs sm:text-xs"
                                >
                                    {tool}
                                </span>
                            );
                        })}
                    </div>

                    <div className="mb-5 p-2 w-fit flex items-center gap-4">
                        {/* <a
                            title="Source Code on GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.githubURL}
                            className="text-gray-500"
                        >
                            <BsGithub className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                        </a> */}

                        {project.previewURL && (
                            <a
                                title="Live Preview"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.previewURL}
                                className="text-gray-500"
                            >
                                <MdOutlineLink className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}