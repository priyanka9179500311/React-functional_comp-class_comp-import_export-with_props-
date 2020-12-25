//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import X from './X';

import './w.css';
//create a class Component
export class W extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="w">Hello {this.props.myname} </h1>
                <X myname={'X'}/>
                
            </React.Fragment>
        );
    }
}
