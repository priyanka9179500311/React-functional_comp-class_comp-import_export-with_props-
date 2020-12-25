//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import H from './H';

import './g.css';
//create a class Component
export class G extends Component{//Named Export
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="g">Hello {this.props.myname} </h1>
                <H myname={'H'}/>
                
            </React.Fragment>
        );
    }
}
