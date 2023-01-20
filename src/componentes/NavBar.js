import {Link} from "react-router-dom"
import CartWidget from "./CartWidget"
const NavBar = (props) => {

    const { isHeader, linkFooter} = props

if(isHeader){
    return(
        <nav>
        <Link to="/productos/hombre">HOMBRE</Link>
        <Link to="/productos/mujer">MUJER</Link>
        <CartWidget/>
        </nav>          
    )
}else{
    return(
        <nav>
            <a href="#">{props.linkFooter}</a>
        </nav>
        )
    }
}

export default NavBar;