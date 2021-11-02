import Link from 'next/link';

export default function NavBar() {
    return (<div className="fixed top-0 z-10 hidden sm:block">
        <ul className="w-screen flex flex-row pr-7 justify-end bg-gray-50 mr-10">
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <Link href={"#home"}><a>Home</a></Link>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <Link href={"#education"}><a>Education</a></Link>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <Link href={"#skills"}>Skills</Link>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <Link href={"#experience"}><a>Experience</a></Link>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <Link href={"#projects"}><a>Projects</a></Link>
            </li>
            <li className="ml-3 pt-2 p-1 border-b-4 border-transparent hover:text-blue-700 hover:border-blue-700">
                <Link href={"#contact"}><a>Contact</a></Link>
            </li>
        </ul>
    </div>)
} 