// refered for google login https://blog.logrocket.com/guide-adding-google-login-react-app/ 

// import modules for google login 
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useEffect, useState } from 'react';
import LoginMessage from '../BussinessLogin/LoginMesage';
import { Link, Route, Routes } from 'react-router-dom';


function GoogleButton() {
  // const [isShown, setIsShown] = useState(false);

  // client id for google login
  const clientId = '658619845650-g4kbf7n1lsoduknosfk0gs317rev14fn.apps.googleusercontent.com'

  //when the response success 
  const onSuccess = (res: any) => {
    // setIsShown(true);
    console.log('success', res)
  };

  //when the response failure 
  const onFailure = (err: any) => {
    alert('Login failed..')
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
          isSignedIn={false}
        />
      {/* 👇️ show component on click */}
      {/* {isShown && <LoginMessage />} */}

    </div>
  );
}

export default GoogleButton;
