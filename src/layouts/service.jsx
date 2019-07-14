import React, { Component } from 'react';
import service1 from '../resources/images/icons/service1.png';

class Service extends Component {
    state = {  }
    render() {  
        return ( 
            <div style={{flex:1}}>
                <center><img src={service1}/></center>
                <center><span style={{fontSize:20,fontWeight:"bold"}}>SMART CONTRATCTS <br />DEVELOPEMENET</span></center>
            </div>
         );
    }
}
 
export default Service;