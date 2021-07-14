import "../css/Content.css";
function Home() {
    return (
        <div>
            <h1 className="Content-Header Content-Centre Content-Top-Element">DanningtonSystems</h1>
            <p className="Content-Body Content-Centre"><code>Systems administration, web design, and backend development</code></p>
            <h1 className="Content-Header Content-Centre">Status</h1>
            <iframe title="System status" className="Content-Frame" src="https://dannington.instatus.com/embed-status/dark-lg" width="245" height="61" frameBorder="0" scrolling="no" style={{ border: "none" }}></iframe>
        </div>
    );
};

export default Home;