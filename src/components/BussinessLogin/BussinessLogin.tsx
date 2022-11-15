import GoogleButton from '../SocialButton/GoogleLoginButton'
import Center from '../Common/Center';


const BussinessLogin = () => {
    return (
        <div className="grid grid-cols-2  h-full grid-cols-3">
            <div className='bg-white col-span-2'>
                <div className='text-center flex h-screen flex-col  justify-center items-center '>
                    <h1 className='font-bold text-2xl'>Media Hub</h1>
                    <p>Bussiness can share medias with the bussiness customer and customer can share medias to the bussiness</p>
                </div>
            </div>
            <Center className='bg-slate-200 flex flex-col'>
                    <GoogleButton />
            </Center>
        </div>
    )
}

export default BussinessLogin;