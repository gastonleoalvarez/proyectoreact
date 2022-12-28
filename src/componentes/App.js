import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";


const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <ItemListContainer greeting="Hola Mundo"/>
      <Footer/>
    </>
  )
}

export default App;
