import React from 'react'
import './UserWidget.scss'
import UserWidgetModal from './UserWidgetModal'

const UserWidget = () => {
    return (
        <>
            {/* trigger modal */}
            <button type='button' className='userWButton' data-bs-toggle="modal" data-bs-target="#userWidgetModal" >
                <div className='userWNotification' >
                    <img
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370019/ABA/ICONS%2032PX/bell-37_p01cut.svg'
                        alt='not. icon'
                        className='notificationIcon'
                    />
                </div>
                <div className='userWName' >
                    <p className='loginName' >
                        IniciarSesión
                        IniciarSesión
                    </p>
                </div>
                <div className='userWAvatar' >
                    <img
                        src='https://res.cloudinary.com/dvinxey2w/image/upload/v1642370042/ABA/ICONS%2032PX/user-25_cqpuvf.svg'
                        alt='avat. icon'
                        className='avatarIcon'
                    />
                </div>
            </button>
            {/* modal */}
            <UserWidgetModal/>
        </>


    )
}

export default UserWidget