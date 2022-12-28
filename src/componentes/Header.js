import NavBar from "./NavBar"

const isHeader = true
const Header = () => {
    return (
        <header>
        <h1>Titulo</h1>
        <NavBar isHeader={isHeader}/>       
        </header>
    )
}

export default Header;