import React from "react";
import {useSelector} from 'react-redux';

const Card = () => {

    const productos = useSelector(state => state.productos)

    return (
     
        <div>
            {
                productos && productos.map((e, i) => 

                    <div key={i}>
                        <span>vendedor: {e.author}</span>
                        <br />
                        <span>producto: {e.name}</span>
                        <br />
                        <span>Precio: ${e.price}</span>
                        <br />
                        <br />
                    </div>
                )
            }
        </div>
    );
};

export default Card;
