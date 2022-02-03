import React from "react";
import "./ItemDetailContainer.scss";
import ContainerBar from "../Bars/ContainerBar";

const bc = [<a href="/">Productos</a>, "Detalle del producto"];

const ItemDetailContainer = () => {
  return (
      <div className="mainSection">
        <div className="mainBase">
          <div className="contentHeader">
            <ContainerBar crumb={bc} />
          </div>
          <div className="contentBody">
              <div className="itemDetail">detalle</div>
          </div>
        </div>
      </div>
  );
};

export default ItemDetailContainer;
