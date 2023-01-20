import {Link} from "react-router-dom"

const Item = ({producto}) =>{
    return (
        <article key={producto.id} className="product-card">
            <h3>{producto.title}</h3>
            <img src={'https://picsum.photos/200/300?random=${producto.id}'}/>
            <p>{producto.price}</p>
            
            <Link to={"/item/" + producto.id}>Ver mas</Link>
        </article>
    )
}

export default Item