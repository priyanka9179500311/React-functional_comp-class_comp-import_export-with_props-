//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import N from './N';
import './m.css';

//create a class Component
export class M extends Component{//Named Export
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="m">Hello {this.props.myname} </h1>
                <N myname={'N'}/>
                
            </React.Fragment>
        );
    }
}
