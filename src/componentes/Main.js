import {Route, Routes} from "react-router-dom"
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return (
        <main>
            <Routes/>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemListContainer/>}/>
                
            <Routes/>       
        </main>
    )
}

export default Main;