import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function EmailJS({ selectedPackageLabel = "", modalStyle = false }) {

    const form = useRef();

    const [packageLabel, setPackageLabel] = useState("");

    useEffect(() => {
        if (typeof selectedPackageLabel !== "string") {
            setPackageLabel("");
            return;
        }

        setPackageLabel(selectedPackageLabel);
    }, [selectedPackageLabel]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_khw134q', 'template_fx7wasf', form.current, {
                publicKey: '1mEXYYWmjEuxNrqM_',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const formClassName = modalStyle
        ? "flex flex-col w-full h-auto box-content p-5 bg-blaq bg-opacity-70 backdrop-blur-4xl text-offWhitez font-bold rounded-lg border border-grayzDark"
        : "flex flex-col w-full h-auto box-content p-5 bg-peach text-blaq font-bold rounded-lg";

    const inputClassName = modalStyle
        ? "border border-grayzDark bg-black bg-opacity-30 text-offWhitez p-2 rounded-md"
        : "border-s-pinkz p-2 rounded-md";

    const labelClassName = modalStyle
        ? "p-1 px-1 pt-4 text-sm text-tealz font-black"
        : "border-s-pinkz p-1 px-1 pt-4 text-sm text-grayzDark font-black";

    return (
        <form ref={form} onSubmit={sendEmail} className={formClassName}>

            <label className={labelClassName}>Name</label>
            <input className={inputClassName} type="text" name="user_name" required />

            <label className={labelClassName}>Email</label>
            <input className={inputClassName} type="email" name="user_email" required />

            <label className={labelClassName}>Let's chat about:</label>
            <input
                name="selected_package"
                className={modalStyle ? inputClassName : "border-s-pinkz p-2 rounded-md bg-peach"}
                readOnly
                value={packageLabel}
            />

            <label className={labelClassName}>Message</label>
            <textarea className={inputClassName} name="message" required />

            <input
                type="submit"
                value="Send"
                className={modalStyle ? "mt-6 p-3 rounded-md bg-tealz text-blaq font-black hover:opacity-90 cursor-pointer" : "mt-4"}
            />
        </form>
    );
}

export default EmailJS;