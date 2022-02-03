import React from "react";
import { Link } from "react-router-dom";
import ContainerBar from "../Bars/ContainerBar";
import "./SaleListContainer.scss";

const bc = ["Ofertas"];
const buttons = [
    <Link to='/products' type="button " className="saleButtons">
      Ver todos los productos
    </Link>
];

const SaleListContainer = () => {
  return (
    <>
      <div className="mainSection">
        <div className="mainBase">
          <div className="contentHeader">
            <ContainerBar crumb={bc} extra={buttons} />
          </div>
          <div className="contentBody">
            <button type="button" className="saleCard">
              ofertas 1
            </button>
            <button type="button" className="saleCard">
              ofertas 1
            </button>
            <button type="button" className="saleCard">
              ofertas 1
            </button>
            <button type="button" className="saleCard">
              ofertas 1
            </button>
            <button type="button" className="saleCard">
              ofertas 1
            </button>
            <button type="button" className="saleCard">
              ofertas 1
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleListContainer;
