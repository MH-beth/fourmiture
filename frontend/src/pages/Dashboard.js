import React from 'react'
import RegisterRec from '../components/RegisterRec'
import Allposts from "../components/Allposts";
import Search from '../components/Search'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { CONNECTED, COOKIES_ACCEPTANCE } from '../constants'
import "../assets/css/Dash.css"

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    const [open , setOpen] = React.useState((COOKIES_ACCEPTANCE === "true") ? false : true)
    return (
        <div>
            {(CONNECTED === "Connected") ? null:<RegisterRec/>}
            {(COOKIES_ACCEPTANCE !== "true") ?              <div className={classes.root}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                      sessionStorage.setItem("cookie", "true");
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                Notre site Utilise des Cookies pour peremttre la meilleur experience , si vous fermez cet fenetre nous considereront que vous acceptez
              </Alert>
            </Collapse>
            </div> : null}
            <Search/>
            <div className = "annonces">
            <h1>Les Annonce à ne pas rater</h1>
            <br/>
            <div className = "ann">
              <Allposts/>
            </div>
            </div>
            <br/>
        </div>
    )
}

export default Dashboard
