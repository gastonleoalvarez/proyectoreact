import CartWidget from "./CartWidget"
const NavBar = (props) => {

    console.log(props.linkFooter)
    console.log(props.hrefFooter)

if(props.isHeader){
    return(
        <nav>
        <a href="#">categoria 1</a>
        <a href="#">categoria 2</a>
        <a href="#">categoria 3</a>
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