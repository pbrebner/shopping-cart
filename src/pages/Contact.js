import React from "react";
import "../styles/Contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div className="contact">
            <h2 className="pageHeading">Contact Us</h2>
            <p>
                Have a question? <strong>Email us</strong> using the form below
                and someone will get back to you as soon as possible.
            </p>
            <ContactForm />
        </div>
    );
}

export default Contact;
