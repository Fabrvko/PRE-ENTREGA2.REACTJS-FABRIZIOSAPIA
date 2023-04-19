import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const productos = [{
    
    "id": 1,
    "nombre": "Airmax",
    "imagen": "https://imgs.search.brave.com/W4Ymds5x9LupAAvD27vB2kb8kX6RLVFXcZie9qvqTv8/rs:fit:490:349:1/g:ce/aHR0cHM6Ly93d3cu/c2Vwc2hvZS5jb20v/bWVkaWEveDQ5MC9O/aWtlX0Fpcl9NYXhf/U2hvZXMvQWlyX01h/eF9PdGhlcl9TaG9l/cy9OaWtlX0Fpcl9N/YXhfTHRkXzNfV2hp/dGVfUnVubmluZ19T/aG9lc182ODc5Nzct/MTExX1AxLmpwZw",
    "categoria": "nike",
    "descripcion": "Airmax White.",
    "precio": 8500
},
{   
    "id": 2,
    "nombre": "Airmax",
    "imagen": "https://imgs.search.brave.com/oRHtZTpOnrGe9lJBnsEbEUYk7e2jmCbAla8JP6o4KKA/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RvY2t4LmNv/bS9pbWFnZXMvTmlr/ZS1BaXItTWF4LTkw/LUxlYXRoZXItVHJp/cGxlLUJsYWNrLTIw/MjAucG5nP2ZpdD1m/aWxsJmJnPUZGRkZG/RiZ3PTcwMCZoPTUw/MCZhdXRvPWZvcm1h/dCxjb21wcmVzcyZx/PTkwJmRwcj0yJnRy/aW09Y29sb3ImdXBk/YXRlZF9hdD0xNjEx/NTkxNTA1",
    "categoria": "nike",
    "descripcion": "Airmax black.",
    "precio": 8250
},
{   
    "id": 3,
    "nombre": "Airmax",
    "imagen": "https://imgs.search.brave.com/r5SGDXPzhIe-YockQwQ6UKnCmqjXDKJrBPXYTqncTYg/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9zdG9j/a3guaW1naXgubmV0/L2ltYWdlcy9OaWtl/LUFpci1NYXgtOTAt/VHJpcGxlLUdyZXkt/UHJvZHVjdC5qcGc_/Zml0PWZpbGwmYmc9/RkZGRkZGJnc9NzAw/Jmg9NTAwJmF1dG89/Zm9ybWF0LGNvbXBy/ZXNzJnE9OTAmZHBy/PTImdHJpbT1jb2xv/ciZ1cGRhdGVkX2F0/PTE2MDcwNTEwOTI",
    "categoria": "nike",
    "descripcion": "Airmax Gray.",
    "precio": 8750
},
{   
    "id": 4,
    "nombre": "Airmax Red",
    "imagen": "https://imgs.search.brave.com/2LkYguME2SOMFb73ofkIW4c4OcZbEPWIu1LCgZ9OauM/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3RvY2t4LmNv/bS9OaWtlLUFpci1N/YXgtOTAtTFRSLVJl/ZC1HUy1Qcm9kdWN0/LmpwZz9maXQ9Zmls/bCZiZz1GRkZGRkYm/dz03MDAmaD01MDAm/YXV0bz1mb3JtYXQs/Y29tcHJlc3MmcT05/MCZkcHI9MiZ0cmlt/PWNvbG9yJnVwZGF0/ZWRfYXQ9MTYwMzQ4/MTk4NQ",
    "categoria": "nike",
    "descripcion": "Airmax Red.",
    "precio": 9000
},
{
    "id": 5,
    "nombre": "Jordan Acces",
    "imagen": "https://imgs.search.brave.com/A0pNRJoxAJB6E0-iE2Uj1Oz8HcCIp6dHLkDHzA33D4U/rs:fit:1000:1127:1/g:ce/aHR0cHM6Ly9zY29y/ZXIuZXMvNDI2MzMt/dGhpY2tib3hfZGVm/YXVsdC96YXBhdGls/bGFzLWhvbWJyZS1u/aWtlLWpvcmRhbi1h/Y2Nlcy1uZWdyb21v/c3RhemEtYXIzNzYy/LTAwOC5qcGc",
    "categoria": "jordan",
    "descripcion": "Jordan Acces Negro/Mostaza",
    "precio": 9750
    
},
{
    "id": 6,
    "nombre": "Jordan Max Aura",
    "imagen": "https://imgs.search.brave.com/MT0WO1v65K5D58E_VRIqWF4Mdng1M6tbPYeL0n_RN3k/rs:fit:1000:1127:1/g:ce/aHR0cHM6Ly9zY29y/ZXIuZXMvNDI2ODMt/dGhpY2tib3hfZGVm/YXVsdC96YXBhdGls/bGFzLWhvbWJyZS1u/aWtlLWpvcmRhbi1t/YXgtYXVyYS1jcTk0/NTEtNjAwLmpwZw",
    "categoria": "jordan",
    "descripcion": "Jordan Max Aura Red",
    "precio": 10000
},
{
    "id": 7,
    "nombre": "Jordan Big Fun",
    "imagen": "https://imgs.search.brave.com/PZm1JAy-KAAcUWSjwBHvC_N5xpcPr92g9rCjnd071q4/rs:fit:1000:1127:1/g:ce/aHR0cHM6Ly9zY29y/ZXIuZXMvMzY1MDkt/dGhpY2tib3hfZGVm/YXVsdC9aYXBhdGls/bGFfTmluYV9OaWtl/X0pvcmRhbl9CaWdf/RnVuX05lZ3JhX0JW/NzM3NTA2MS5qcGc",
    "categoria": "jordan",
    "descripcion": "Jordan Big Fun",
    "precio": 11000
},
{
    "id": 8,
    "nombre": "X-Ray",
    "imagen": "https://imgs.search.brave.com/paPcSpm57Ol1z0Ah9iCr4xi0s4gh9dpvFSAJPb2msU0/rs:fit:1000:1127:1/g:ce/aHR0cHM6Ly9zY29y/ZXIuZXMvNDU2MDkt/dGhpY2tib3hfZGVm/YXVsdC96YXBhdGls/bGFzaG9tYnJlcHVt/YXhyYXl2YXJpb3Nj/b2xvcmVzLmpwZw",
    "categoria": "puma",
    "descripcion": "Puma X-Ray",
    "precio": 9500
},
{
    "id": 9,
    "nombre": "Suede Classic",
    "imagen": "https://imgs.search.brave.com/H_tHJ5Xqs2DzdF6RxsVGSDAo7QtyTzyjgwE51LCZ-HM/rs:fit:568:649:1/g:ce/aHR0cDovL2NoZW1h/c3BvcnQuZXMvNjQz/Mi1iaWdfZGVmYXVs/dC96YXBhdGlsbGFz/LXB1bWEtc3VlZGUt/Y2xhc3NpYy1henVs/bWFyaW5vLmpwZw",
    "categoria": "puma",
    "descripcion": "Puma Suede Classic Blue",
    "precio": 8000
},
{
    "id": 10,
    "nombre": "R78",
    "imagen": "https://imgs.search.brave.com/5Hzh8mtRJF7il13KCKeM_PdAM7-YnISyyS9F2NkpM2M/rs:fit:1000:1127:1/g:ce/aHR0cHM6Ly9zY29y/ZXIuZXMvNDkwNjMt/dGhpY2tib3hfZGVm/YXVsdC9aYXBhdGls/bGFzX0hvbWJyZV9Q/dW1hX1I3OF9WYXJp/b3NfQ29sb3Jlc18z/NzMxMTcwNi5qcGc",
    "categoria": "puma",
    "descripcion": "Puma R78",
    "precio": 9250
}
]

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {detalleId} = useParams();
    useEffect(()=>{
        const getData = new Promise(resolve =>{
                resolve(productos)
        });

        getData.then(response=> setData(response.find(producto => producto.id === parseInt(detalleId))))
    },[detalleId])
    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;