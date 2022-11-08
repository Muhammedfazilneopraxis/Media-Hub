import {TwitterLoginButton } from "react-social-login-buttons";

const TwitterButton = () => {
    return (
        <>
            <TwitterLoginButton onClick={() => alert("third")} />
        </>
    );
}

export default TwitterButton;