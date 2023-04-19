import { Link } from "react-router-dom";
const Item = ({ data }) => {
    return (
            <div className="card col-sm-3">
                <img src={data.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{data.nombre}</h6>
                    <p className="card-text">Precio: ${data.precio}</p>
                    <Link to={`/detalle/${data.id}`} className="btn btn-danger">Comprar</Link>
                </div>
            </div>
    )
}

export default Item;