import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'
import GoogleLoginButton from '../SocialButton/GoogleLoginButton'


const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            {/* <HeadSection></HeadSection> */}
            {/* <hr></hr> */}
            {/* <div className='bg-red-500 w-1/2 h-1/2 overflow-hidden'> */}
            {/* <p>This is body</p> */}
            {/* <img src={img}  className='h-full aspect-video m-auto overflow-hidden object-cover' /> */}
            <div className="grid grid-cols-2  h-full grid-flow-row-dense  grid-cols-3">
                <div className='bg-white col-span-2'>
                    <div className='container text-center flex h-screen flex-col  justify-center items-center '>
                        <h1 className='font-bold text-2xl'>Media Hub</h1>
                        <p>Bussiness can share medias with the bussiness customer and customer can share medias to the bussiness</p>
                    </div>
                </div>
                <div className='bg-slate-200 flex flex-col justify-center'>
                    <GoogleLoginButton />
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Body