//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import Z from './Z';

import './y.css';

//create a class Component
export class Y extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="y">Hello {this.props.myname} </h1>
                <Z myname={'Z'}/>
                
            </React.Fragment>
        );
    }
}
