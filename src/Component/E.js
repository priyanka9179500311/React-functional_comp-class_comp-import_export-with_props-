//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import F from './F';


//create a class Component
export class E extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="e">Hello {this.props.myname} </h1>
                <F myname={'F'}/>
                
            </React.Fragment>
        );
    }
}
