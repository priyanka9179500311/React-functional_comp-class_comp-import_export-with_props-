//import area
//import something from 'somelibrary';

import React from 'react';

import'./p.css';

import {Q} from './Q';

//create a functional Component
function P(props){
    return(
        <div>
            <h1 className="p">Hello {props.myname}</h1>
            <Q myname={'Q'}/>
        </div>
    )
}
export default P;