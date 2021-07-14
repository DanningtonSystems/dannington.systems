import "../../css/Content.css";
function Entry(props) {
    return (
        <b><br />{props.name}<b style={{ fontWeight: "normal" }}>: {props.children}</b></b>
    );
};

export default Entry;