import React from "react";
import "./UserWidget.scss";

const UserWidget = () => {
  return (
    <button type="button" className="navUser">
      <div className="userNotification">
        <img
          src="https://res.cloudinary.com/dvinxey2w/image/upload/v1642370019/ABA/ICONS%2032PX/bell-37_p01cut.svg"
          className="notificationIcon"
          alt="noti-icon"
        />
      </div>
      <div className="userLogin">
        <p>Iniciar Sesión</p>
      </div>
      <div className="userAvatar">
        <img
          src="https://res.cloudinary.com/dvinxey2w/image/upload/v1642370042/ABA/ICONS%2032PX/user-25_cqpuvf.svg"
          className="avatarIcon"
          alt="avatar-icon"
        />
      </div>
    </button>
  );
};

export default UserWidget;
