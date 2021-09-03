import React from 'react'
import Button from "@material-ui/core/Button";

const NotFound = () => {
    return (
        <div className = "notfound-container">
            <h1 className = "errorcode">404</h1>
            <h2>Oops an Error have occured</h2>
            <p>This page is unavailable or does not exist</p>
            <br/>
            <Button href="/" variant="contained" color = "primary">Return to Home</Button>
            <br/><br/><br/>
        </div>
    );
};
 export default NotFound;