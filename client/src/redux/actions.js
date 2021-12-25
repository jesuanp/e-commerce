import axios from 'axios';

export const productos = "OBTENER_TODOS_LOS_PRODUCTOS";

export function getProductos () {
    return async function (dispatch) {
        const respuesta = await axios.get('http://localhost:3001');
        console.log(respuesta.data)
        return dispatch({
            type: productos,
            payload: respuesta.data
        })
    }
}