import banner from "../../img/Banner.png"
import "./Banner.css" 


const Banner = (props) => {
    return (
        <header className="banner"> 
            <img className="banner__img" src={banner} alt={props.alt}/>
        </header>
    )
}

export default Banner;