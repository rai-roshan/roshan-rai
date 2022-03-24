import TimelineEvent from "../../components/TimelineEvent";
import Image from 'next/image';
import IntersectionAnimate from "../../components/IntersectionAnimate";

const EducationCard = ({ institute=null, degree=null, passYear=null, standard=null, board=null, major=null, duration=null, image=null }) => (
    <TimelineEvent>
        <div className="ml-5 mb-7 p-5 card max-w-md flex flex-row flex-wrap justify-start">
            <div>
                { institute && <h1 className={"text-xl font-bold text-gray-700"}>{institute}</h1> }
                { degree && <p>Degree: {degree}</p> }
                { standard && <p>{ standard }</p> }
                { board && <p>Board: {board}</p> }
                { passYear && <p>Passing Year: {passYear}</p> }
                { major && <p>Major: { major }</p> }
                { duration && <p>{ duration }</p> }
            </div>
            <div className={"ml-5 max-w-sm"}>
                { image && <Image width={80} height={80} alt={"school_logo"} src={`/images/${image}`} /> }
            </div>
        </div>
    </TimelineEvent>
);

export default function Education() {

    return <div id={"education"} className="flex flex-col min-h-screen items-center justify-center mb-20 sm:mb-0">

            <IntersectionAnimate >
        <div className={"flex flex-row items-center mb-10 mt-12"}>
            <h1 className={"font-bold text-4xl pb-2 text-blue-600 border-b-4 border-gray-500"}>
                Education
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        </div>
        </IntersectionAnimate>

            <div className={"flex flex-row flex-wrap justify-center items-center"}>
            <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
            <div className={"mb-5 lg:hidden mb-12 overflow-hidden"}>
                <Image width={"900"} height={"300"} alt={"school_logo"} src={"/images/undraw_graduation.svg"} />
            </div>
            <div className={"mr-10 hidden lg:block overflow-hidden"}>
                <Image width={"500"} height={"500"} alt={"school_logo"} src={"/images/undraw_education_svg.svg"} />
            </div>
            </IntersectionAnimate>

            <div id="TimeLineContainer" className={"flex flex-col"}>
            <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
            <EducationCard
                institute={'Army Institute of Technology'}
                degree={"Bachelor of Engineering"}
                major={"Information Technology"}
                duration={"2018-2022"}
                image={"AIT-Logo.png"} />
            </IntersectionAnimate>
            <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
            <EducationCard
                institute={"Army Public School"}
                standard={"Senior Secondary (10+2)"}
                board={"C.B.S.E"}
                passYear={"2018"}
                image={"APS_logo.jpg"} />
            </IntersectionAnimate>
            <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
            <EducationCard
                institute={"Army Public School"}
                standard={"Secondary (10)"}
                board={"C.B.S.E"}
                passYear={"2016"}
                image={"APS_logo.jpg"} />
            </IntersectionAnimate>
            </div>
        </div>
        </div>
} 