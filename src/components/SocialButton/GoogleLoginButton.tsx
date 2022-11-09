// refered for google login https://blog.logrocket.com/guide-adding-google-login-react-app/ 

// import modules for google login 
import { GoogleLogin} from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import {GoogleLoginButton} from "react-social-login-buttons";

function GoogleButton() {
 
  // client id created in google developer console
  const clientId = '658619845650-jpk8djppv8jjiu5c5pumivcbgb97phgi.apps.googleusercontent.com'
 
  //when the response success 
  const onSuccess = (res: any) => {
    console.log('success',res)
  };

  //when the response failure 
  const onFailure = (err: any) => {
    console.log('failed:', err);
  };


  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
  </div>
  );
}

export default GoogleButton;
