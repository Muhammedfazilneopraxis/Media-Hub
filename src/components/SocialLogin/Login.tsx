import Center from '../Common/Center';

import { auth, login, logout } from '../../Firebase';
import { GoogleLoginButton } from "react-social-login-buttons";

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Button from '../Common/Button';

import { useNavigate } from "react-router-dom";



function BussinessLogin() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        <>
            <div className="grid grid-cols-2  h-full grid-cols-3">
                {loading && <>
                    {console.log('user is loading', loading)}
                </>
                }
                {user && <>
                    {console.log('user is active now', user)}
                    {console.log('user name is', user.displayName)}
                    {/* {navigate("/pages")} */}
                    {/* {navigate('/pages',{state:{id:1,name:'sabaoon'}})} */}
                    {/* <p>{user.displayName}</p> */}
                </>}
                <div className='bg-white col-span-2'>
                    <div className='text-center flex h-screen flex-col  justify-center items-center '>
                        <h1 className='font-bold text-2xl'>Media Hub</h1>                    <p>Bussiness can share medias with the bussiness customer and customer can share medias to the bussiness</p>
                    </div>
                </div>
                <Center className='bg-slate-200 flex flex-col'>
                    <>
                        <GoogleLoginButton onClick={login} />
                    </>
                </Center>

                {error && <div>
                    <p>showing error....</p>
                </div>}
                {/* <img src={localStorage.getItem("profilepic") ?? ""} alt="img file" /> */}

            </div>
        </>
    );
}

export default BussinessLogin;


