import { useRef, useEffect } from "react";

export default function Proyects(){

    const mps = useRef([]);
    const proyects = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                entry.target.classList.add('show');
                }
            });
        });

        mps.current.forEach(mp => mp && observer.observe(mp));
        proyects.current.forEach(proyect => proyect && observer.observe(proyect));

        return () => {
            mps.current.forEach(mp => mp && observer.unobserve(mp));
            proyects.current.forEach(proyect => proyect && observer.unobserve(proyect));
        };

    }, [])   


    return(
        <>
        <section className="proyects" id="proyects">
            <h2 className="otros">Ultimos proyectos</h2>
            <div className="mejoresProyectos">
                <a href="https://memorygame496.netlify.app/">
                    
                    <div className="mp1" ref={(el) => mps.current[0] = el} >
                        <p>Memory game</p>
                    </div>
                </a>
                <a href="https://cvappmb496.netlify.app/">
                        
                    <div className="mp2" ref={(el) => mps.current[1] = el} > 
                        <p>CV Creator</p>
                    </div>
                </a>
            </div>
            
            <h2 className="otros">Otros proyectos</h2>
            <div className="proyectosGrid" >
                <a href="https://mateoshopcart.netlify.app/">
                    <div className="proyectbox p5 " ref={(el) => proyects.current[0] = el}>
                    <p>SHOPPING CART</p>
                    </div>
                </a>
                <a href="https://mateobot496.github.io/singup_form/">
                    <div className="proyectbox p2" ref={(el) => proyects.current[1] = el}>
                    <p>SIGN-UP FORM</p>
                    </div>
                </a>
                <a href="https://mateobot496.github.io/calculator/">
                    
                    <div className="proyectbox p3" ref={(el) => proyects.current[2] = el}>
                    <p>CALCULATOR</p>
                    </div>
                </a>
                <a href="https://mateobot496.github.io/restaurant/">
                    <div className="proyectbox p4" ref={(el) => proyects.current[3] = el}>
                    <p>RESTAURANT</p>
                    </div>
                </a>
                <a href="https://mateobot496.github.io/weather-app/">
                    <div className="proyectbox p1 " ref={(el) => proyects.current[4] = el}>
                    <p>WEATHER APP</p>
                    </div>
                </a>
            </div>
        </section>
        </>
    )
}