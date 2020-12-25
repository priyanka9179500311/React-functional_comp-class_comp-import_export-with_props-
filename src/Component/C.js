//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import'./c.css';

import D from './D';

//create a class Component
class C extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="c">Hello {this.props.myname} </h1>
                <D myname={'D'}/>
                
            </React.Fragment>
        );
    }
}
export default C;