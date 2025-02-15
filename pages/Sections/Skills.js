import Image from "next/image";
import IntersectionAnimate from "../../components/IntersectionAnimate"

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
    return ( <div id="skillList"
                className={"flex flex-col flex-wrap w-full sm:flex-row justify-center w-100"}>
                <IntersectionAnimate animate={ { pre: "flex flex-col md:flex-row transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <SkillSetCard title={"Core Concept"} image={"Linux.png"} rect={true}>
                            <p className={"font-medium text-blue-600"}>Data Structures</p>
                            <p className={"font-medium text-blue-600"}>Algorithms</p>
                            <p className={"font-medium text-blue-600"}>Computer Networks</p>
                            <p className={"font-medium text-blue-600"}>Operating System</p>
                            <p className={"font-medium text-blue-600"}>Concurrency</p>
                            <p className={"font-medium text-blue-600"}>Distributed Systems</p>
                            <p className={"font-medium text-blue-600"}>Microservices</p>
                        </SkillSetCard>
                </IntersectionAnimate>
                <IntersectionAnimate animate={ { pre: "flex flex-col md:flex-row transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <SkillSetCard title={"Development"} image={"javascript.png"}>
                            <p className={"font-medium text-blue-600"}>GoLang</p>
                            <p className={"font-medium text-blue-600"}>C++</p>
                            <p className={"font-medium text-blue-600"}>Ruby on Rails</p>
                            <p className={"font-medium text-blue-600"}>JavaScript</p>
                            <p className={"font-medium text-blue-600"}>React JS</p>
                            <p className={"font-medium text-blue-600"}>Node JS</p>
                        </SkillSetCard>
                </IntersectionAnimate>
                <IntersectionAnimate animate={ { pre: "flex flex-col md:flex-row transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <SkillSetCard title={"DBMS"} image={"MongoDB.png"} rect={true}>
                            <p className={"font-medium text-blue-600"}>MySql</p>
                            <p className={"font-medium text-blue-600"}>NoSQL</p>
                            <p className={"font-medium text-blue-600"}>Elastic Search</p>
                        </SkillSetCard>
                </IntersectionAnimate>
                <IntersectionAnimate animate={ { pre: "flex flex-col md:flex-row transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <SkillSetCard title={"Stack"} image={"AwsLogoSvg.svg"}>
                            <p className={"font-medium text-blue-600"}>Aws Services</p>
                            <p className={"font-medium text-blue-600"}>Docker</p>
                            <p className={"font-medium text-blue-600"}>Redis</p>
                            <p className={"font-medium text-blue-600"}>Kafka</p>
                            <p className={"font-medium text-blue-600"}>Docker</p>
                        </SkillSetCard>
                </IntersectionAnimate>
                <IntersectionAnimate animate={ { pre: "flex flex-col md:flex-row transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <SkillSetCard title={"Version Control"} image={"GitHub.png"}>
                            <p className={"font-medium text-blue-600"}>Git</p>
                            <p className={"font-medium text-blue-600"}>GitHub</p>
                        </SkillSetCard>
                </IntersectionAnimate>
            </div>);
};


export default function Skills() {

    return (
        <div id={"skills"} className="flex flex-col min-h-screen items-center justify-center flex-wrap mb-20 sm:mb-0">

            <IntersectionAnimate >
            <div className={"flex flex-row items-center mt-12 mb-12"}>
                <h1 className={"font-bold text-4xl  pb-2 text-blue-600 border-b-4 border-gray-500"}>
                    Skills
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            </div>
            </IntersectionAnimate>
            <SkillsList />

        </div>
    )
}