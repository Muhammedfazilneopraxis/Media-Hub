import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'
import Pages from '../Pages/Createpage'
import {Route, Routes } from 'react-router-dom'
import BussinessLogin from '../SocialLogin/Login'
import Dashboard from '../Dashboard/Dashboard'





const Body = ({ children }: any) => {
  return (
    <div className={s.rootContainer}>
      {/* <HeadSection>
            </HeadSection> */}
      <hr></hr>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<BussinessLogin />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='*' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default Body