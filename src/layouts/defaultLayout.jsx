import React from "react";
import PropTypes from "prop-types";
// import TopNavBar from "../partials/TopNavBar"
import Footer from "./Footer"
import Contactus from "../pages/Contactus"

class DefaultLayout extends React.Component {
    render() {
        return (
            <html className="no-js" lang="en">
                <body style={{ paddingTop: "20px" }}>
                    <div className="waiting-ring"></div>
                    <div id="root">
                        <Contactus />
                        <Footer />
                    </div>
                </body>
            </html>
        );
    }
}


DefaultLayout.propTypes = {
    title: PropTypes.string,
}

export default DefaultLayout;
