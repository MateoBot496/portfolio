import { useEffect, useRef } from 'react';

export default function MyComponent() {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const titleRef = useRef(null)
    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('show');
              }
            });
        },{
            rootMargin: '0px 0px -200px 0px' // 50% del elemento debe estar visible
          });

        if (imageRef.current) observer.observe(imageRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current);
            if (textRef.current) observer.unobserve(textRef.current);
            if (titleRef.current) observer.observe(titleRef.current);
        };

    }, [])   
    
    return(
        <>




                <section className="about column" id='about'>

                    <div className="background"></div>
                    <div className="aboutTitle otros" ref={titleRef}>Sobre mi</div>
                    <div className="row center">
                            <div ref={imageRef} className="imagen">
                            </div>  
                            <p ref={textRef} className="aboutText">
                                Combinación de diseño y lógica, innovación y técnica.
                                Esto es algo más que líneas de código, es una forma de contar historias.
                            </p>    

                            <a href="https://github.com/MateoBot496">
                                <div className="sabermas">
                                    Saber más...
                                </div>  
                            </a>
                                

                    </div>
                </section>




        
        </>
    )
}