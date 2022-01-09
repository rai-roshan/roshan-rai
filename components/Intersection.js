import {useEffect, useRef} from 'react';

const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};
const defaultAnimate = {
    pre : "transparent",
    animate : "rai-slide-in",
    delay : null
};

function Intersection ( { options= defaultOptions,animate= defaultAnimate , children } ) {

    const ref = useRef(null);
    const handleVisible = (entries, observer) => {
        entries.forEach( entry => {
           if( entry.intersectionRatio >= options.threshold ){
               ref.current && ref.current.classList.add( animate.animate );
           }
        });
    };

    useEffect(()=>{
            const observer = new IntersectionObserver(handleVisible, options);
            ref.current && observer.observe(ref.current);
            //ref.current && ref.current.classList.add("transparent");

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