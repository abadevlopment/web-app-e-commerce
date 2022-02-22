import React from 'react'
import { Link } from 'react-router-dom'
import './ContainerBar.scss'

const ContainerBar = ({ prop }) => {
    return (
        <>
            <div className='breadCrumb' >
                <ul>
                    {prop.bc.map(res => 
                        <li><Link to={`${res.link}`} className={`${res.class}`} >{res.name}</Link></li>
                    )}
                    <li><p>{prop.title}</p></li>
                </ul>
            </div>
            <div className='title' >
                <p>
                    {prop.title}
                </p>
            </div>
            <div className='buttons' >
                {prop.buttons}
            </div>
        </>
    )
}

export default ContainerBar
