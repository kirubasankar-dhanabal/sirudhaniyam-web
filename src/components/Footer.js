import React from "react";
import "./Footer.css";
import Grid from '@mui/material/Grid';

function Footer() {
    return (
        <div className="footerContainer">
            {/* <Grid md={6} lg={6}> */}
                <div>Designed and developed by Ardha Apps</div>
                <span>For more details contact : ardhaapps@gmail.com</span>
            {/* </Grid> */}
        </div>
    );
}

export default Footer;
