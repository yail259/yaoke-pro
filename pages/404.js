import Link from "next/link";
import LinkWrapper from "../lib/LinkerWrapper";

export default function Lost() {
    return (
        <>
            <div className="mt-16">
                <h1 className="text-6xl text-center p-10">
                    looks like this page doesn't exist
                </h1>
                
                
                
                <div className="w-screen justify-center flex">
                    <iframe 
                        src="https://giphy.com/embed/9J7tdYltWyXIY" 
                        width="480" 
                        height="404" 
                        frameBorder="0" 
                        allowFullScreen>

                    </iframe>
                    
                </div>

                <div className="w-screen justify-center flex p-10">
                    <LinkerWrapper 
                    goto = '/'
                    component = {
                        <button className="outline-4 outline outline-offset-2 hover:outline-morb-blue rounded-lg text-3xl">
                            Let's get you home :)
                        </button>
                    } 
                    />
                </div>
                
                
            </div>
            
        </>
    )
}