import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { GiSandsOfTime } from 'react-icons/gi'
import { MdComputer } from 'react-icons/md'
import { BsFillPenFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div className="flex">     

      <main className="flex">
        <div className="flex text-5xl h-screen w-69 justify-center items-center flex-col">
          <h1 className='hover:text-morb-yellow'>
            yao's 
            <span className='text-morb-blue'> cool </span>
            website
          </h1>

          <pre className='flex text-2xl m-4 hover:text-morb-yellow'>
            playing around with javascript
          </pre>
        </div>       


        <div className="flex">
          <Link href="programming">
            <a className="top-6 h-32 m-4 hover:m-6 p-6 text-left border-2 rounded-lg hover:text-morb-yellow">
              <h2> <MdComputer/> programming; </h2>
              <p>some tutorials and stuff </p>
            </a>
          </Link>
          
          <Link href="time">
            <a className="h-20 m-6 hover:m-8 p-6 text-left border-2 rounded-lg hover:text-morb-yellow">
              <h2> <GiSandsOfTime/> what time is it??? </h2>              
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
