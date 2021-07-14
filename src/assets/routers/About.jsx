import "../css/Content.css";
import TextTableEntry from "../component/texttables/Entry";
function About() {
    return (
        <div>
            <h1 className="Content-Header Content-Top-Element">Who are we?</h1>
            <p className="Content-Body">
                DanningtonSystems is a business that offers web design and backend development services, along with systems administration, open source software utilities, and web hosting.
                We strive to offer high-quality solutions to our clients that are simple but versatile.
                Our business aims to offer these solutions at reasonably low prices compared to our competitors. 
            </p>
            <h1 className="Content-Header">How do we handle privacy for our clients?</h1>
            <p className="Content-Body">
                DanningtonSystems is based in California (in the United States), meaning that we are only subject to the California Consumer Privacy Act (CCPA). 
                However, the bulk of our clients are based outside of the US.
                For that reason, all of our design and development services are always designed to be compliant with the European Union's General Data Protection Regulation (GDPR) and other European privacy regulations.
            </p>
            <h2 className="Content-Subheader">What about for web hosting?</h2>
            <p className="Content-Body">
                Our web hosting services are also compliant with the GDPR, and we have a strict minimal-logging policy to ensure privacy for visitors to sites hosted by DanningtonSystems.
                We only store the minimal amount of data necessary to investigate DDoS attacks and for legal purposes. However, this data only includes a timestamp and a unique request ID.
            </p>
            <h1 className="Content-Header">How much do you charge for your services?</h1>
            <p className="Content-Body">
                DanningtonSystems charges a flat fee for all services. 
                For more "advanced" or time-consuming requests, we may add an additional charge for these.
                The following "table" contains information on the current pricing of our services and solutions.
            </p>
            <p style={{ border: "solid" }} className="Content-Body Content-Centre">
                <b style={{ fontSize: "xx-large" }}>Flat-rate pricing for our services</b>
                <TextTableEntry name="Web design & development">£25 GBP ($35 USD)</TextTableEntry>
                <TextTableEntry name="Back-end development">£20 GBP ($28 USD)</TextTableEntry>
                <TextTableEntry name="Systems administration (hourly)">£20 GBP ($28 USD)</TextTableEntry>
                <TextTableEntry name="Systems administration (fixed)">£100 GBP ($140 USD)</TextTableEntry>
            </p>
        </div>
    );
};

export default About;