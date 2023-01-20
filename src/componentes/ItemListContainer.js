import ItemList from "./ItemList"
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () =>{

    const [load,setLoad] = useState(false)
    const [productos,setProductos] = useState([])
    const props = useParams()

    useEffect(()=>{

        const pedido = fetch("https://fakestoreapi.com/products")
        
        pedido.then((respuesta)=>{
        const productos = respuesta.json()
        return productos

        })
        .then((productos)=>{
    
            setProductos(productos)
            setLoad(true)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[])
    
    
    return(
        <>
            {load ? nulls : 'Cargando...'}
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer