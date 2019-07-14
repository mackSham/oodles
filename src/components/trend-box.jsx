import React, { Component } from 'react';
import Trends from '../layouts/trends';

class TrendBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="trendBackground">
                <br/>
                <br/>
                <br />
                <center><h1 style={{color:"white"}}>TRENDS</h1></center>
                <br/>
                <div style={{display:"flex"}}>
                    <Trends></Trends>
                    <Trends></Trends>
                    <Trends></Trends>
                </div>
            </div>
         );
    }
}
 
export default TrendBox;