//import area
//import something from 'somelibrary';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//Default Export
import A from './Component/A';
import './global.css';


//object.method();
//React internally using JSX javascript Xtension markup language
ReactDOM.render(<A myname="A"/>,document.getElementById('root'));//actual argument