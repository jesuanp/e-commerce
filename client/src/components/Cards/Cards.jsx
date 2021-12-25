import React from "react";
import Card from "../Card/Card.jsx";
import {useDispatch} from 'react-redux';
import {getProductos} from '../../redux/actions';

const Cards = () => {

    const dispatch = useDispatch();

    const productos = () => {
        dispatch(getProductos())
    }

    return (
    
        <div>
            <button onClick={productos}>Ver productos</button>
            <Card />
        </div>
    );
};

export default Cards;
