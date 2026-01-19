import "../styles.css";

export default function footer() {
    return(
        <div className="footer">
            <h1>© {new Date().getFullYear()} Notes App. All rights reserved.</h1>
        </div>
    );
}