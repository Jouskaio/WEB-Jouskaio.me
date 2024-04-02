import TextSpanM from "../../atom/text/textSpanM";
import Link from "next/link";
import TextDefault from "../../atom/text/TextDefault";
import TextH3 from "../../atom/text/textH3";

function Footer(props) {
    return (
        <div className={"o-footer " + props.classname} data-aos={"fade-up"} data-aos-duration={1000}>
                <hr className={"o-footer__a-hr"}/>
                <TextH3 classname={"o-footer__a-textH3"}>Don't hesitate to drop me an email or contact me via my profiles pictures</TextH3>
                <nav className={"o-footer__m-divRow"}>
                    <Link href={"mailto:manon.salsou@icloud.com"} legacyBehavior><a className={"o-footer__a-mail"}>manon.salsou@icloud.com</a></Link>
                    <nav className={"o-footer__m-divRowOneIcons"}>
                        <a href={"https://www.pinterest.fr/jouskaio/"} className={"o-footer__a-icons"}><img src={"/icons/pinterest.png"} className={"o-footer__a-icons--img"} alt={"Pinterest"}/></a>
                        <a href={"https://twitter.com/Jouskaio_"} className={"o-footer__a-icons"}><img src={"/icons/twitter.png"} className={"o-footer__a-icons--img"} alt={"Twitter"}/></a>
                        <a href={"https://www.instagram.com/jouskaio/"} className={"o-footer__a-icons"}><img src={"/icons/github.png"} className={"o-footer__a-icons--img"} alt={"GitHub"}/></a>
                        <a href={"https://github.com/Jouskaio"} className={"o-footer__a-icons"}><img src={"/icons/instagram.png"} className={"o-footer__a-icons--img"} alt={"Instagram"}/></a>
                        <a href={"https://www.linkedin.com/in/manonsalsou/"} className={"o-footer__a-icons"}><img src={"/icons/linkedin.png"} className={"o-footer__a-icons--img"} alt={"Linkedin"}/></a>
                        <a href={"https://open.spotify.com/user/desespery?si=ac027624ff264504&nd=1"} className={"o-footer__a-icons"}><img src={"/icons/spotify.png"} className={"o-footer__a-icons--img"} alt={"Spotify"}/></a>
                    </nav>
                </nav>
            <nav className={"o-footer__m-divRow o-footer__m-divRowTwo"}>
                <TextDefault>Made with ♥ in Paris</TextDefault>
                <TextDefault classname={"o-footer__a-rowLast"}>©2023 Manon Salsou</TextDefault>
            </nav>
        </div>
    )
}

export default Footer;