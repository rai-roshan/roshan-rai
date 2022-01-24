import Image from 'next/image';
import Intersection from "../../components/Intersection";

const projectData = [
    {
        'title' : 'Mars Rover',
        'image' : 'mars_rover.png',
        'repo_link' : 'https://github.com/rai-roshan/hello-mars-',
        'description' : 'MARS ROVER , in a mission to MARS we have to take our mars rover vehicle from point A to B , avoiding obstacles in between and also using fuel efficiently by finding shortest path'
    },
    {
        'title' : 'React Sorting Visualizer',
        'image' : 'react-sort-visualizer.png',
        'repo_link' : 'https://github.com/rai-roshan/react-sorting-visualizer',
        'description' : 'A react application to visualize the sorting algorithm and understanding the working of various different algorithm'
    },
    {
        'title' : 'Aadhaar Anumati',
        'image' : 'aadhaar_anumati.jpeg',
        'repo_link' : 'https://github.com/deep0711/Aadhar-Hackathon-Anumati',
        'description' : 'An App built during Aadhar Hackathon 2021 for easing out the process of address update when someone living in a rented space and do not have any proof of current addressTheme - Address Update Problem Statement - Address Update Challenge in Urban Areas'
    }
]

const ProjectTitle = () => {
    return (
        <Intersection >
        <div className={"flex flex-row items-center mt-10 mb-12"}>
            <h1 className={"font-bold text-4xl pb-2 text-blue-600 border-b-4 border-gray-500"}>
                Projects
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>
        </Intersection>
    );
};

const ProjectCard = ({ image=null, title=null, description=null, icons=null, repo_link="#"}) => (
    <a
        href={ repo_link }
        target={"_blank"}
        rel="noreferrer noopener"
        className={"card m-2 max-w-sm transform duration-300 ease-out hover:scale-105"}>
        <Image
            objectFit={"cover"}
            width={"500"}
            height={"300"}
            alt="project_thumbnail" src={`/images/projects_thumb/${ image ? image : "undraw_projections.svg" }`} />
        <div className={"flex flex-col m-4"}>
            { title && <h1 className={"font-bold text-gray-700 text-xl"}> {title} </h1> }
            { description && <p className={"text-gray-600 mt-2"}> {description} </p> }
        </div>
    </a>
)


export default function Projects() {

    return (
        <div id={"projects"} className="flex flex-col min-h-screen items-center py-5">

            <ProjectTitle />

            <div className={"flex p-2 flex-row justify-center flex-wrap"}>
                { projectData.map( (project, index) => (
                    <Intersection
                        key={`project_no_${index}`}
                        animate={ { pre: "flex transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
                        <ProjectCard
                            image={project.image}
                            repo_link={project.repo_link}
                            title={project.title}
                            description={project.description} />
                    </Intersection>
                ) )
                }
            </div>

        </div>
    )
}