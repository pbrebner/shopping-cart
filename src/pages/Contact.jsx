import ContactForm from "../components/ContactForm";
import "./styles/Contact.css";

//Need to add location information to Contact Page

function Contact() {
    return (
        <div className="contactPage">
            <h2 className="pageHeading">Contact Us</h2>
            <h3>(Location map placeholder)</h3>
            <p>
                Have a question? <strong>Email us</strong> using the form below
                and someone will get back to you as soon as possible.
            </p>
            <ContactForm />
        </div>
    );
}

export default Contact;
