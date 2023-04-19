import Item from "./Item";
const ItemList = ({prods = []}) => {
    return(
        prods.map(prod => <Item key={prod.id} data={prod}/>)
    )
}

export default ItemList;