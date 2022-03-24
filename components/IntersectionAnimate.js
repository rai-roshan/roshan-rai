import {useEffect, useRef} from 'react';

const defaultOptions = {
    root: null, // viewport for checking visibility of the target
    rootMargin: "0px",
    threshold: 0.5  // when 50% of target component is visible
};
const defaultAnimate = {
    pre : "transparent",
    animate : "rai-slide-in",
    delay : null
};

function Intersection ( { options= defaultOptions,animate= defaultAnimate , children } ) {

    const ref = useRef(null);
    const handleVisible = (entries, observer) => {
        /*
            we can use the observer instance that we have created for more than one target and therefore
            in callback here we are getting the list of all the targets that the observer is observing for the intersection change.
         */
        entries.forEach( entry => {
           if( entry.intersectionRatio >= options.threshold ){
               ref.current && ref.current.classList.add( animate.animate );
           }
        });
    };

    useEffect(()=>{
            const observer = new IntersectionObserver(handleVisible, options);  // creating new instance of observer with options and callback function
            ref.current && observer.observe(ref.current);   // assigning the target component that the observer will observe

            return () => {
                console.log("observer unmounted");
                // eslint-disable-next-line react-hooks/exhaustive-deps
                ref.current && observer.unobserve(ref.current);
            };
        },[]);

    return <div ref={ref} className={ animate.pre + " " + animate.delay }>
        { children }
    </div>

};

export default Intersection;