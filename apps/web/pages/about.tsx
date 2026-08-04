import React from "react";
import Head from "next/head";
import {
    TextH1,
    TextH3,
    CardExperience,
    CardCitation,
    CardStatus,
    CardListText,
    CardMultiStatus,
    CardMap,
    WidgetContact,
    WidgetTimeline,
    CardHeroAbout,
    useWindowSize, TextDefault
} from "@jouskaio/ui";

export default function AboutPage() {
    const size = useWindowSize();
    const statusAOS = size && size.width !== undefined;

    const experiences = [
        {
            title: "Cybersecurity Engineering",
            company: "Armed forces Ministry",
            period: "2024 — Present",
            description: "I work on cybersecurity-related topics with a systems-oriented mindset shaped by software engineering, connected infrastructures, and operational realities. My broader background helps me approach security not as an isolated layer, but as part of how reliable technology is designed from the ground up.",
            technologies: ["Cybersecurity", "Systems", "Infrastructures"],
            logoUrl: "/icons/army.jpeg",
            companyUrl: "https://www.defense.gouv.fr/"
        },
        {
            title: "IoT Test Manager",
            company: "RATP Group",
            period: "2021 — 2024",
            description: "At RATP, I contributed to large-scale IoT experimentation projects focused on monitoring physical parameters across infrastructure environments. My role involved identifying, developing, and testing connected sensors, connecting non-communicating devices, administering SaaS information systems, working with cloud environments, building dashboards, and exploring AI-driven approaches for predictive maintenance.",
            technologies: ["IoT", "Sensors", "SaaS", "Cloud computing", "Infrastructures"],
            logoUrl: "/icons/RATP.svg",
            companyUrl: "https://www.ratp.fr/"
        },
        {
            title: "Project Assistant",
            company: "Orange",
            period: "2021",
            description: "At Orange, I worked on optimization tools and cybersecurity audit topics related to database access management. This included improving the usability of internal applications, supporting telecom-related tools, and helping structure access governance in a clearer and more secure way.",
            technologies: ["Optimization", "Cybersecurity Audit", "Access Governance"],
            logoUrl: "/icons/orange.png",
            companyUrl: "https://www.orange.com/"
        },
        {
            title: "AR Mobile Application Developer",
            company: "Novae Memorae",
            period: "2020",
            description: "I contributed to the creation of an iPad augmented reality application designed to bring the lost Saint-Pierre theater in Martinique back to life through immersive historical content. This project involved ARKit, world mapping, virtual object placement, and performance optimization.",
            technologies: ["ARKit", "iOS", "iPadOS", "Performance Optimization"],
            logoUrl: "/icons/novae.png",
            companyUrl: "https://www.linkedin.com/company/novae-memorae/"
        },
        {
            title: "Software Applications Assistant",
            company: "Santarelli",
            period: "2019",
            description: "At Santarelli, I worked on a tool designed to digitize customer invoices. It was an early experience that reinforced my interest in building practical software that improves processes in a concrete and measurable way.",
            technologies: ["Software Development", "Process Automation"],
            logoUrl: "/icons/santarelli.png",
            companyUrl: "https://www.santarelli.com/"
        }
    ];

    const skills = [
        {
            title: "Embedded Systems & IoT",
            text: "Connected sensors, communication protocols, data exchange, IoT experimentation, mobility-focused systems, embedded logic, C++, and robotics-oriented SDKs."
        },
        {
            title: "Mobile Development",
            text: "iOS, Kotlin, ARKit, Firebase, mobile CI, mobile architecture, and the design of interactive mobile experiences."
        },
        {
            title: "Web Development",
            text: "PHP, Symfony, Python, Node.js, Java, JavaScript, React, Next.js, HTML, CSS/SCSS, jQuery, and WordPress."
        },
        {
            title: "Cloud, Dev & Systems",
            text: "Linux, Docker, Bash, SQL, NoSQL, AWS, Azure, deployment workflows, and infrastructure-oriented environments."
        },
        {
            title: "Software Engineering",
            text: "Software architecture, design patterns, clean code, maintainability, performance optimization, technical problem-solving, and quality-focused development."
        },
        {
            title: "Product, UX & Interface Thinking",
            text: "Figma, wireframing, prototyping, design thinking, atomic design, benchmarking, experience mapping, and Adobe creative tools."
        },
        {
            title: "Creative & Immersive Tools",
            text: "3D, motion design, animation, After Effects, and visual experimentation in service of digital experiences."
        }
    ];

    return (
        <section className="l-about">
            <Head>
                <title>About Me – Jouskaio</title>
            </Head>

            <CardHeroAbout 
                title="About Me"
                subtitle="Engineering thoughtful technology across software, connected systems, and immersive experiences."
                introTitle="Hi, I’m Manon."
                introText="I’m a software engineer with a multidisciplinary background spanning embedded systems, IoT, mobile and web development, AR, and cybersecurity. My work lives at the intersection of technology, product thinking, and real-world problem solving. I’m especially drawn to projects that connect software and physical environments — from connected devices and cloud-backed systems to immersive mobile experiences and secure digital infrastructures."
                imageSrc="/images/me.png"
                imageAlt="Manon"
                classname="l-about__widget l-about__widget--full"
            >
                <div className="l-about__extra-content">
                    <CardMultiStatus
                        items={[
                            {
                                title: "What I build",
                                text: "I build digital experiences and technical systems that are meant to last — not just to work. I care about quality, clarity, reliability, and long-term maintainability as much as I care about innovation. Whether I’m working on a mobile application, an IoT ecosystem, a web platform, or a more infrastructure-oriented subject, I aim to create solutions that feel both precise and useful."
                            },
                            {
                                title: "How I think",
                                text: "My background combines engineering, digital project management, and product sensitivity, which allows me to approach a project from multiple angles: architecture, usability, performance, security, and scalability. I enjoy turning technical complexity into something readable, durable, and well designed. For me, good technology is never only functional — it should also be coherent, elegant, and grounded in real needs."
                            }
                        ]}
                        color="#656DB6"
                        aosDuration={1000}
                        aosEffect="fade-up"
                    />
                </div>
            </CardHeroAbout>

            <div className="l-about__widget l-about__widget--two-thirds">
                <CardListText
                    title="At a glance"
                    details={[
                        "Based in Paris",
                        "Focused on software, embedded systems, IoT, and cybersecurity",
                        "Interested in mobility, connected environments, and immersive technologies",
                        "Comfortable across product, technical, and cross-functional contexts"
                    ]}
                    media="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnFlZzEyYjRlMXNiaTQzM2pjMWZtNXk5cmQ3c2c1aGxmN2tvcTZ0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cmBMa6VKrxfxIzCgUZ/giphy.gif"
                    aosDuration={1000}
                    aosEffect="fade-up"
                />
            </div>

            <div className="l-about__widget l-about__widget--third">
                <CardMap
                    lat={48.8566}
                    lng={2.3522}
                    zoom={2}
                    markerLabel="Here !"
                    title="Paris, France"
                    aosDuration={1000}
                    aosEffect="fade-up"
                />
            </div>

            <div className="l-about__section-title">
                <TextH3>Experiences</TextH3>
            </div>
            
            <div className="l-about__experience-wrapper">
                <div className="l-about__experience-main">
                    <div className="l-about__experience-intro">
                        <TextDefault>My path has taken me across augmented reality, telecom, IoT experimentation, embedded thinking, cloud systems, and cybersecurity. Each experience helped me build a broader and more connected view of technology.</TextDefault>
                    </div>

                    <div className="l-about__experience-grid">
                        {experiences.map((exp, index) => (
                            <CardExperience
                                key={index}
                                {...exp}
                                aosEffect="fade-up"
                                aosDuration={1000 + index * 100}
                            />
                        ))}
                    </div>
                </div>

                <div className="l-about__experience-timeline">
                    <WidgetTimeline
                        items={[
                            { year: 2024, label: 'Armed forces Ministry', isCurrent: true },
                            { year: 2021, label: 'RATP Group' },
                            { year: 2021, label: 'Orange' },
                            { year: 2020, label: 'Novae Memorae' },
                            { year: 2019, label: 'Santarelli' },
                        ]}
                        aosEffect="fade-up"
                        aosDuration={1000}
                        gapMultiplier={80}
                    />
                </div>
            </div>

            <div className="l-about__section-title">
                <TextH3>Hard Skills</TextH3>
            </div>
            
            <div className="l-about__skills-grid">
                {skills.slice(0, 4).map((skill, index) => (
                    <CardStatus
                        key={index}
                        title={skill.title}
                        text={skill.text}
                        color="#656DB6"
                        aosDuration={1000 + index * 100}
                        aosEffect="fade-up"
                    />
                ))}
                
                <div className="l-about__skills-intro" data-aos="fade-up" data-aos-duration="1000">
                    <TextDefault>My technical profile is shaped by a mix of software engineering, connected systems, mobile development, web technologies, and infrastructure-aware thinking.</TextDefault>
                </div>

                {skills.slice(4).map((skill, index) => (
                    <CardStatus
                        key={index + 4}
                        title={skill.title}
                        text={skill.text}
                        color="#656DB6"
                        aosDuration={1000 + (index + 4) * 100}
                        aosEffect="fade-up"
                    />
                ))}
            </div>

            <div className="l-about__section-title">
                <TextH3>Recommendation</TextH3>
            </div>

            <div className="l-about__widget l-about__widget--full">
                <CardCitation
                    urlSource="https://www.linkedin.com/posts/jean-camille-sormain-65779924_eemi-arkit-docker-activity-6734857664557264896-onQ8?utm_source=share&utm_medium=member_desktop"
                    nameProfile="Jean-Camille Sormain"
                    descriptionProfile="Novae Memorae CEO"
                    urlProfile="https://www.linkedin.com/in/jean-camille-sormain-65779924/"
                    urlPhotoProfile="/images/jean-camille-sormain.png"
                    aosDuration={1000}
                    aosEffect="fade-up">
                    Manon stands out for her intelligence, strong work ethic, and the seriousness she brings to everything she does.
                </CardCitation>
            </div>

            <div className="l-about__widget l-about__widget--two-thirds">
                <CardStatus
                    title="What I’m looking for"
                    text="I’m drawn to projects where technology meets real-world impact — especially in software engineering, embedded systems, IoT, immersive applications, and secure digital ecosystems. I value environments where curiosity, quality, and long-term thinking matter just as much as delivery."
                    color="#656DB6"
                    aosDuration={1000}
                    aosEffect="fade-up"
                />
            </div>

            <div className="l-about__widget l-about__widget--third">
                <WidgetContact
                    contacts={[
                        {
                            name: 'Email',
                            url: 'mailto:jouskaio.me@gmail.com',
                            description: "If you’re building something thoughtful, technical, and forward-looking, I’d be happy to hear about it."
                        },
                        {
                            name: 'Linkedin',
                            url: 'https://www.linkedin.com/in/manonsalsou/',
                            description: "If you’re building something thoughtful, technical, and forward-looking, I’d be happy to hear about it."
                        }
                    ]}
                    aosDuration={1000}
                    aosEffect="fade-up"
                >Let’s connect</WidgetContact>
            </div>
        </section>
    );
}
