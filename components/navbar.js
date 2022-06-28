import Link from "next/link"

import { GiSandsOfTime } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'
import { BsFillPenFill } from 'react-icons/bs'
import { BiHomeHeart } from 'react-icons/bi'


// const root = ReactDOM.createRoot(document.getElementById('root'));
const NavbarIcon = ({ icon, goto = '/' }) => {
    return(
        <Link href={goto}>
            
            <div className='navbar-icon group'>
                {icon} 
            </div>
        </Link>
    )
}

export default function Navbar() {
    return (
        <>
            <div className="fixed justify-end top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-900 shadow-lg">
                <NavbarIcon icon={<BsFillPenFill size="28" />} goto='blog'/>
                <NavbarIcon icon={<GiSandsOfTime size="32" />} goto='time'/>
                <NavbarIcon icon={<MdComputer size="32" />} goto='programming-resources'/>
                
            </div>

            <div className="fixed justify-start top-0 left-0 w-16 h-16 m-0 flex flex-row bg-gray-900 shadow-lg">
                <NavbarIcon icon={<BiHomeHeart size="32" goto='home' /> } />
            </div>
        </>
        
    )
}

