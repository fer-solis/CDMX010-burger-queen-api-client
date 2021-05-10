/* eslint-disable react/style-prop-object */
import React from 'react';
import { Redirect } from 'react-router-dom'
import { AppBar, makeStyles, Toolbar, Typography, Button } from '@material-ui/core';
import NavLogo from '../../assets/img/logoHeader.png';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import { teal } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

import { auth } from '../../Firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    height: {
        offset: theme.mixins.toolbar,
    },
    teal: {
        color: theme.palette.getContrastText(teal[400]),
        backgroundColor: teal[300],
    },
    espacio: {
        marginLeft: theme.spacing(3),
    }
}))

const Header = ({user}) => {
    // console.log(user);
    const classes = useStyles()

    function handleLogout(e) {
        auth.signOut().then(()=> console.log('signout'))
    }

    if (!user) {
        console.log('here', user)
        return <Redirect to="/" />
    }

    return (
        <div className={classes.root}>
            <AppBar color="inherit">
                <Toolbar>
                    <img className='navlogo' src={NavLogo} alt=''></img>
                    <Grid container justify="flex-end" alignItems="center">
                        <Typography color="secondary" className={classes.espacio}>
                        {user.email}
                    </Typography>
                        <Avatar className={classes.teal}>
                            <PersonIcon />
                        </Avatar>
                        <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<ExitToAppIcon />}
                            className={classes.espacio}
                            onClick={handleLogout}
                            >
                             Cerrar sesión
                        </Button >
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.height}></div>
        </div>
    )
}

export default Header;