import { useEffect, useState } from 'react';

import TextDefault from '../../atom/text/TextDefault';

type EmailFormData = {
    name: string;
    email: string;
    title: string;
    message: string;
};

export type EmailProps = {
    url?: string;
    className?: string;
    alert?: (message: string) => void;
    aosDuration?: number;
    aosEffect?: string;
};

/**
 * Molecule: Email
 */
export default function Email({
                                  url = '',
                                  alert,
                                  aosDuration,
                                  aosEffect,
                                  className = '',
                              }: EmailProps) {
    const [formData, setFormData] = useState<EmailFormData>({
        name: '',
        email: '',
        title: '',
        message: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (submissionStatus && alert) {
            alert(submissionStatus);
            setSubmissionStatus(null);
        }
    }, [submissionStatus, alert]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendData = async (targetUrl: string, options: RequestInit) => {
        return fetch(targetUrl, options);
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const apiUrl = `${url}/v1/email`;

        try {
            if (
                formData.email &&
                formData.title &&
                formData.message &&
                formData.name
            ) {
                const response = await sendData(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.status === 200) {
                    setSubmissionStatus('Email sent successfully');
                    setShowAlert(true);
                } else if (response.status === 500) {
                    setSubmissionStatus(
                        "Error while sending an email to contact@jouskaio.me. This error isn't related to you"
                    );
                    setShowAlert(true);
                } else {
                    setSubmissionStatus('Error sending email. Please try again later');
                    setShowAlert(true);
                }
            } else {
                setSubmissionStatus('Please complete all fields as requested');
                setShowAlert(true);
            }
        } catch {
            setSubmissionStatus('Error sending email. Please try again later');
            setShowAlert(true);
        }

        window.setTimeout(() => {
            setShowAlert(false);
            setSubmissionStatus(null);
        }, 2000);
    };

    return (
        <div
            className={`m-email ${className}`.trim()}
            data-aos={aosEffect}
            data-aos-duration={aosDuration}
        >
            <form onSubmit={sendEmail}>
                <div>
                    <label>
                        <TextDefault classname="m-email--a-label">
                            Your name
                        </TextDefault>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="m-email__a-input"
                            required
                        />
                    </label>

                    <label>
                        <TextDefault classname="m-email--a-label">
                            Email
                        </TextDefault>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="m-email__a-input"
                            required
                        />
                    </label>
                </div>

                <label>
                    <TextDefault classname="m-email--a-label">
                        Title
                    </TextDefault>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="m-email__a-input"
                        required
                    />
                </label>

                <label>
                    <TextDefault classname="m-email--a-label">
                        Message
                    </TextDefault>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="m-email__a-input m-email__a-input--a-textarea"
                    />
                </label>

                <input
                    type="submit"
                    value="Send the message"
                    className="m-email__a-input m-email__a-input--a-submit"
                />
            </form>

            {showAlert && submissionStatus && (
                <TextDefault classname="m-email__a-status">
                    {submissionStatus}
                </TextDefault>
            )}
        </div>
    );
}
