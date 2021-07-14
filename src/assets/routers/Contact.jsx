import "../css/Content.css";
function Contact() {
    return (
    <div>
        <h1 className="Content-Header Content-Centre Content-Top-Element">Contact Us</h1>
        <p className="Content-Body Content-Centre">
            If you have any questions, comments, enquiries, or if you simply just want to say <i>"hello!"</i>,
            then please email Dannington at <a href="mailto:hello@bean.codes" style={{ color: "white", fontWeight: "bold" }}>hello@bean.codes</a>.
        </p>
    </div>
    );
};

export default Contact;