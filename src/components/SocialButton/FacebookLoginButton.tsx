import {FacebookLoginButton} from "react-social-login-buttons";

const FacebookButton = () =>{
    return(
        <>
            <FacebookLoginButton onClick={() => alert("second")} />
        </>
    );
}


export default FacebookButton;