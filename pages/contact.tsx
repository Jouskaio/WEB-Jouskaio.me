import React from "react";
import TextH1 from "../components/atom/text/textH1";
import TextDefault from "../components/atom/text/TextDefault";
import GoogleMap from "../components/molecule/media/googlemap";

export default class Contact extends React.Component {
    render() {
        return (
            <section className={"l-contact"}>
                <TextH1 classname={"l-contact__a-title"}>Contact me</TextH1>
                <div className={"l-contact__m-flexDiv"}>
                    <div className={"l-contact__m-formDiv"}>
                        <TextDefault>Feel free to contact me through my portfolio or mail to discuss potential collaborations or projects !</TextDefault>
                        <form action="/send-data-here" method="post">
                            <label htmlFor="first">First name:</label>
                            <input type="text" id="first" name="first"/>
                            <label htmlFor="last">Last name:</label>
                            <input type="text" id="last" name="last"/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className={"l-contact__m-mapDiv"}>
                        <GoogleMap latitude={48.748720} width={"100%"} height={"500px"} zoom={11} longitude={2.513000}/>
                    </div>
                </div>
            </section>
        )
    }
}