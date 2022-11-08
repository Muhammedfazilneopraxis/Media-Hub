import GoogleLoginButton from '../SocialButton/GoogleLoginButton'
import FacebookLoginButton from '../SocialButton/FacebookLoginButton'
import TwitterLoginButton from '../SocialButton/TwitterLoginButton';

const BussinessLogin = () => {
    return (
        <div className="grid grid-cols-2  h-full grid-flow-row-dense  grid-cols-3">
            <div className='bg-white col-span-2'>
                <div className='container text-center flex h-screen flex-col  justify-center items-center '>
                    <h1 className='font-bold text-2xl'>Media Hub</h1>
                    <p>Bussiness can share medias with the bussiness customer and customer can share medias to the bussiness</p>
                </div>
            </div>
            <div className='bg-slate-200 flex flex-col justify-center'>
                <GoogleLoginButton />
                <FacebookLoginButton />
                <TwitterLoginButton />
            </div>
        </div>
    )
}

export default BussinessLogin;