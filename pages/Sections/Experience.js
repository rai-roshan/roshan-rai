import Image from 'next/image';

const ExperienceCard = () => (
    <div className={"card flex flex-col xs:w-96 items-center flex-wrap m-2 p-3"}>
        <div className={"max-w-sm order-2 sm:order-1"}>
            <h1 className={"font-bold text-2xl"}>GitHub</h1>
            <p className={"mt-1 text-gray-700"}>
                <span className={"font-semibold"} >Role</span>: SDE Intern</p>
            <p className={"text-gray-700"}>
                <span className={"font-semibold"} >Duration</span>: June 2021 to Aug 2021
            </p>
            <p className={"text-gray-700"}>
                <span className={"font-semibold"} >Description</span>:
                Worked with GitHub Eduction Team on their product , and contributed to the mission of organization
            </p>
        </div>
        <div className={"order-1 max-w-sm sm:order-2"}>
            <Image width={70} height={70} src={"/images/GitHub.png"} />
        </div>
    </div>
);

const AchivementCard = ({ image, title, organizer, description }) => (
    <div className={"card xs:w-96 flex flex-col flex-wrap overflow-hidden m-2"}>
        <div className={"max-w-sm"}>
            <Image alt={"event_picture"} objectFit={"cover"}  width={"500"} height={"200"} src={`/images/achivements/${image}`} />
        </div>

        <div className={"max-w-sm p-3"}>
            <h1 className={"font-bold text-2xl"}>{title}</h1>
            <p className={"mt-1 text-gray-700"}>
                <span className={"font-semibold"} >Organizer</span>: {organizer}
            </p>
            <p className={"text-gray-700"}>
                <span className={"font-semibold"} >Description</span>:
                {description}
            </p>
        </div>
    </div>
);

export default function Experience() {
    return (
        <div id="experience" className="flex flex-col min-h-screen items-center py-5">

            <div className={"flex flex-col items-center"}>

                <div className={"flex flex-row items-center mt-10 mb-12"}>
                    <h1 className={"font-bold text-4xl pb-2 text-blue-600 border-b-4 border-gray-500"}>
                        Experience
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>

                <ExperienceCard />

                <div id={"achivementSection"} className={"flex flex-row flex-wrap justify-around max-w-5xl"}>
                    <AchivementCard
                        title={"Free Your Data Hackathon"}
                        image={"FYD_hack.jpeg"}
                        organizer={"SETU X GitHub"}
                    />
                    <AchivementCard
                        title={"Smart India Hackathon"}
                        image={"SIH_hack.jpg"}
                        organizer={"Goverment of India"}
                    />
                </div>

            </div>


        </div>
    )
}