import React, {Component} from "react";

const Weather = (props) =>{

    return(
        <div className="info">
            {
                props.tempreature && 
                <p className="info-key">
                    Tempreature: 
                   <span className="into-value"> {props.tempreature}</span>
                </p>
            }
            { 
                props.city &&       
                <p className="info-key">
                    Ciry: 
                    <span className="into-value"> {props.city}</span>
                </p>
            } 
            { 
                props.country &&     
                <p className="info-key">
                    Counrty: 
                    <span className="into-value"> {props.country}</span>
                </p>
            } 
            { 
                props.humidity &&    
                <p className="info-key">
                    Humidity: 
                    <span className="into-value"> {props.humidity}</span>
                </p>
            }
            { 
                props.description && 
                <p className="info-key">
                    Description: 
                    <span className="into-value"> {props.description}</span>
                </p>
            }
        </div>
    )
}

export default Weather;