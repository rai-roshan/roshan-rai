import Image from 'next/image';
import {useRef} from 'react';
import Intersection from "../../components/Intersection";

const Heading = () => {
    return (
        <Intersection >
        <div className={"flex flex-row items-center mt-10 mb-12"}>
            <h1 className={"font-bold text-4xl pb-2 text-blue-600 border-b-4 border-gray-500"}>
                Contact
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </div>
        </Intersection>
    );
}

const Footer = () => (
    <footer className={"w-full bg-blue-800 flex flex-col items-center p-5 mt-10"}>
        <h1 className={"text-white text-center font-semibold"}>
            Lets connect for opportunity or to simply drop a Hi👋
        </h1>
        <div className={"flex flex-row justify-center mx-3 mt-3"}>
            <a href="https://www.linkedin.com/in/rai-roshan-962173184/" target="_blank" rel="noreferrer noopener" className={"m-1 transform ease-out duration-300 hover:scale-125 "} >
                <Image height={"30"} width={"30"} alt="linkedin" src={"/images/linkedin-brands.svg"} />
            </a>
            <a href={"https://github.com/rai-roshan"} target="_blank" rel="noreferrer noopener" className={"m-1 transform ease-out duration-300 hover:scale-125"} >
                <Image className={"m-2"} height={"30"} width={"30"} alt={"github"} src={"/images/github-brands.svg"} />
            </a>
            <a href={"https://www.instagram.com/rai_roshan__/"} target="_blank" rel="noreferrer noopener" className={"m-1 transform ease-out duration-300 hover:scale-125"} >
                <Image className={"m-2"} height={"30"} width={"30"} alt={"instagram"} src={"/images/instagram-brands.svg"} />
            </a>
            <a href={"mailto:roshan22037@gmail.com"} target="_blank" rel="noreferrer noopener" className={"m-1 transform ease-out duration-300 hover:scale-125"} >
                <Image className={"m-2"} height={"30"} width={"30"} alt={"mail"} src={"/images/envelope-solid.svg"} />
            </a>
        </div>
    </footer>
)

export default function Contact() {

    return (
        <div id="contact" className="flex flex-col min-h-screen justify-between items-center pt-5">

            <Heading />

            <Intersection animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
            <div className={"flex flex-col mb-12"}>
                <Image height={"200"} width={"200"}  alt="deal" src={"/images/undraw_business_deal.svg"} />
                <div className={"mt-5 bg-white shadow-md rounded-xl p-3 flex flex-col items-center"}>
                    <h1 className={"font-bold text-gray-700 text-3xl text-center"}>
                        Lets discuss the problem and work on it together
                    </h1>
                    <a href={"mailto:roshan22037@gmail.com"}
                        className={"mt-3 bg-blue-600 rounded-lg p-3 text-xl font-bold text-white transform ease-out duration-300 hover:scale-110 hover:bg-opacity-90"}>
                        Message
                    </a>
                </div>
            </div>
            </Intersection>

            <Footer />
        </div>
    )
}