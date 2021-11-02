import React, { useState } from 'react';
export default function NavBtn() {
    const [open, setOpen] = useState(false);

    const handleClick=()=>{
        setOpen( !open );
    };

    return (<div className="fixed bottom-7 right-7 flex flex-col items-end sm:hidden">
        
        <ul className={`text-right flex flex-col items-end`} >
            <li className={`transition-all p-1 bg-gray-100 shadow-lg rounded-lg mb-2 inline ${ open ? "block" : "hidden" }`}>Home</li>
            {/* <li className={`p-1 bg-gray-100 shadow-lg rounded-lg mb-2 inline ${ open ? "block" : "hidden" }`}>About</li>
            <li className={`p-1 bg-gray-100 shadow-lg rounded-lg mb-2 inline ${ open ? "block" : "hidden" }`}>Experience</li>
            <li className={`p-1 bg-gray-100 shadow-lg rounded-lg mb-2 inline ${ open ? "block" : "hidden" }`}>Contact</li> */}
        </ul>

        <div className="bg-gray-50 p-3 rounded-full shadow-lg" onClick={ handleClick } >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
        </div>
    </div>)
}