import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
export const NavbarData = [
    {
        title: 'Orders',
        path: '/orders',
        icon: <FastfoodIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    },
    {
        title: 'Delivered',
        path: '/delivered',
        icon: <CheckBoxIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    },
    {
        title: 'Kitchen',
        path: '/kitchen',
        icon: <RoomServiceIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    },
    {
        title: 'Administration',
        path: '/administration',
        icon: <FolderSharedIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    }
]