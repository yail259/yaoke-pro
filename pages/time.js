import Link from 'next/link';
import Image from 'next/image';

import React, { useEffect, useState } from 'react';

import Navbar from '../components/navbar'




export default function Time() {

    const start = new Date().getTime();

    const [time, setTime] = useState(7);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    useEffect(() => {

        var updateTime = setInterval(() => {
            let now = new Date().getTime();

            let diff = now - start;

            let passedDay = Math.floor(diff / (1000 * 60 * 60 * 24));
            let passedHour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let passedMinute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let passedSecond = Math.floor((diff % (1000 * 60)) / 1000);

            setDays(passedDay);
            setHours(passedHour);
            setMinutes(passedMinute);
            setSeconds(passedSecond);
        });

        return () => {
            clearInterval(updateTime);
        }
        
    }, [time]);

  return (
    <>              
        
        <Image src="/morbius.png" alt="it's morbin' time" layout='fill'/>
        
        <iframe className="fixed my-auto bottom-0 border-0 width-350px height-800px" src="https://bandcamp.com/EmbeddedPlayer/track=2833872005/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
            {/* <a href="https://epicgamemusic.bandcamp.com/track/its-morbin-time">
                It&#39;s Morbin&#39; Time by Epic Game Music
            </a> */}
        </iframe>

        <div className='container mx-auto'>

            <div className='border-slate-500 border-2 p-6 fixed bottom-5 right-5 mx-auto bg-slate-700 rounded-xl shadow-lg flex items-center space-x-4'>
                <p className='text-right font-bold'>
                    you've spent <br/>
                    {days} days <br/>
                    {hours} hours <br/>
                    {minutes} minutes <br/>
                    {seconds} seconds <br/>
                    morbin'
                </p>
            </div>            
        </div>

        <Navbar/>
        
    </>
  );
}

//setInterval(tick, 1000);