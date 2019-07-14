import React, { Component } from 'react';
import Contact from '../layouts/Contactus';

class TrendBox extends Component {
    state = {}
    render() {
        return (
            <div className="contactusBackground">
                <br />
                <br />
                <br />
                <br />
                <div style={{ display: "flex" }}>
                    <Contact />
                </div>
            </div>
        );
    }
}

export default TrendBox;