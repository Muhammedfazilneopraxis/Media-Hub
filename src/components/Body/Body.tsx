import HeadSection from '../HeadSection'
import s from './Body.module.css'
import img from '../../images/commingsoon.png'
import Home from '../Home/Home'
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'
import AppsBody from '../Apps/AppsBody'
import UploadsBody from '../Uploads/UploadsBody'

const Body = ({ children }: any) => {
    return (
        <div className={s.rootContainer}>
            {/* <HeadSection></HeadSection> */}
            {/* <hr></hr> */}
            {/* <div className='bg-red-500 w-1/2 h-1/2 overflow-hidden'> */}
              <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/apps" element={<AppsBody />} />
                 <Route path="/upload" element={<UploadsBody />} />
                 <Route path="/theme" element={<Home />} />
                 <Route path="/settings" element={<Home />} />
                 <Route path="/users" element={<Home />} />
              </Routes>
            {/* </div> */}
        </div>
    )
}

export default Body