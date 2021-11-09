import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    useEffect(()=>{

    },[router]);
    return (<div className="fixed top-0 z-10 hidden sm:block">
        <ul className="w-screen flex flex-row pr-7 justify-end bg-gray-50 mr-10">
            <li className={`nav-item ${ router.asPath === "/#home" || router.asPath === '/' ? `active` : '' }`} >
                <Link href={"#home"}><a>Home</a></Link>
            </li>
            <li className={`nav-item ${ router.asPath === '/#education' ? `active` : '' }`} >
                <Link href={"#education"}><a>Education</a></Link>
            </li>
            <li className={`nav-item ${ router.asPath === '/#skills' ? `active` : '' }`} >
                <Link href={"#skills"}>Skills</Link>
            </li>
            <li className={`nav-item ${ router.asPath === '/#experience' ? `active` : '' }`} >
                <Link href={"#experience"}><a>Experience</a></Link>
            </li>
            <li className={`nav-item ${ router.asPath === '/#projects' ? `active` : '' }`} >
                <Link href={"#projects"}><a>Projects</a></Link>
            </li>
            <li className={`nav-item ${ router.asPath === '/#contact' ? `active` : '' }`} >
                <Link href={"#contact"}><a>Contact</a></Link>
            </li>
        </ul>
    </div>)
} 