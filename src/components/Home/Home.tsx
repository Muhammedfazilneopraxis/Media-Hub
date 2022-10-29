import React from 'react';
import img from '../../images/commingsoon.png'
import s from '../Body/Body.module.css'

function Home() {
    return (
        <div>
             <img src={img}  className='h-full aspect-video m-auto overflow-hidden object-cover' />
        </div>
    );
}

export default Home;