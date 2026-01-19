import "../../styles.css";
import {useEffect, useState} from "react";

export default function Settings() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showMsg, setShowMsg] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false);

    const [name, setName] = useState("")
    const [nameInp, setNameInp] = useState("");
    const [pwdInp, setPwdInp] = useState("")

    const onClickSubmit = (e) => {
        e.preventDefault();

        if (nameInp.trim() == "" || pwdInp.trim() == "") return;

        setIsLoggedIn(true);
        setShowMsg(true);
        setName(nameInp);
    }

    const onClickLoginNow = () => setShowLoginForm(true)
    useEffect(() => {
        if (!showMsg) return;

        const timer = setTimeout(() => {
            setShowMsg(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
        }
    }, [showMsg]);

    if (!isLoggedIn) {
        return(
            <div>
                <p style={{fontSize: "24px"}}>You are not logged in yet</p>
                <button onClick={onClickLoginNow} disabled={showLoginForm}>Login now</button>

                {showLoginForm && 
                <div>
                    <form onSubmit={onClickSubmit} className="login-form">
                    <input 
                    type="text"
                    value={nameInp}
                    onChange={(e) => setNameInp(e.target.value)}
                    placeholder="enter your name..."/>
                    <input 
                    type="password"
                    value={pwdInp}
                    onChange={(e) => setPwdInp(e.target.value)}
                    placeholder="enter password..."/>
                    <button type="submit">submit</button>
                    </form>
                    </div>}
            </div>
        );
    }
    return(
        <div>
            <h1>Welcome {name}</h1>
            {showMsg && <p>login successful!</p>}
        </div>
    );
}