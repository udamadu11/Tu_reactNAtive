import React from 'react';
import {DISHES} from '../shared/dishes';
import Menu from './Menu';

export default class MainComponent extends React.Component{
 constructor(props){
     super(props);
     this.state = {
         dishes : DISHES
     }
 }

 render(){
     return(
        <Menu dishes={this.state.dishes}></Menu>
     );
 }
}

