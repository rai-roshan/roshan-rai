import Image from 'next/image';
import IntersectionAnimate from "../../components/IntersectionAnimate";

const KnowMore = () => {
    return <div>

    </div>
};

export default function Home() {

    return (
        <div id={"home"} className="flex flex-col min-h-screen w-full items-center justify-center sm:mt-11">

            <video autoPlay muted loop id="space-wave" height={"100vh"}>
                <source src="/images/MKBHD.mp4" type="video/mp4" />
            </video>

            <IntersectionAnimate >
                <Image priority
                  className="rounded-full"
                  alt={"profile_pic"}
                  src="/images/profile.jpg"
                  height={144}
                  width={144} />
            </IntersectionAnimate>

            <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-half" } }>
              <h1 className="text-4xl block font-extrabold text-blue-700 mt-5 sm:text-7xl">
                👋 Hello
              </h1>
            </IntersectionAnimate>

            <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-1" } }>
                <div>
                    <h1  className="title">
                    This is Roshan Rai
                  </h1>
                    <h1 className="title">
                        <div className="fw-900 flex-center">
                            <Image
                            objectFit={"cover"}
                            width={"50"}
                            height={"50"}
                            alt="nutanix logo" src={`/images/nutanix-logo.png`} />
                            <div>NUTANIX</div>
                        </div>
                        <span className="mt-5 block">Software Engineer</span>
                    </h1>
                </div>
            </IntersectionAnimate>

            <IntersectionAnimate animate={ { pre: "transparent" , animate: "rai-slide-in" , delay: "animate-delay-1" } }>
                <div className={"flex flex-row justify-center my-5"}>
                <a href={"/documents/roshan_rai_jan_2025.pdf"}
                   className={"p-btn flex flex-row items-center"}
                download>
                    <div>Resume</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                              clipRule="evenodd"/>
                    </svg>
                </a>
                <a href={"https://github.com/rai-roshan"}
                    target={"_blank"}
                    rel="noreferrer noopener"
                    className={"p-btn flex flex-row items-center"}>
                    <span>Know More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </a>
            </div>
            </IntersectionAnimate>

      </div>
    );
}