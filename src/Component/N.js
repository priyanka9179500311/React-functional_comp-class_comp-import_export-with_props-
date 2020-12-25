//import area
//import something from 'somelibrary';

import React from 'react';


import {O} from './O';

//create a functional Component
function N(props){
    return(
        <div>
            <h1 className="n">Hello {props.myname}</h1>
            <O myname={'O'}/>
        </div>
    )
}
export default N;