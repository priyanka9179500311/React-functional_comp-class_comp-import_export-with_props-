//import area
//import something from 'somelibrary';

import React from 'react';
import C from './C';
//create a functional Component
function B(props){
    return(
        <div>
            <h1 className="b">Hello {props.myname}</h1>
            <C myname={'C'}/>
        </div>
    )
}
export default B;