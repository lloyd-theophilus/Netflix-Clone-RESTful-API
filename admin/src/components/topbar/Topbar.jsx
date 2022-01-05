import React from 'react';
import './Topbar.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
        marginButton: '10px' 
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '40%',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export default function Topbar() {
    const classes = useStyles();
    return (
        <div className = 'topbar'>
            <div className="topbarWrapper">
                <div className="topbarleft">
                    <span className = 'logo'>LD</span>
                </div>
                <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…"
              classes={{root: classes.inputRoot, input: classes.inputInput}}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                <div className="topbarright">
                    <div className="topbarIconcontainer">
                        <NotificationsNone />
                        <span className = 'topbarIconBadge'>1</span>

                    </div>
                    <div className="topbarIconcontainer">
                        <Language />
                    </div>
                    <div className="topbarIconcontainer">
                        <Settings />
                    </div>
                    <img src="lloyd_img.jpg" alt="" className = 'topAvatar' />
                </div>

            </div>
            
        </div>
    )
}

