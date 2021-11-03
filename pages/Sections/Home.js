import Image from 'next/image';

export default function Home() {
    return (
        <div id={"home"} className="flex flex-col min-h-screen w-full items-center justify-center mt-12">
          <Image 
          className="rounded-full"
          alt={"profile_pic"}
          src="/images/profile.jpg"
          height={144}
          width={144} />

          
          <h1 className="text-4xl block font-extrabold text-blue-700 mt-5 sm:text-7xl">
            👋 Hello 
          </h1> 
          <h1 className="title">
            My name is Roshan Rai
          </h1>
          <h1 className="title">
            Information Technology 
            <span className="mt-5 block">Final Year Student</span>
          </h1>

            <div className={"flex flex-row justify-center my-5"}>
                <a href={"/documents/ROSHAN_RAI_RESUME.pdf"}
                   className={"p-btn"}
                download>
                    Resume
                </a>
                <button
                    className={"p-btn flex flex-row"}>
                    Know More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
      </div>
    );
}