import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'
import Pages from '../Pages/Createpage'
import { signInWithGoogle } from '../../Firebase'
const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            <HeadSection></HeadSection>
            <hr></hr>
            {/* <Pages /> */}
            <button onClick={signInWithGoogle}>Sign in with google</button>
            <h1>{localStorage.getItem("name")}</h1>
            <h2>{localStorage.getItem("email")}</h2>
            <img src={localStorage.getItem("profilepic") ?? ""} />
        </div>
    )
}

export default Body