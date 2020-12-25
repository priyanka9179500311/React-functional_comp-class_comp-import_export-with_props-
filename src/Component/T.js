//import area
//import something from 'somelibrary';

import React from 'react';



import {U} from './U';

//create a functional Component
function T(props){
    return(
        <div>
            <h1 className="t">Hello {props.myname}</h1>
            <U myname={'U'}/>
        </div>
    )
}
export default T;