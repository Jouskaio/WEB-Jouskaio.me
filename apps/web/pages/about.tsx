import React from "react";
import Head from "next/head";
import {
    Button,
    CardCitation,
    CardFact,
    CardHeroAbout,
    CardMap,
    CardSkill,
    CardText,
    ExperienceTimeline,
    StatusBadge,
    useWindowSize,
} from "@jouskaio/ui";

import { AVAILABILITY } from "../lib/availability";
import { gridEffect } from "../lib/aos";

const experiences = [
    {
        title: "Cybersecurity Engineering",
        company: "Armed forces Ministry",
        period: "2024 — Present",
        year: "2024",
        description: "I work on cybersecurity-related topics with a systems-oriented mindset shaped by software engineering, connected infrastructures, and operational realities. My broader background helps me approach security not as an isolated layer, but as part of how reliable technology is designed from the ground up.",
        technologies: ["Cybersecurity", "Systems", "Infrastructures"],
        logoUrl: "/icons/army.jpeg",
        companyUrl: "https://www.defense.gouv.fr/",
    },
    {
        title: "IoT Test Manager",
        company: "RATP Group",
        period: "2021 — 2024",
        year: "2021",
        description: "At RATP, I contributed to large-scale IoT experimentation projects focused on monitoring physical parameters across infrastructure environments. My role involved identifying, developing, and testing connected sensors, connecting non-communicating devices, administering SaaS information systems, working with cloud environments, building dashboards, and exploring AI-driven approaches for predictive maintenance.",
        technologies: ["IoT", "Sensors", "SaaS", "Cloud computing", "Infrastructures"],
        logoUrl: "/icons/RATP.svg",
        companyUrl: "https://www.ratp.fr/",
    },
    {
        title: "Project Assistant",
        company: "Orange",
        period: "2021",
        year: "2021",
        description: "At Orange, I worked on optimization tools and cybersecurity audit topics related to database access management. This included improving the usability of internal applications, supporting telecom-related tools, and helping structure access governance in a clearer and more secure way.",
        technologies: ["Optimization", "Cybersecurity Audit", "Access Governance"],
        logoUrl: "/icons/orange.png",
        companyUrl: "https://www.orange.com/",
    },
    {
        title: "AR Mobile Application Developer",
        company: "Novae Memorae",
        period: "2020",
        year: "2020",
        description: "I contributed to the creation of an iPad augmented reality application designed to bring the lost Saint-Pierre theater in Martinique back to life through immersive historical content. This project involved ARKit, world mapping, virtual object placement, and performance optimization.",
        technologies: ["ARKit", "iOS", "iPadOS", "Performance Optimization"],
        logoUrl: "/icons/novae.png",
        companyUrl: "https://www.linkedin.com/company/novae-memorae/",
    },
    {
        title: "Software Applications Assistant",
        company: "Santarelli",
        period: "2019",
        year: "2019",
        description: "At Santarelli, I worked on a tool designed to digitize customer invoices. It was an early experience that reinforced my interest in building practical software that improves processes in a concrete and measurable way.",
        technologies: ["Software Development", "Process Automation"],
        logoUrl: "/icons/santarelli.png",
        companyUrl: "https://www.santarelli.com/",
    },
];

// The sentences of the skills are shown as chips: one per skill
const skills = [
    { title: "Embedded Systems & IoT", chips: ["Connected sensors", "Communication protocols", "Data exchange", "IoT experimentation", "Mobility-focused systems", "Embedded logic", "C++", "Robotics-oriented SDKs"] },
    { title: "Mobile Development", chips: ["iOS", "Kotlin", "ARKit", "Firebase", "Mobile CI", "Mobile architecture", "Interactive mobile experiences"] },
    { title: "Web Development", chips: ["PHP", "Symfony", "Python", "Node.js", "Java", "JavaScript", "React", "Next.js", "HTML", "CSS/SCSS", "jQuery", "WordPress"] },
    { title: "Cloud, Dev & Systems", chips: ["Linux", "Docker", "Bash", "SQL", "NoSQL", "AWS", "Azure", "Deployment workflows", "Infrastructure-oriented environments"] },
    { title: "Software Engineering", chips: ["Software architecture", "Design patterns", "Clean code", "Maintainability", "Performance optimization", "Technical problem-solving", "Quality-focused development"] },
    { title: "Product, UX & Interface Thinking", chips: ["Figma", "Wireframing", "Prototyping", "Design thinking", "Atomic design", "Benchmarking", "Experience mapping", "Adobe creative tools"] },
    { title: "Creative & Immersive Tools", chips: ["3D", "Motion design", "Animation", "After Effects", "Visual experimentation"] },
];

const facts = [
    { label: "Based", text: "Based in Paris" },
    { label: "Focus", text: "Focused on software, embedded systems, IoT, and cybersecurity" },
    { label: "Interests", text: "Interested in mobility, connected environments, and immersive technologies" },
    { label: "Context", text: "Comfortable across product, technical, and cross-functional contexts" },
];

export default function AboutPage() {
    const size = useWindowSize();
    const twoColumns = !!size && size.width !== undefined && size.width >= 768;

    return (
        <article className="l-about">
            <Head>
                <title>About Me – Jouskaio</title>
                <meta
                    name="description"
                    content="Manon Salsou, software engineer: embedded systems, IoT, mobile and web development, AR and cybersecurity. Experience, skills and what I am looking for."
                />
                <link rel="canonical" href="https://jouskaio.me/about" />
            </Head>

            <CardHeroAbout
                title="About me"
                subtitle="Engineering thoughtful technology across software, connected systems, and immersive experiences."
                introTitle="Hi, I’m Manon."
                introText="I’m a software engineer with a multidisciplinary background spanning embedded systems, IoT, mobile and web development, AR, and cybersecurity. My work lives at the intersection of technology, product thinking, and real-world problem solving. I’m especially drawn to projects that connect software and physical environments — from connected devices and cloud-backed systems to immersive mobile experiences and secure digital infrastructures."
                imageSrc="/images/me.png"
                imageAlt="Manon"
                pills={["Paris", "Software", "IoT", "Mobile & web", "AR", "Cybersecurity"]}
                aosDuration={900}
                imageAosEffect={twoColumns ? "fade-right" : "fade-down"}
                textAosEffect={twoColumns ? "fade-left" : "fade-up"}
            >
                <Button src="/cv/manon-salsou-cv-fr.pdf" download lang="fr">
                    Download my CV (FR) <span aria-hidden="true">↓</span>
                </Button>
                <Button src="/cv/manon-salsou-cv-en.pdf" download lang="en" variant="outline">
                    Resume (EN) <span aria-hidden="true">↓</span>
                </Button>
                {AVAILABILITY.open && (
                    <StatusBadge src={AVAILABILITY.href} detail={AVAILABILITY.detail}>
                        {AVAILABILITY.label}
                    </StatusBadge>
                )}
            </CardHeroAbout>

            <section className="l-about__m-duo" aria-label="What I build and how I think">
                <CardText
                    title="What I build"
                    text="I build digital experiences and technical systems that are meant to last — not just to work. I care about quality, clarity, reliability, and long-term maintainability as much as I care about innovation. Whether I’m working on a mobile application, an IoT ecosystem, a web platform, or a more infrastructure-oriented subject, I aim to create solutions that feel both precise and useful."
                    aosEffect={gridEffect(0, twoColumns)}
                    aosDuration={900}
                />
                <CardText
                    title="How I think"
                    text="My background combines engineering, digital project management, and product sensitivity, which allows me to approach a project from multiple angles: architecture, usability, performance, security, and scalability. I enjoy turning technical complexity into something readable, durable, and well designed. For me, good technology is never only functional — it should also be coherent, elegant, and grounded in real needs."
                    aosEffect={gridEffect(1, twoColumns)}
                    aosDuration={900}
                />
            </section>

            <section className="l-about__section" aria-labelledby="about-glance">
                <h2 id="about-glance" className="l-about__a-title">At a glance</h2>
                <div className="l-about__m-glance">
                    <div className="l-about__m-map" data-aos={twoColumns ? "fade-right" : "fade-up"} data-aos-duration={900}>
                        <CardMap lat={48.8566} lng={2.3522} zoom={2} markerLabel="Here !" title="Paris, France" />
                    </div>
                    <ul className="l-about__m-facts">
                        {facts.map((fact, index) => (
                            <li key={fact.label}>
                                <CardFact {...fact} aosEffect={gridEffect(index, twoColumns)} aosDuration={900} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="l-about__section" aria-labelledby="about-experiences">
                <h2 id="about-experiences" className="l-about__a-title">Experiences</h2>
                <p className="l-about__a-text">My path has taken me across augmented reality, telecom, IoT experimentation, embedded thinking, cloud systems, and cybersecurity. Each experience helped me build a broader and more connected view of technology.</p>
                <ExperienceTimeline items={experiences} />
            </section>

            <section className="l-about__section" aria-labelledby="about-skills">
                <h2 id="about-skills" className="l-about__a-title">Hard Skills</h2>
                <p className="l-about__a-text">My technical profile is shaped by a mix of software engineering, connected systems, mobile development, web technologies, and infrastructure-aware thinking.</p>
                <div className="l-about__m-skills">
                    {skills.map((skill, index) => (
                        <CardSkill key={skill.title} title={skill.title} skills={skill.chips} aosEffect="fade-up" aosDuration={900} aosDelay={(index % 3) * 80} />
                    ))}
                </div>
            </section>

            <section className="l-about__section" aria-labelledby="about-recommendation">
                <h2 id="about-recommendation" className="l-about__a-title">Recommendation</h2>
                <CardCitation
                    urlSource="https://www.linkedin.com/posts/jean-camille-sormain-65779924_eemi-arkit-docker-activity-6734857664557264896-onQ8?utm_source=share&utm_medium=member_desktop"
                    nameProfile="Jean-Camille Sormain"
                    descriptionProfile="Novae Memorae CEO"
                    urlProfile="https://www.linkedin.com/in/jean-camille-sormain-65779924/"
                    urlPhotoProfile="/images/jean-camille-sormain.png"
                    aosEffect="fade-up"
                    aosDuration={900}
                >
                    Manon stands out for her intelligence, strong work ethic, and the seriousness she brings to everything she does.
                </CardCitation>
            </section>

            <section className="l-about__m-duo" aria-label="What I’m looking for and contact">
                <CardText
                    title="What I’m looking for"
                    text="I’m drawn to projects where technology meets real-world impact — especially in software engineering, embedded systems, IoT, immersive applications, and secure digital ecosystems. I value environments where curiosity, quality, and long-term thinking matter just as much as delivery."
                    aosEffect={gridEffect(0, twoColumns)}
                    aosDuration={900}
                />
                <CardText
                    title="Let’s connect"
                    text="If you’re building something thoughtful, technical, and forward-looking, I’d be happy to hear about it."
                    aosEffect={gridEffect(1, twoColumns)}
                    aosDuration={900}
                    actions={
                        <>
                            <Button src="mailto:manon.salsou@icloud.com">Email me</Button>
                            <Button src="https://www.linkedin.com/in/manonsalsou/" external variant="outline">
                                LinkedIn <span aria-hidden="true">↗</span>
                            </Button>
                        </>
                    }
                />
            </section>
        </article>
    );
}
