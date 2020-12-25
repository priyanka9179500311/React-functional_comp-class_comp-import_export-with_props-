//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import T from './T';

import './s.css';

//create a class Component
export class S extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="s">Hello {this.props.myname} </h1>
                <T myname={'T'}/>
                
            </React.Fragment>
        );
    }
}
