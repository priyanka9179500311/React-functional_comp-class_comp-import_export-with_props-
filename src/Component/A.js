//import area
//import something from 'somelibrary';
import React,{Component} from 'react';

import B from './B';

//create a class Component
class A extends Component{
    //1.Property

    //2.Constructor

    //3.method
    //Every Class Component Must have a render method which returns HTML
    render(){
    
        return (
            <React.Fragment>
                <h1 className="a">Hello {this.props.myname} </h1>
                <B myname={'B'}/>
            </React.Fragment>
        );
    }
}
export default A;