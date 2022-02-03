import React from "react";
import "./ContainerBar.scss";

const ContainerBar = ({ crumb , extra }) => {
  
  return (
    <div className="headerBody">
      <div className="headerBreadCrumb">
        <div className="breadCrumbContainer">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            
              {crumb.map((res) => (
              <li><p> / </p>{res}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="headerTitle">
        <p>{crumb[crumb.length - 1]}</p>
      </div>
      <div className="headerButtons">
        <div className="buttonsContainer">
        {extra}
        </div>
      </div>
    </div>
  );
};

export default ContainerBar;
