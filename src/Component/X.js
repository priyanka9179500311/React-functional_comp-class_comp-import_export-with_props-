//import area
//import something from 'somelibrary';

import React from 'react';


import {Y} from './Y';

//create a functional Component
function X(props){
    return(
        <div>
            <h1 className="x">Hello {props.myname}</h1>
            <Y myname={'Y'}/>
        </div>
    )
}
export default X;