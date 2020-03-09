import React, { Component } from 'react';
import './Customize.css';
import ComputerParts from './ComputerParts';



class Customize extends Component {
    
    render() {

        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <ComputerParts  
                features={this.props.features} 
                selectedFeatures={this.props.selectedFeatures}
                handleChange={this.props.handleChange}/>
                
            </form>
        )
    }
};

export default Customize;