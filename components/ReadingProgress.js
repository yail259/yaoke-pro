import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useState, useEffect } from 'react';

export default function ReadingProgress() {
    const [width, setWidth] = useState(0);

    const scrollHeight = () => {
        let el = document.documentElement,
          ScrollTop = el.scrollTop || document.body.scrollTop,
          ScrollHeight = el.scrollHeight || document.body.scrollHeight;
        let percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
        // store percentage in state
        setWidth(percent);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () =>window.removeEventListener("scroll", scrollHeight);
    })

    return (
        <div style={{ width: 80, height: 80 }} className='fixed right-20 bottom-20'>
            <CircularProgressbar 
            value={width} 
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',

                // Text size
                textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                // Colors
                pathColor: `rgba(27, 101, 106, ${width / 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })} 
            strokeWidth={25}
            />
        </div>
    )
    
}