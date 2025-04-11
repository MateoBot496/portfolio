import Toogle from "./toogle"

export default function Header(){
    return(
        <>
        <div className='header'>
            <div className="logo">
                
                <a href="#">Logo</a>
            </div>
            
            <div className="navBar">    
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Proyects</a>
                <a href="#">FAQs</a>
                <a href="#">Contact</a>
                <Toogle />
            </div>
            
        </div>
        </>
    )
}