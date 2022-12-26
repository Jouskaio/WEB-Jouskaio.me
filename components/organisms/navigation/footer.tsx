import TextSpanM from "../../atom/text/textSpanM";

function Footer(props) {
    return (
        <div className={"o-footer"}>
            <TextSpanM classname="o-footer__content">{props.children}</TextSpanM>
        </div>
    )
}

export default Footer;