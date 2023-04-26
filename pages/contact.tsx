import React from "react";
import TextH1 from "../components/atom/text/textH1";
import TextDefault from "../components/atom/text/TextDefault";
import GoogleMap from "../components/molecule/media/googlemap";
import TextH2 from "../components/atom/text/textH2";
import TextSpanXXXL from "../components/atom/text/textSpanXXXL";
import TextSpanM from "../components/atom/text/textSpanM";
import Citation from "../components/molecule/quotes/citation";

export default function Contact () {
    return (
        <section className={"l-contact"}>
            <TextH1 classname={"l-contact__a-title"}>Contact me</TextH1>
            <div className={"l-contact__m-flexDiv"}>
                <div className={"l-contact__m-infoDiv"}>
                    <TextDefault>Feel free to contact me through my portfolio or mail to discuss potential collaborations or projects !</TextDefault>
                    <br/>
                    <TextDefault><span className={"l-contact__m-infoDiv--a-span"}>Email : </span><a href={"mailto:jouskaio.me@gmail.com"} className={"l-contact__m-infoDiv--a-link"}>jouskaio.me@gmail.com</a></TextDefault>
                    <TextDefault><span className={"l-contact__m-infoDiv--a-span"}>Twitter : </span><a href={"https://twitter.com/Jouskaio_"} className={"l-contact__m-infoDiv--a-link"}>@Jouskaio_</a></TextDefault>
                    <TextDefault><span className={"l-contact__m-infoDiv--a-span"}>Linkedin : </span><a href={"https://www.linkedin.com/in/manonsalsou/"} className={"l-contact__m-infoDiv--a-link"}>@manonsalsou</a></TextDefault>
                    <br/>
                    <TextDefault><span className={"l-contact__m-infoDiv--a-span"}>Availability :</span> <br/>Currently finishing my Master degree until September 2024 on Paris but after that I will be available to work anywhere. I was used to travel a lot where studying in engineering school so distance isn't a problem.</TextDefault>
                </div>
                <div className={"l-contact__m-mapDiv"}>
                    <GoogleMap latitude={48.7519645690918} width={"100%"} height={"400px"} zoom={11} longitude={2.505256414413452}/>
                </div>
            </div>
            <TextH2 classname={"l-contact__m-infoDiv--a-title"}>Recommendations</TextH2>
            <br/>
            <div className={"l-contact__m-recoDiv"}>
                <Citation
                    urlSource={"https://www.linkedin.com/posts/jean-camille-sormain-65779924_eemi-arkit-docker-activity-6734857664557264896-onQ8?utm_source=share&utm_medium=member_desktop"}
                    translation={"I highly recommend: hardworking, self-sufficient and intelligent."}
                    nameProfil={"Jean-Camille Sormain"}
                    descriptionProfil={"Novae Memorae CEO"}
                    urlProfil={"https://www.linkedin.com/in/jean-camille-sormain-65779924/"}
                    urlPhotoProfil={"https://media.licdn.com/dms/image/C5603AQGXr_baLyGibw/profile-displayphoto-shrink_400_400/0/1582906820768?e=1687996800&v=beta&t=xqs6wKkcaZ0UmDRBNHOT-MkNMT46uVjcyIdcF1EWzk0"}
                >
                    Je recommande chaudement : travailleuse, autonome et intelligente.
                </Citation>
            </div>
        </section>
    )
}