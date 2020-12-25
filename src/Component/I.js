//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import J from './J';

import './i.css';

//create a class Component
export class I extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="i">Hello {this.props.myname} </h1>
                <J myname={'J'}/>
                
            </React.Fragment>
        );
    }
}
