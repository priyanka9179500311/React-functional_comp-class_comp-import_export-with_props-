//import area
//import something from 'somelibrary';

import React from 'react';



import {I} from './I';

//create a functional Component
function H(props){
    return(
        <div>
            <h1 className="h">Hello {props.myname}</h1>
            <I myname={'I'}/>
        </div>
    )
}
export default H;