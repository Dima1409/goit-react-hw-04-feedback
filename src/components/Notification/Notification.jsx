import React from "react";
import PropTypes from 'prop-types';
import {NotificationDefault} from "./Notification.styled";


const Notification = ({message}) => {
     return (
        <NotificationDefault>{message}</NotificationDefault>
     )
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string
}