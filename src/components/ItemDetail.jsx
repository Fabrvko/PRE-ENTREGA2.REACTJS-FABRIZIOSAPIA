import { Link } from "react-router-dom";
import "./ItemDetail.css"
const ItemDetail = ({ data }) => {
    return(
        <div id="container">
            <div className="card col-sm-3 bg-light cardDetalle">
                <img src={data.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{data.nombre}</h6>
                    <p className="card-text">{data.descripcion}</p>
                    <p className="card-text">Precio: ${data.precio}</p>
                    <Link href="./#" className="btn btn-danger">Comprar</Link>
                </div>
            </div>
        </div>        
    )
}

export default ItemDetail;