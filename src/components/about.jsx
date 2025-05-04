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
        const node1 = imageRef.current
        const node2 = textRef.current
        const node3 = titleRef.current

        if (node1) observer.observe(node1);
        if (node2) observer.observe(node2);
        if (node3) observer.observe(node3);

        return () => {
            if (node1) observer.unobserve(node1);
            if (node2) observer.unobserve(node2);
            if (node3) observer.unobserve(node3);
        };

    }, [])   
    
    return(
        <>




                <section className="about column" id='about'>

                    <div className="background"></div>
                    <div className="aboutTitle otros" ref={titleRef}>Sobre mi</div>
                    <div className="aboutdiv row center">
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