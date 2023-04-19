import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria" element={<ItemListContainer/>}/>
        <Route path="categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
