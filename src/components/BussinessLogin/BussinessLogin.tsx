import Center from '../Common/Center';
import GoogleButton from 'react-google-button';

const BussinessLogin = () => {
    return (
        <div className="grid  h-full grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className='bg-white col-span-2'>
                <div className='text-center flex h-full flex-col  justify-center items-center sm:h-full '>
                    <h1 className='font-bold text-2xl '>Media Hub</h1>
                    <p className='text-xs lg:text-base md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dolorum maxime in nisi sit tempore quos, facilis consectetur labore doloribus eos eveniet expedita sapiente ipsum at magnam odit nihil quibusdam minima illum necessitatibus. In id veritatis quasi vel debitis voluptate voluptatum quod, dolorum rem praesentium sit dolores cum laborum officia?</p>
                </div>
            </div>
            <Center className='lg:bg-slate-200 flex flex-col'>
                    <GoogleButton   
                        type="dark" 
                        onClick={() => { console.log('Google button clicked') }}
                    />
            </Center>
        </div>
    )
}

export default BussinessLogin;