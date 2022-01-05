import {useEffect} from 'react';

const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

function Intersection ( { element, options=defaultOptions, children } ) {

    const handleVisible = (entries, observer) => {
        entries.forEach( entry => {
           if( entry.intersectionRatio >= options.threshold ){
               element.current.classList.add("rai-slide-in");
           }
        });
    };

    useEffect(()=>{
            const observer = new IntersectionObserver(handleVisible, options);
            element.current && observer.observe(element.current);
            element.current && element.current.classList.add("transparent");

            return () => {
                console.log("observer unmounted");
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(element.current);
            };
        },[]);

    return <>
        { children }
    </>

};

export default Intersection;