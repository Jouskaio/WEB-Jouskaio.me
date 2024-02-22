import React from "react";
import TextH1 from "../components/atom/text/textH1";
import TextDefault from "../components/atom/text/TextDefault";
import TextH2 from "../components/atom/text/textH2";
import Email from "../components/organism/interaction/email";
import {useWindowSize} from "../lib/motion/sizeWindow";
import TextH3 from "../components/atom/text/textH3";
import CardCitation from "../components/molecule/cards/cardCitation";

export default function Contact (props) {
    const { alert } = props;
    const size = useWindowSize();
    const statusAOS = size && size.width !== undefined;

    return (
        <section className={"l-contact"}>
            <TextH1 classname={"l-contact__a-title"}>Contact me</TextH1>
            <div className={"l-contact__m-flexDiv"}>
                <div className={"l-contact__m-infoDiv"}>
                    <TextDefault>Feel free to contact me through my portfolio or mail to discuss potential
                        collaborations or projects !</TextDefault>
                    <br/>
                    <br/>
                    <TextDefault><strong className={"l-contact__m-infoDiv--a-span"}>Availability</strong> <br/>Currently
                        finishing my Master degree until September 2024 on Paris but after that I will be available to
                        work anywhere. I was used to travel a lot where studying in engineering school so distance isn't
                        a problem.</TextDefault>
                    {statusAOS && (
                        <Email
                            url={"http://localhost:2000"}
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
                        urlPhotoProfile={"https://media.licdn.com/dms/image/C5603AQGXr_baLyGibw/profile-displayphoto-shrink_800_800/0/1582906820768?e=2147483647&v=beta&t=6df5VyT9DeZ5E35Pg-Iw0h_dH5Hxd27iV1inCJPOl_A"}
                        aosDuration={1000}
                        aosEffect={size && size.width <= 768 ? "fade-up" : "fade-right"}>
                        I highly recommend: hardworking, self-sufficient and intelligent.
                    </CardCitation>
                </div>
            )}
        </section>
    )
}