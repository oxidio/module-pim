/**
 * Copyright (C) oxidio. See LICENSE file for license details.
 */

import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import {withStyles, MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from './app-theme';
import styles from './app-styles';

export default withStyles(styles(theme))(props => {
    const {classes} = props;
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <Breadcrumbs arial-label="Breadcrumb">
                        <Link color="inherit" className={classes.link}><HomeIcon className={classes.icon}/> Home</Link>
                        <Typography>Breadcrumb</Typography>
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
            <Paper>
            </Paper>
        </MuiThemeProvider>
    )
})
