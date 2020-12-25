//import area
//import something from 'somelibrary';

import React from 'react';



import {M} from './M';

//create a functional Component
function L(props){
    return(
        <div>
            <h1 className="l">Hello {props.myname}</h1>
            <M myname={'M'}/>
        </div>
    )
}
export default L;