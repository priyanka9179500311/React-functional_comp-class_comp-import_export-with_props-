//import area
//import something from 'somelibrary';

import React from 'react';

import'./d.css';

import {E} from './E';

//create a functional Component
function D(props){
    return(
        <div>
            <h1 className="d">Hello {props.myname}</h1>
            <E myname={'E'}/>
        </div>
    )
}
export default D;