
import { useEffect, useState } from "react"

export default function Home(){
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setVisible(true)
    },[])
    return(
        <>
        <div className="home column center " id="home">
            
            <div className="row homeTextDiv" style={{width: "100%"}}>
                <div className="homeText left">Si nos define una palabra es ...</div>
                
                <div className="homeText">Bienvenido a mi portafolio.</div>
            </div>
            <motion.div transition={{ duration: 2 }}
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            >  
            <div className={`tituloHome transition-all duration-1000 ${visible? 'opacity-100' : 'opacity-0'}`}>CREATIVO</div>
            </motion.div>

            
        </div>
        </>
    )
}