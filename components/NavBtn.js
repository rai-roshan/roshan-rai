import React, { useState } from 'react';

const FullScreenMenu = ({display, closeMenu}) => (
    <div className={`full-menu ${ display != null ? display ? "animate-open-full-nav" : "animate-close-full-nav" : "" }` }>
        <ul>
            <li onClick={ closeMenu } className={"menu-item"}><a href="#home">Home</a></li>
            <li onClick={ closeMenu } className={"menu-item"}><a href="#education">Education</a></li>
            <li onClick={ closeMenu } className={"menu-item"}><a href="#skills">Skills</a></li>
            <li onClick={ closeMenu } className={"menu-item"}><a href="#experience">Experience</a></li>
            <li onClick={ closeMenu } className={"menu-item"}><a href="#projects">Projects</a></li>
            <li onClick={ closeMenu } className={"menu-item"}><a href="#contact">Contact</a></li>
        </ul>
    </div>
);

export default function NavBtn() {
    const [open, setOpen] = useState(null);

    const handleMenu=()=>{
        if( open === null )
        setOpen(true);

        else
            setOpen(!open);
    }
    return (<div className="fixed bottom-7 right-7 flex flex-col items-end">

        <FullScreenMenu display={open} closeMenu={()=>{ handleMenu() } } />

        <div className="z-50 cursor-pointer bg-gray-50 p-3 rounded-full shadow-2xl" onClick={ handleMenu } >
            { open ?  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            }
        </div>
    </div>)
}