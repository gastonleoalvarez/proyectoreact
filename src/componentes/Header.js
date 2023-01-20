import {Link} from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
const isHeader = true

    return (
        <>
        <header>
            <Link to="/">
                <h1>Titulo</h1>
            </Link>
    
        <NavBar 
            isHeader={isHeader}
        />   
        </header>
        <NavBar/>
        </>
    )
}

export default Header;