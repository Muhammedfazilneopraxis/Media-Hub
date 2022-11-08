import {GoogleLoginButton} from "react-social-login-buttons";

const GoogleButton = () => {
    return(
        <>
        <GoogleLoginButton onClick={() => alert("first")} />
        </>
    );
}

export default GoogleButton