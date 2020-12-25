//import area
//import something from 'somelibrary';

import React from 'react';



import {W} from './W';

//create a functional Component
function V(props){
    return(
        <div>
            <h1 className="v">Hello {props.myname}</h1>
            <W myname={'W'}/>
        </div>
    )
}
export default V;