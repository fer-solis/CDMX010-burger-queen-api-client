import React from 'react';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

export const NavbarData = [
    {
        title: 'Pedidos',
        path: '/orders',
        icon: <FastfoodIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    },
    {
        title: 'Ordenes entregadas',
        path: '/delivered',
        icon: <CheckBoxIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    },
    {
        title: 'Cocina',
        path: '/kitchen',
        icon: <RoomServiceIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    },
    {
        title: 'Administración',
        path: '/administration',
        icon: <FolderSharedIcon 
        color='secondary'
        style={{ fontSize: 60 }}/>,
        cName: 'nav-text'
    }
]