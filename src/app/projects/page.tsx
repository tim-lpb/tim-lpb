import {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";

import {Section, InlineLink, ProjectElement} from "@/components/ComponentsList";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

export const metadata: Metadata = {
    title: "Projects",
    description: "Here I display some of the projects I worked on. I am always open to new opportunities and collaborations, so feel free to reach out if you want to connect or work on a project together!",
};

export default function Home() {
    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 overflow-y-auto">
                    <div className="text-primary mx-auto flex max-w-2xl flex-1 flex-col gap-8 py-8 leading-[1.6] text-justify">
                        <h1 className={"text-primary text-3xl font-semibold text-pretty px-4"}>
                            My Projects
                        </h1>

                        {/* TODO: Make this look clean, add Projects card component and add real projects including pictures and description */}
                        {/* TODO: Big site for projects with stack, description, links to github and live demo, maybe even a blog post about the project */}
                        {/* TODO: Big box with picture instead of small one*/}

                        <Section className="gap-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <ProjectElement href="/projects/prism">
                                    <Section className="h-full justify-between gap-2 px-0">
                                        <h2 className="text-lg font-semibold text-pretty">
                                            Project 1
                                        </h2>

                                        <p className="text-secondary text-sm font-normal text-pretty wrap-break-word hyphens-auto">
                                            This is a description of project 1.
                                        </p>
                                    </Section>
                                </ProjectElement>

                                <ProjectElement href="/projects/">
                                    <Section className="h-full justify-between gap-2 px-0">
                                        <h2 className="text-lg font-semibold text-pretty">
                                            Project 2
                                        </h2>

                                        <p className="text-secondary text-sm font-normal text-pretty wrap-break-word hyphens-auto">
                                            This is a description of project 2.
                                        </p>
                                    </Section>
                                </ProjectElement>

                                <ProjectElement href="/projects/">
                                    <Section className="h-full justify-between gap-2 px-0">
                                        <h2 className="text-lg font-semibold text-pretty">
                                            Project 2
                                        </h2>

                                        <p className="text-secondary text-sm font-normal text-pretty wrap-break-word hyphens-auto">
                                            This is a description of project 2.
                                        </p>
                                    </Section>
                                </ProjectElement>

                                <ProjectElement href="/projects/">
                                    <Section className="h-full justify-between gap-2 px-0">
                                        <h2 className="text-lg font-semibold text-pretty">
                                            Project 2
                                        </h2>

                                        <p className="text-secondary text-sm font-normal text-pretty wrap-break-word hyphens-auto">
                                            This is a description of project 2.
                                        </p>
                                    </Section>
                                </ProjectElement>
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}
