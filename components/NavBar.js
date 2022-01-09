import Link from 'next/link';

export default function NavBar() {
    return (<div className="fixed top-0 z-10 hidden sm:block">
        <ul className="w-screen flex flex-row pr-7 justify-end bg-gray-50 mr-10">
            <li href={"#home"} className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <a href={"#home"}>Home</a>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <a href={"#education"}>Education</a>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <a href={"#skills"}>Skills</a>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <a href={"#experience"}>Experience</a>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <a href={"#projects"}>Projects</a>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <a href={"#contact"}>Contact</a>
            </li>
        </ul>
    </div>)
} 