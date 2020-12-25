//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import V from './V';

import './u.css';

//create a class Component
export class U extends Component{//Named Export
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="u">Hello {this.props.myname} </h1>
                <V myname={'V'}/>
                
            </React.Fragment>
        );
    }
}
