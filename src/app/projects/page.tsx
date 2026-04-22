import {Metadata} from "next";

import {Section, ProjectCard} from "@/components/ComponentsList";

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
                        <Section className="gap-4">
                        <h1 className={"text-primary text-3xl font-semibold text-pretty"}>
                            My Projects
                        </h1>

                        <p className="text-secondary text-l font-normal text-pretty wrap-break-word hyphens-auto">
                            I am constantly working on new projects and updating existing ones. Here is a
                            selection on some of the projects I worked or am currently working on.
                            Feel free to ask me when you want to know more about a project!
                        </p>
                        </Section>

                        <Section className="gap-8">

                            {/* TODO: Big site for projects with stack, description, links to github and live demo, maybe even a blog post about the project */}

                            <ProjectCard
                                href="/projects/portfolio"
                                title="Portfolio Website"
                                description="Built with Next.js and Tailwind CSS."
                                imageSrc="/img/timlpb.jpeg"
                                imageAlt="Preview of Portfolio Website"
                            />
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}
