//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import R from './R';


//create a class Component
export class Q extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="q">Hello {this.props.myname} </h1>
                <R myname={'R'}/>
                
            </React.Fragment>
        );
    }
}
