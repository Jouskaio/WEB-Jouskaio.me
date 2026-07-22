import React from "react";
import Image from "next/image";
import { TextH1, TextDefault, Email, TextH3, CardCitation, useWindowSize } from "@jouskaio/ui";

export default function Contact (props) {
    const { alert } = props;
    const size = useWindowSize();
    const statusAOS = size && size.width !== undefined;

    return (
        <section className={"l-contact"}>
            <TextH1 classname={"l-contact__a-title"}>Get in Touch</TextH1>
            <div className={"l-contact__m-flexDiv"}>
                <div className={"l-contact__m-infoDiv"}>
                    <TextDefault>
                        Got a project in mind, a question, or just want to say hello? I'm always open to discussing new creative ideas, technical challenges, or opportunities to be part of your vision. Let's build something amazing together!
                    </TextDefault>
                    <br/>
                    <br/>
                    <TextDefault>
                        <strong className={"l-contact__m-infoDiv--a-span"}>Current Status</strong>
                        <br/>
                        Available for worldwide collaborations. Currently based in Paris, I am open to full-time roles or freelance opportunities. With extensive experience in remote work and a passion for travel, I can adapt to your team's needs wherever you are.
                    </TextDefault>
                    <div className="l-contact__m-socials">
                        <a href="https://www.linkedin.com/in/manonsalsou/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Image src="/icons/linkedin.png" alt="" width={32} height={32} />
                        </a>
                        <a href="https://github.com/Jouskaio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Image src="/icons/github.png" alt="" width={32} height={32} />
                        </a>
                        <a href="https://twitter.com/Jouskaio_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Image src="/icons/twitter.png" alt="" width={32} height={32} />
                        </a>
                    </div>
                    {statusAOS && (
                        <Email
                            url={process.env.JOUSKAIO_API}
                            className={"l-contact__m-emailForm"}
                            alert={alert}
                            aosDuration={1000}
                            aosEffect={"fade-right"}
                        />
                    )}
                </div>
            </div>
            <TextH3 classname={"l-contact__m-infoDiv--a-title"}>Recommendations</TextH3>
            {statusAOS && (
                <div className={"l-contact__m-recoDiv"} data-aos-effect={"fade-up"} data-aos-duration={1000}>
                    <CardCitation
                        classname={"l-contact__m-recoDiv--a-citation"}
                        urlSource={"https://www.linkedin.com/posts/jean-camille-sormain-65779924_eemi-arkit-docker-activity-6734857664557264896-onQ8?utm_source=share&utm_medium=member_desktop"}
                        nameProfile={"Jean-Camille Sormain"}
                        descriptionProfile={"Novae Memorae CEO"}
                        urlProfile={"https://www.linkedin.com/in/jean-camille-sormain-65779924/"}
                        urlPhotoProfile={"/images/jean-camille-sormain.png"}
                        aosDuration={1000}
                        aosEffect={size && size.width <= 768 ? "fade-up" : "fade-right"}>
                        I highly recommend: hardworking, self-sufficient and intelligent.
                    </CardCitation>
                </div>
            )}
        </section>
    )
}