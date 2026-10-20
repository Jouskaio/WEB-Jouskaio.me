import React from "react";
import Head from "next/head";
import Image from "next/image";
import { CardMap, useWindowSize } from "@jouskaio/ui";

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

            <header className="l-about__hero">
                <div className="l-about__photo" data-aos={twoColumns ? "fade-right" : "fade-down"} data-aos-duration={900}>
                    <Image src="/images/me.png" alt="Manon" width={840} height={1120} priority />
                </div>
                <div className="l-about__heroText" data-aos={twoColumns ? "fade-left" : "fade-up"} data-aos-duration={900}>
                    <p className="l-about__eyebrow">About me</p>
                    <h1 className="l-about__headline">Engineering thoughtful technology across software, connected systems, and immersive experiences.</h1>
                    <p className="l-about__hi">Hi, I’m Manon.</p>
                    <p className="l-about__lead">I’m a software engineer with a multidisciplinary background spanning embedded systems, IoT, mobile and web development, AR, and cybersecurity. My work lives at the intersection of technology, product thinking, and real-world problem solving. I’m especially drawn to projects that connect software and physical environments — from connected devices and cloud-backed systems to immersive mobile experiences and secure digital infrastructures.</p>
                    <ul className="l-about__pills" aria-label="Areas">
                        {["Paris", "Software", "IoT", "Mobile & web", "AR", "Cybersecurity"].map((pill) => (
                            <li key={pill} className="l-about__pill">{pill}</li>
                        ))}
                    </ul>
                    <div className="l-about__actions">
                        <a className="l-about__button" href="/cv/manon-salsou-cv-fr.pdf" download lang="fr">
                            Download my CV (FR) <span aria-hidden="true">↓</span>
                        </a>
                        <a className="l-about__button l-about__button--outline" href="/cv/manon-salsou-cv-en.pdf" download lang="en">
                            Resume (EN) <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>
            </header>

            <section className="l-about__duo" aria-label="What I build and how I think">
                <div className="l-about__card" data-aos={gridEffect(0, twoColumns)} data-aos-duration={900}>
                    <h2 className="l-about__cardTitle">What I build</h2>
                    <p>I build digital experiences and technical systems that are meant to last — not just to work. I care about quality, clarity, reliability, and long-term maintainability as much as I care about innovation. Whether I’m working on a mobile application, an IoT ecosystem, a web platform, or a more infrastructure-oriented subject, I aim to create solutions that feel both precise and useful.</p>
                </div>
                <div className="l-about__card" data-aos={gridEffect(1, twoColumns)} data-aos-duration={900}>
                    <h2 className="l-about__cardTitle">How I think</h2>
                    <p>My background combines engineering, digital project management, and product sensitivity, which allows me to approach a project from multiple angles: architecture, usability, performance, security, and scalability. I enjoy turning technical complexity into something readable, durable, and well designed. For me, good technology is never only functional — it should also be coherent, elegant, and grounded in real needs.</p>
                </div>
            </section>

            <section className="l-about__section" aria-labelledby="about-glance">
                <h2 id="about-glance" className="l-about__title">At a glance</h2>
                <div className="l-about__glance">
                    <div className="l-about__map" data-aos={twoColumns ? "fade-right" : "fade-up"} data-aos-duration={900}>
                        <CardMap lat={48.8566} lng={2.3522} zoom={2} markerLabel="Here !" title="Paris, France" />
                    </div>
                    <ul className="l-about__facts">
                        {facts.map((fact, index) => (
                            <li key={fact.label} className="l-about__tile" data-aos={gridEffect(index, twoColumns)} data-aos-duration={900}>
                                <span className="l-about__tileLabel">{fact.label}</span>
                                <span>{fact.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="l-about__section" aria-labelledby="about-experiences">
                <h2 id="about-experiences" className="l-about__title">Experiences</h2>
                <p className="l-about__sectionText">My path has taken me across augmented reality, telecom, IoT experimentation, embedded thinking, cloud systems, and cybersecurity. Each experience helped me build a broader and more connected view of technology.</p>
                <ol className="l-about__timeline">
                    {experiences.map((exp, index) => (
                        <li key={exp.company} className="l-about__step">
                            <span className="l-about__year" aria-hidden="true">{exp.year}</span>
                            <span className="l-about__node" aria-hidden="true" />
                            <article className="l-about__card l-about__experience" data-aos="fade-up" data-aos-duration={900} data-aos-delay={Math.min(index, 2) * 80}>
                                <div className="l-about__experienceHead">
                                    <img className="l-about__logo" src={exp.logoUrl} alt="" width={48} height={48} />
                                    <div>
                                        <h3 className="l-about__cardTitle">{exp.title}</h3>
                                        <p className="l-about__meta">
                                            <a href={exp.companyUrl} target="_blank" rel="noreferrer">{exp.company}</a> · {exp.period}
                                        </p>
                                    </div>
                                </div>
                                <p>{exp.description}</p>
                                <ul className="l-about__chips" aria-label="Technologies">
                                    {exp.technologies.map((tech) => (
                                        <li key={tech} className="l-about__chip">{tech}</li>
                                    ))}
                                </ul>
                            </article>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="l-about__section" aria-labelledby="about-skills">
                <h2 id="about-skills" className="l-about__title">Hard Skills</h2>
                <p className="l-about__sectionText">My technical profile is shaped by a mix of software engineering, connected systems, mobile development, web technologies, and infrastructure-aware thinking.</p>
                <div className="l-about__skills">
                    {skills.map((skill, index) => (
                        <article key={skill.title} className="l-about__card l-about__skill" data-aos="fade-up" data-aos-duration={900} data-aos-delay={(index % 3) * 80}>
                            <h3 className="l-about__cardTitle">{skill.title}</h3>
                            <ul className="l-about__chips">
                                {skill.chips.map((chip) => (
                                    <li key={chip} className="l-about__chip">{chip}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="l-about__section" aria-labelledby="about-recommendation">
                <h2 id="about-recommendation" className="l-about__title">Recommendation</h2>
                <figure className="l-about__card l-about__quote" data-aos="fade-up" data-aos-duration={900}>
                    <Image className="l-about__avatar" src="/images/jean-camille-sormain.png" alt="" width={192} height={108} />
                    <div>
                        <blockquote>
                            <p>“Manon stands out for her intelligence, strong work ethic, and the seriousness she brings to everything she does.”</p>
                        </blockquote>
                        <figcaption>
                            <a href="https://www.linkedin.com/in/jean-camille-sormain-65779924/" target="_blank" rel="noreferrer">Jean-Camille Sormain</a>
                            <span> · Novae Memorae CEO</span>
                        </figcaption>
                    </div>
                </figure>
            </section>

            <section className="l-about__duo l-about__duo--contact" aria-label="What I’m looking for and contact">
                <div className="l-about__card" data-aos={gridEffect(0, twoColumns)} data-aos-duration={900}>
                    <h2 className="l-about__cardTitle">What I’m looking for</h2>
                    <p>I’m drawn to projects where technology meets real-world impact — especially in software engineering, embedded systems, IoT, immersive applications, and secure digital ecosystems. I value environments where curiosity, quality, and long-term thinking matter just as much as delivery.</p>
                </div>
                <div className="l-about__card" data-aos={gridEffect(1, twoColumns)} data-aos-duration={900}>
                    <h2 className="l-about__cardTitle">Let’s connect</h2>
                    <p>If you’re building something thoughtful, technical, and forward-looking, I’d be happy to hear about it.</p>
                    <div className="l-about__actions">
                        <a className="l-about__button" href="mailto:manon.salsou@icloud.com">Email me</a>
                        <a className="l-about__button l-about__button--outline" href="https://www.linkedin.com/in/manonsalsou/" target="_blank" rel="noreferrer">
                            LinkedIn <span aria-hidden="true">↗</span>
                            <span className="l-about__hint"> (new tab)</span>
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
}
