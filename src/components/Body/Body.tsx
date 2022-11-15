import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'
import Pages from '../Pages/Createpage'
import { signInWithGoogle } from '../../Firebase'
import Center from '../Common/Center'
const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            <HeadSection></HeadSection>
            <hr></hr>
            {/* <Pages /> */}
            <Center>
                <button onClick={signInWithGoogle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign in with google</button>
            </Center>
            <h1>{localStorage.getItem("name")}</h1>
            <h2>{localStorage.getItem("email")}</h2>
            <img src={localStorage.getItem("profilepic") ?? ""} />
        </div>
    )
}

export default Body