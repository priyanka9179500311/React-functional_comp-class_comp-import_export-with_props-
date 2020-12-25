//import area
//import something from 'somelibrary';

import React from 'react';
import {G} from './G';


//create a functional Component
function F(props){
    return(
        <div>
            <h1 className="f">Hello {props.myname}</h1>
            <G myname={'G'}/>
        </div>
    )
}
export default F;