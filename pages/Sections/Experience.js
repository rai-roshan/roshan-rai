import Image from 'next/image';
import IntersectionAnimate from "../../components/IntersectionAnimate";

const ExperienceCard = ({ logoImg, backgroundImage, orgName, role, durationText, description }) => (
    <div className={"card max-w-sm flex flex-col items-center m-2 full-h-w-img"}>

        <div style={{height: '40%', width: "100%"}}>
            { logoImg ? <div className={'pt-3'}>
                <Image width={100} height={100}  alt={"organization_logo"} src={`/images/${logoImg}`} />
                </div> : 
            <Image alt={"event_picture"} style={{objectFit: "cover"}}  width={"500"} height={"200"} src={`/images/${backgroundImage}`} />
            }
        </div>
        <div className='p-3'>
            <h1 className={"font-bold text-2xl"}>{orgName}</h1>
            <p className={"mt-1 text-gray-700"}>
                <span className={"font-semibold"} >Role</span>{`: ${role}`}</p>
            <p className={"text-gray-700"}>
                <span className={"font-semibold"} >Duration</span>{`: ${durationText}`}
            </p>
            <p className={"text-gray-700"}>
                <span className={"font-semibold"} >Description</span>:
                {description}
            </p>
        </div>

    </div>
);

const AchivementCard = ({ image, title, organizer, verdict, description }) => (
    <div className={"card max-w-sm flex flex-col overflow-hidden m-2"}>
        <div >
            <Image alt={"event_picture"} objectFit={"cover"}  width={"500"} height={"200"} src={`/images/achivements/${image}`} />
        </div>

        <div className={"p-3"}>
            <h1 className={"font-bold text-2xl"}>{title}</h1>
            <p className={"mt-1 text-gray-700"}>
                <span className={"font-semibold"} >Organizer</span>: {organizer}
            </p>
            <p className={"mt-1 text-gray-700"}>
                <span className={"font-semibold"} >Verdict</span>: {verdict}
            </p>
            <p className={"text-gray-700"}>
                <span className={"font-semibold"} >Description</span>:
                {description}
            </p>
        </div>
    </div>
);

export default function Experience() {

    return ( <div id="experience" className="flex flex-col min-h-screen items-center py-5">

            <div className={"flex flex-col items-center"}>

                <IntersectionAnimate >
                <div className={"flex flex-row items-center mt-10 mb-12"}>
                    <h1 className={"font-bold text-4xl pb-2 text-blue-600 border-b-4 border-gray-500"}>
                        Experience
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                </IntersectionAnimate>

                <div id={"experienceSection"} className={"flex flex-row flex-wrap justify-center w-full"}>
                    <IntersectionAnimate 
                    parentClassName={`flex flex-row`}
                    animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <ExperienceCard 
                        backgroundImage={"nutanix-full-logo.png"}
                        orgName={"Nutanix"}
                        durationText={"Feb 2025 to Present"}
                        role={"Member of Technical Staff 2"}
                        description={"Working with NKP team , to build platform for managing kuberenetes clusters"} />
                    </IntersectionAnimate>
                    <IntersectionAnimate 
                    parentClassName={`flex flex-row`}
                    animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <ExperienceCard 
                        backgroundImage={"ZomatoHyperpure.png"}
                        orgName={"Zomato Hyperpure"}
                        durationText={"July 2022 to Oct 2024"}
                        role={"Software Engineer"}
                        description={"Working with Hyperpure finance tech team to build inhouse finance system"} />
                    </IntersectionAnimate>
                    <IntersectionAnimate 
                    parentClassName={`flex flex-row`}
                    animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <ExperienceCard
                        backgroundImage={"Github-logo.webp"}
                        orgName={"GitHub"}
                        durationText={"June 2021 to Aug 2021"}
                        role={"SDE Intern"}
                        description={"Worked with GitHub Eduction Team on their product , and contributed to the mission of organization"} />
                    </IntersectionAnimate>
                </div>


                {/* <div id={"achivementSection"} className={"flex flex-row flex-wrap justify-around max-w-5xl"}>
                    <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                    <AchivementCard
                        title={"Free Your Data Hackathon"}
                        image={"FYD_hack.jpeg"}
                        organizer={"SETU X GitHub"}
                        verdict={"Winner"}
                        description={"A FinTech hackathon based on Account Aggregator framework."}
                    />
                    </IntersectionAnimate>
                    <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                    <AchivementCard
                        title={"Smart India Hackathon"}
                        image={"SIH_hack.jpg"}
                        organizer={"Goverment of India"}
                        verdict={"Winner"}
                        description={"Solved the problem statement published by the Goverment of GOA."}
                    />
                    </IntersectionAnimate>
                </div> */}

            </div>

        </div>
    )
}