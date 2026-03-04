import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function EmailJS({ selectedPackageLabel = "" }) {

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

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full h-auto box-content p-5 bg-peach text-blaq font-bold rounded-lg'>

            <label className=' border-s-pinkz p-1 px-1 pt-4 text-sm text-grayzDark font-black'>Name</label>
            <input className=' border-s-pinkz p-2 rounded-md' type="text" name="user_name" required />

            <label className=' border-s-pinkz p-1 px-1 pt-4 text-sm text-grayzDark font-black'>Email</label>
            <input className=' border-s-pinkz p-2 rounded-md' type="email" name="user_email" required />

            <label className=' border-s-pinkz p-1 px-1 pt-4 text-sm text-grayzDark font-black'>Let's chat about:</label>
            <input name="selected_package" className='border-s-pinkz p-2 rounded-md bg-peach' readOnly value={packageLabel} />

            <label className=' border-s-pinkz p-1 px-1 pt-4 text-sm text-grayzDark font-black'>Message</label>
            <textarea className=' border-s-pinkz p-2 rounded-md' name="message" required />

            <input type="submit" value="Send" />
        </form>
    );
}

export default EmailJS;