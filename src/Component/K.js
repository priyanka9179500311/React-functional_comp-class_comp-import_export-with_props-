//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import L from './L';

import './k.css';
//create a class Component
export class K extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="k">Hello {this.props.myname} </h1>
                <L myname={'L'}/>
                
            </React.Fragment>
        );
    }
}
