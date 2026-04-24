import {Metadata} from "next";

import {Section, InlineLink} from "@/components/ComponentsList";

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
                                Portfolio Website
                            </h1>

                            <p className="text-secondary text-xl font-normal text-pretty wrap-break-word hyphens-auto">
                                Still under construction but feel free to check out the code on{" "}
                                <InlineLink href="https://github.com/tim-lpb/timlpb">GitHub</InlineLink>.
                            </p>
                        </Section>
                    </div>
                </div>
            </div>
        </>
    );
}
