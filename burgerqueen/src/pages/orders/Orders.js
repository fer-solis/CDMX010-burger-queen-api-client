import React from 'react';
import './Orders.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navBar/Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

    offset: theme.mixins.toolbar,

}));

const Orders = () => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Header />
                <Navbar/>
            </div>


            <div className={classes.offset}></div>
        </div>
    )
}

export default Orders