import Link from "next/link"

import { GiSandsOfTime } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'
import { BsFillPenFill } from 'react-icons/bs'
import { BiHomeHeart } from 'react-icons/bi'
import LinkWrapper from "../lib/LinkerWrapper"

// const root = ReactDOM.createRoot(document.getElementById('root'));
const NavbarIcon = ({ icon, goto = '/' }) => {
    return(
        <LinkWrapper goto={goto}>
            <div className='relative flex items-center justify-center 
            h-12 w-12 mt-2 mx-2 mb-2 my-auto shadow-lg
            bg-morb-blue text-white
            hover:text-morb-yellow
            rounded-3xl hover:rounded-xl
            transition-all duration-300 ease-linear'>
                {icon} 
            </div>
        </LinkWrapper>
    )
}

export default function Navbar() {
    return (
        <>
            <div className="px-8 fixed justify-end top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-300 shadow-lg">
                <NavbarIcon icon={<BsFillPenFill size="28" />} goto='/blog'/>
                <NavbarIcon icon={<GiSandsOfTime size="32" />} goto='/time'/>
                <NavbarIcon icon={<MdComputer size="32" />} goto='/programming'/>

                <NavbarIcon className='float-left' icon={<BiHomeHeart size="32" goto='' /> } />
                
            </div>
        </>
        
    )
}

