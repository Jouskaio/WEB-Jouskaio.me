import Head from "next/head";
import Link from "next/link";
import { TextH1 } from "@jouskaio/ui";

import { projects } from "../../lib/projects";

export default function WorkPage() {
    return (
        <section className="l-works">
            <Head>
                <title>Works – Jouskaio</title>
                <meta
                    name="description"
                    content="Case studies of Manon Salsou: Babel, a personal and social library, and Toolkit, a set of shell tools for servers."
                />
                <link rel="canonical" href="https://jouskaio.me/work" />
            </Head>

            <TextH1 classname="l-works__a-title">Works</TextH1>

            <ul className="l-works__m-grid">
                {projects.map((project, index) => (
                    <li key={project.slug} data-aos="fade-up" data-aos-duration={800} data-aos-delay={index * 120}>
                        <Link href={`/work/${project.slug}`} className="l-works__m-card">
                            {project.icon ? (
                                // A plain <img>: a small static file, no need for the image optimizer (which refuses SVG)
                                <img className="l-works__a-icon" src={project.icon} alt="" width={64} height={64} />
                            ) : (
                                <span className="l-works__a-icon l-works__a-icon--letter" aria-hidden="true">
                                    {project.name.charAt(0)}
                                </span>
                            )}
                            <span className="l-works__a-name">{project.name}</span>
                            <span className="l-works__a-tagline">{project.tagline}</span>
                            <span className="l-works__a-summary">{project.summary}</span>
                            <span className="l-works__m-tags">
                                {project.stack.slice(0, 4).map((tech) => (
                                    <span key={tech} className="l-works__a-tag">
                                        {tech}
                                    </span>
                                ))}
                            </span>
                            <span className="l-works__a-more">
                                See the case study <span aria-hidden="true">→</span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
