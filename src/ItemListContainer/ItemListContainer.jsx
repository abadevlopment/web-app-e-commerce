import React from "react";
import ContainerBar from "../Bars/ContainerBar";
import ItemList from "./ItemList/ItemList";
import "./ItemListContainer.scss";

const bc = ["Productos"];

const ItemListContainer = () => {
  return (
      <div className="mainSection">
        <div className="mainBase">
          <div className="contentHeader">
            <ContainerBar crumb={bc} />
          </div>
          <div className="contentBody">
            <ItemList/>
          </div>
        </div>
      </div>
  );
};

export default ItemListContainer;
