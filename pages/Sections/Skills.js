import Image from "next/image";
import {useRef} from 'react';
import Intersection from "../../components/Intersection";

const SkillSetCard = ({ title, children, image, rect=false  }) => {
    return (
        <div className="card flex flex-col p-3 m-2">
            { title && <h1 className={"text-lg font-bold"}>{ title }</h1> }

            <div className={"flex flex-col flex-wrap items-center mt-3 xs:flex-row justify-center"}>
                <div className={"flex flex-col items-start mt-3"}>
                    { children }
                </div>
                <div className={"mt-3 mx-4"}>
                    { image && <Image height={ rect ? "160" : "100" } width={ rect ? "130" : "100" } objectFit={"fill"} alt={"skill_logo"} src={`/images/${image}`} /> }
                </div>
            </div>
        </div>
    );
}

const SkillsList = () => {
    const ref2 = useRef();
    return (
        <Intersection element={ref2}>
            <div ref={ref2} id="skillList"
                className={"animate-delay-1 flex flex-col flex-wrap w-full sm:flex-row justify-center w-100"}>

                <SkillSetCard title={"Core Concept"} image={"Linux.png"} rect={true}>
                    <p className={"font-medium text-blue-600"}>Data Structures</p>
                    <p className={"font-medium text-blue-600"}>Algorithms</p>
                    <p className={"font-medium text-blue-600"}>Computer Networks</p>
                    <p className={"font-medium text-blue-600"}>Operating System</p>
                </SkillSetCard>

                <SkillSetCard title={"Development"} image={"javascript.png"}>
                    <p className={"font-medium text-blue-600"}>JavaScript</p>
                    <p className={"font-medium text-blue-600"}>React JS</p>
                    <p className={"font-medium text-blue-600"}>React Native</p>
                    <p className={"font-medium text-blue-600"}>Next JS</p>
                    <p className={"font-medium text-blue-600"}>Node JS</p>
                    <p className={"font-medium text-blue-600"}>Ruby on Rails</p>
                </SkillSetCard>

                <SkillSetCard title={"DBMS"} image={"MongoDB.png"} rect={true}>
                    <p className={"font-medium text-blue-600"}>SQL</p>
                    <p className={"font-medium text-blue-600"}>NoSQL</p>
                </SkillSetCard>

                <SkillSetCard title={"Version Control"} image={"GitHub.png"}>
                    <p className={"font-medium text-blue-600"}>Git</p>
                    <p className={"font-medium text-blue-600"}>GitHub</p>
                </SkillSetCard>
            </div>
        </Intersection>);
};


export default function Skills() {
    const ref1 = useRef();

    return (
        <div id={"skills"} className="flex flex-col min-h-screen items-center justify-center flex-wrap mb-20 sm:mb-0">

            <Intersection element={ref1} >
            <div ref={ref1} className={"flex flex-row items-center mt-12 mb-12"}>
                <h1 className={"font-bold text-4xl  pb-2 text-blue-600 border-b-4 border-gray-500"}>
                    Skills
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            </div>
            </Intersection>
            <SkillsList />

        </div>
    )
}