import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'
import BussinessLogin from '../BussinessLogin/BussinessLogin'
import LoginMessage from '../BussinessLogin/LoginMesage'
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'
import Pages from '../Pages/Createpage'
  

const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            {/* <HeadSection></HeadSection> */}
            {/* <hr></hr> */}
            {/* <div className='bg-red-500 w-1/2 h-1/2 overflow-hidden'> */}
            {/* <p>This is body</p> */}
            {/* <img src={img}  className='h-full aspect-video m-auto overflow-hidden object-cover' /> */}
            <Routes>
                <Route path='/' element={<BussinessLogin />}> 
                </Route>
                <Route path='/login' element ={<LoginMessage />}></Route>
            </Routes>
            {/* <LoginMessage /> */}
            
            {/* </div> */}
        </div>
    )
}

export default Body