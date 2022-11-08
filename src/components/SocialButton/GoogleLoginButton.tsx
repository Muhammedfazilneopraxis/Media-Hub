import { FacebookLoginButton } from "react-social-login-buttons";

const GoogleLoginButton = () => {
    return(
        <>
        <FacebookLoginButton onClick={() => alert("Hello")} />
        
            <button className="bg-red-700 mx-7 text-white font-bold py-2 px-4 rounded-full">Google Button is here</button>
        </>
    );
}

export default GoogleLoginButton