//import area
//import something from 'somelibrary';

import React from 'react';



import {S} from './S';

//create a functional Component
function R(props){
    return(
        <div>
            <h1 className="r">Hello {props.myname}</h1>
            <S myname={'S'}/>
        </div>
    )
}
export default R;