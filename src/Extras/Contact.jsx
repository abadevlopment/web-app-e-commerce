import React from 'react';
import './Contact.scss'
import ContainerBar from '../Bars/ContainerBar';

const bc = ["Contacto"];

const Contact = () => {
    return (
        <div className="mainSection">
          <div className="mainBase">
            <div className="contentHeader">
              <ContainerBar crumb={bc} />
            </div>
            <div className="contentBody">
                <div className="contact">contacto</div>
            </div>
          </div>
        </div>
    );};

export default Contact;
