import Toogle from "./toogle"

export default function Header(){
    return(
        <>
        <div className='header'>
            <div className="logo">
                
                <a href="#">Logo-Ipsum</a>
            </div>
            
            <div className="navBar">    
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#proyects">Proyects</a>
                <a href="#contact">Contact</a>
                <Toogle />
            </div>
            
        </div>
        </>
    )
}