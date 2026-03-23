import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function EmailJS({ selectedPackageLabel = "", modalStyle = false, onSuccessAcknowledge = () => { } }) {

    const form = useRef();

    const [packageLabel, setPackageLabel] = useState("");
    const [submissionState, setSubmissionState] = useState("idle");

    useEffect(() => {
        if (typeof selectedPackageLabel !== "string") {
            setPackageLabel("");
            return;
        }

        setPackageLabel(selectedPackageLabel);
    }, [selectedPackageLabel]);

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmissionState("submitting");

        emailjs
            .sendForm('service_khw134q', 'template_fx7wasf', form.current, {
                publicKey: '1mEXYYWmjEuxNrqM_',
            })
            .then(
                () => {
                    form.current?.reset();
                    setSubmissionState("success");
                    console.log('SUCCESS!');
                },
                (error) => {
                    setSubmissionState("idle");
                    console.log('FAILED...', error.text);
                },
            );
    };

    const formClassName = modalStyle
        ? "flex flex-col h-auto box-content p-5 bg-blaq bg-opacity-70 backdrop-blur-4xl text-offWhitez font-bold rounded-lg border border-grayzDark m-0"
        : "flex flex-col w-full h-auto box-content p-5 bg-peach text-blaq font-bold rounded-lg";

    const inputClassName = modalStyle
        ? "border border-grayzDark bg-black bg-opacity-30 text-blaq p-2 rounded-md"
        : "border-s-pinkz p-2 rounded-md";

    const labelClassName = modalStyle
        ? "p-1 px-1 pt-4 text-sm text-tealz font-black"
        : "border-s-pinkz p-1 px-1 pt-4 text-sm text-grayzDark font-black";

    const submitButtonClassName = modalStyle
        ? "mt-6 p-3 rounded-md border border-white bg-blaq text-white font-black hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        : "mt-4";

    const successContainerClassName = modalStyle
        ? "flex flex-col items-center gap-6 box-content p-8 bg-blaq bg-opacity-70 backdrop-blur-4xl text-offWhitez font-bold rounded-lg border border-grayzDark text-center"
        : "flex flex-col items-center gap-4 box-content p-5 bg-peach text-blaq font-bold rounded-lg text-center";

    const successButtonClassName = modalStyle
        ? "w-full sm:w-auto px-8 py-3 rounded-md bg-blaq text-pinkz font-black hover:opacity-90 border border-pinkz"
        : "px-8 py-3 rounded-md bg-blaq text-offWhitez font-black hover:opacity-90";

    if (submissionState === "success") {
        return (
            <div className={successContainerClassName}>
                <p className="text-xl lg:text-2xl font-black">Your message has been sent successfully.</p>
                <button
                    type="button"
                    onClick={onSuccessAcknowledge}
                    className={successButtonClassName}
                >
                    Okay
                </button>
            </div>
        );
    }

    return (
        <form ref={form} onSubmit={sendEmail} className={formClassName}>

            <label className={labelClassName}>Name</label>
            <input className={inputClassName} type="text" name="user_name" required />

            <label className={labelClassName}>Email</label>
            <input className={inputClassName} type="email" name="user_email" required />

            {/* <label className={labelClassName}>Let's chat about:</label>
            <input
                name="selected_package"
                className={modalStyle ? inputClassName : "border-s-pinkz p-2 rounded-md bg-peach"}
                readOnly
                value={packageLabel}
            /> */}

            <label className={labelClassName}>Message</label>
            <textarea className={inputClassName} name="message" required />

            <input
                type="submit"
                value={submissionState === "submitting" ? "Sending..." : "Send"}
                className={submitButtonClassName}
                disabled={submissionState === "submitting"}
            />
        </form>
    );
}

export default EmailJS;