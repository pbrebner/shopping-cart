import "./styles/ContactForm.css";

function ContactForm() {
    function handleSubmit(e) {
        e.preventDefault();
        //Need to add logic to remove text values when submit is clicked
    }

    return (
        <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formItem">
                <input type={"text"} placeholder="First Name"></input>
            </div>
            <div className="formItem">
                <input type={"text"} placeholder="Last Name"></input>
            </div>
            <div className="formItem colSpan2">
                <input type={"email"} placeholder="Email"></input>
            </div>
            <div className="formItem colSpan2">
                <input type={"text"} placeholder="Subject"></input>
            </div>
            <div className="formItem colSpan2">
                <textarea rows="8" placeholder="Message"></textarea>
            </div>
            <div className="formItem colSpan2">
                <button className="formSubmitBtn" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
