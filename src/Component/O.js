//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import P from './P';


//create a class Component
export class O extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="o">Hello {this.props.myname} </h1>
                <P myname={'P'}/>
                
            </React.Fragment>
        );
    }
}
