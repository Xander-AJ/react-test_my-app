import logo from '../logo.svg'
import { NavItems } from './nav-items'


require('dotenv').config()
const APIKEY = process.env.API_KEY

console.log("APIKEY", APIKEY)

export const Navbar = ({ text }) => {
    return (
        <div className=' bg-slate-100'>
            <div className='flex items-center justify-between container p-4'>
                <img src={logo} alt="logo" className='w-24 h-full' />
                <NavItems />
            </div>


        </div> 
    )
}