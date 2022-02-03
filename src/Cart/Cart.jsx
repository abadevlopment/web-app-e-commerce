import React from 'react';
import './Cart.scss'
import ContainerBar from '../Bars/ContainerBar';
import { Link } from 'react-router-dom';

const bc = ["Carrito de Compras"];
const buttons = [
    <Link to='/products' type="button " className="saleButtons">
      Agregar más productos
    </Link>
];

const Cart = () => {
    return (
        <div className="mainSection">
          <div className="mainBase">
            <div className="contentHeader">
              <ContainerBar crumb={bc} extra={buttons} />
            </div>
            <div className="contentBody">
                <div className="cart">Cart</div>
            </div>
          </div>
        </div>
    );
};

export default Cart;
