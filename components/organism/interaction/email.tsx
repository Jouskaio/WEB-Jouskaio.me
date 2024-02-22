import React, {useEffect, useState} from "react";
import TextDefault from "../../atom/text/TextDefault";
import PropTypes from "prop-types";

function Email(props) {
    const { url, alert, aosDuration, aosEffect, className } = props;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const [submissionStatus, setSubmissionStatus] = React.useState(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        // Use the useEffect hook to trigger the alert when submissionStatus changes
        if (submissionStatus) {
            alert(submissionStatus);
            setSubmissionStatus(null)
        }
    }, [submissionStatus, alert]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        // Créez l'URL complète
        const apiUrl = `${url}/v1/email`;
        try {
            if (formData.email && formData.title && formData.message && formData.name) {
                const response = await sendData(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                    timeout: 1000,
                });

                if (response.status === 200) {
                    setSubmissionStatus("Email sent successfully");
                    setShowAlert(true);
                } else if (response.status === 500) {
                    setSubmissionStatus("Error while sending an email to contact@jouskaio.me. This error isn't related to you");
                    setShowAlert(true);
                }
                else {
                    setSubmissionStatus("Error sending email. Please try again later");
                    setShowAlert(true);
                }
            } else {
                setSubmissionStatus("Please complete all fields as requested");
                setShowAlert(true);
            }
        } catch (error) {
            setSubmissionStatus("Error sending email. Please try again later");
            setShowAlert(true);
        }

        // Close the alert after 2 seconds
        setTimeout(() => {
            setShowAlert(false);
            setSubmissionStatus(null);
        }, 2000);
    };

    const sendData = async (url, options) => {
        try {
            return await fetch(url, options);
        } catch (error) {
            throw error;
        }
    };

    return (
        <div className={"m-email " + className} data-aos={aosEffect} data-aos-duration={aosDuration}>
            <form onSubmit={sendEmail}>
                <div>
                    <label>
                        <TextDefault classname={"m-email--a-label"}>Your name</TextDefault>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={"m-email__a-input"}
                            required={true}
                        />
                    </label>
                    <label>
                        <TextDefault classname={"m-email--a-label"}>Email</TextDefault>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={"m-email__a-input"}
                            required={true}
                        />
                    </label>
                </div>
                <label>
                    <TextDefault classname={"m-email--a-label"}>Title</TextDefault>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={"m-email__a-input"}
                        required={true}
                    />
                </label>
                <label>
                    <TextDefault classname={"m-email--a-label"}>Message</TextDefault>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required={true}
                        className={"m-email__a-input  m-email__a-input--a-textarea"}
                    />
                </label>
                <input type="submit" value="Send the message" className={"m-email__a-input m-email__a-input--a-submit"} />
            </form>

        </div>
    );
}

Email.propTypes = {
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
    alert: PropTypes.func,
    aosDuration: PropTypes.number,
    aosEffect: PropTypes.string,
};

export default Email;
