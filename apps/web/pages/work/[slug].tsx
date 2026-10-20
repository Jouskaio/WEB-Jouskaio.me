import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { TextH1, TextDefault, useWindowSize } from "@jouskaio/ui";

import { gridEffect } from "../../lib/aos";
import { getProject, projects, type Project } from "../../lib/projects";

const SITE = "https://jouskaio.me";

export default function ProjectPage({ project }: { project: Project }) {
    const size = useWindowSize();
    const twoColumns = !!size && size.width !== undefined && size.width >= 768;
    const title = `${project.name} – Jouskaio`;
    const url = `${SITE}/work/${project.slug}`;
    // The features keep their order; consecutive ones with the same group share a heading
    const groups = project.features.reduce<{ name: string; features: Project["features"] }[]>((list, feature) => {
        const name = feature.group || "";
        const last = list[list.length - 1];
        if (last && last.name === name) {
            last.features.push(feature);
        } else {
            list.push({ name, features: [feature] });
        }
        return list;
    }, []);

    return (
        <article className="l-project">
            <Head>
                <title>{title}</title>
                <meta name="description" content={`${project.tagline}. ${project.summary}`} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={project.summary} />
                <meta property="og:url" content={url} />
            </Head>

            <Link href="/work" className="l-project__a-back">
                <span aria-hidden="true">←</span> All work
            </Link>

            <header className="l-project__m-hero" data-aos="fade-down" data-aos-duration={800}>
                {project.icon ? (
                    // A plain <img>: a small static file, no need for the image optimizer (which refuses SVG)
                    <img className="l-project__a-icon" src={project.icon} alt="" width={96} height={96} />
                ) : (
                    <span className="l-project__a-icon l-project__a-icon--letter" aria-hidden="true">
                        {project.name.charAt(0)}
                    </span>
                )}
                <div className="l-project__m-heroText">
                    <TextH1 classname="l-project__a-title">{project.name}</TextH1>
                    <p className="l-project__a-tagline">{project.tagline}</p>
                </div>
            </header>

            <TextDefault classname="l-project__a-summary">{project.summary}</TextDefault>

            <ul className="l-project__m-links">
                {project.links.map((link, index) => (
                    <li key={link.url}>
                        <a
                            href={link.url}
                            className={`l-project__a-button${index > 0 ? " l-project__a-button--outline" : ""}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.name} <span aria-hidden="true">↗</span>
                            <span className="l-project__a-hint"> (new tab)</span>
                        </a>
                    </li>
                ))}
            </ul>

            <dl className="l-project__m-facts">
                <div className="l-project__m-fact">
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                </div>
                <div className="l-project__m-fact">
                    <dt>Status</dt>
                    <dd>{project.status}</dd>
                </div>
                <div className="l-project__m-fact">
                    <dt>Stack</dt>
                    <dd>
                        <ul className="l-project__m-tags">
                            {project.stack.map((tech) => (
                                <li key={tech} className="l-project__a-tag">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </dd>
                </div>
            </dl>

            {project.screens && project.screens.length > 0 && (
                <section aria-labelledby="project-screens" className="l-project__m-section">
                    <h2 id="project-screens" className="a-titleH2 l-project__a-heading">
                        In the app
                    </h2>
                    {project.screens.map((screen) => (
                        <figure key={screen.src} className="l-project__m-screen">
                            <img
                                className="l-project__a-screen"
                                src={screen.src}
                                alt={screen.alt}
                                width={screen.width}
                                height={screen.height}
                                loading="lazy"
                            />
                            <figcaption className="l-project__a-caption">{screen.caption}</figcaption>
                        </figure>
                    ))}
                </section>
            )}

            <section aria-labelledby="project-features" className="l-project__m-section">
                <h2 id="project-features" className="a-titleH2 l-project__a-heading">
                    Features
                </h2>
                {groups.map((group) => {
                    // Without a group heading, the title of a card is directly under the section heading
                    const CardTitle = group.name ? "h4" : "h3";
                    return (
                    <div key={group.name} className="l-project__m-group">
                        {group.name && <h3 className="l-project__a-groupTitle">{group.name}</h3>}
                        <ul className="l-project__m-features">
                            {group.features.map((feature, index) => (
                                <li
                                    key={feature.title}
                                    className="l-project__m-feature"
                                    data-aos={gridEffect(index, twoColumns)}
                                    data-aos-duration={700}
                                    data-aos-delay={Math.min(Math.floor(index / 2), 3) * 80}
                                >
                                    <CardTitle className="l-project__a-featureTitle">{feature.title}</CardTitle>
                                    <p className="l-project__a-featureText">{feature.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    );
                })}
            </section>

            <section aria-labelledby="project-how" className="l-project__m-section">
                <h2 id="project-how" className="a-titleH2 l-project__a-heading">
                    {project.how.title}
                </h2>
                {project.how.command && (
                    <pre className="l-project__a-code">
                        <code>{project.how.command}</code>
                    </pre>
                )}
                <ul className="l-project__m-points">
                    {project.how.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </section>
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const project = getProject(String(params?.slug));
    return project ? { props: { project } } : { notFound: true };
};
