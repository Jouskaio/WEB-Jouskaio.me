import React from "react";
import Head from "next/head";
import { TextH1, TextH3, CardExperience, CardListIcons, useWindowSize } from "@jouskaio/ui";

export default function AboutPage() {
    const size = useWindowSize();
    const statusAOS = size && size.width !== undefined;

    const experiences = [
        {
            title: "AR / VR Developer",
            company: "Personal Projects & Freelance",
            period: "2023 - Present",
            description: "Developing immersive experiences using ARKit and VR technologies. Focusing on interactive storytelling and innovative user interfaces in 3D environments.",
            technologies: ["ARKit", "Unity", "Blender", "Swift"]
        },
        {
            title: "IoT Software Engineer",
            company: "Innovation Lab",
            period: "2021 - 2023",
            description: "Designed and implemented software for robotic SDKs and on-board electronics. Managed end-to-end IoT solutions from firmware development to cloud integration.",
            technologies: ["C++", "IoT", "Linux", "Docker", "Bash"]
        },
        {
            title: "Fullstack Web & Mobile Developer",
            company: "Tech Solutions Agency",
            period: "2019 - 2021",
            description: "Built scalable web applications and mobile apps for various clients. Specializing in React, Next.js, and Android development with Kotlin/Java.",
            technologies: ["React", "Next.js", "Kotlin", "Java", "PHP", "Symfony"]
        }
    ];

    const skills = [
        { icon: '/icons/languages/nextjs.svg', title: 'NextJS', text: 'Front-end' },
        { icon: '/icons/languages/react.svg', title: 'React.JS', text: 'Front-end' },
        { icon: '/icons/languages/javascript.svg', title: 'JavaScript', text: 'Programming' },
        { icon: '/icons/languages/kotlin.svg', title: 'Kotlin', text: 'Android' },
        { icon: '/icons/languages/swift.png', title: 'Swift', text: 'iOS' },
        { icon: '/icons/languages/arkit.svg', title: 'ARKit', text: 'Augmented Reality' },
        { icon: '/icons/languages/docker.svg', title: 'Docker', text: 'DevOps' },
        { icon: '/icons/languages/linux.svg', title: 'Linux', text: 'OS' },
        { icon: '/icons/languages/blender.svg', title: 'Blender', text: '3D Modeling' },
    ];

    return (
        <section className="l-about">
            <Head>
                <title>About Me – Jouskaio</title>
            </Head>

            <TextH1 classname="l-about__a-title">About Me</TextH1>

            <div className="l-about__content">
                <TextH3>Professional Journey</TextH3>
                <div className="l-about__experience-list">
                    {experiences.map((exp, index) => (
                        <CardExperience
                            key={index}
                            {...exp}
                            aosEffect="fade-up"
                            aosDuration={1000 + index * 200}
                        />
                    ))}
                </div>

                <div className="l-about__skills-section">
                    <TextH3>Technical Expertise</TextH3>
                    <br />
                    {statusAOS && (
                        <CardListIcons
                            icons={skills}
                            aosDuration={1000}
                            aosEffect="fade-up"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
