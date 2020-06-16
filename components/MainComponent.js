import React from 'react';
import {View } from 'react-native';
import {DISHES} from '../shared/dishes';
import Menu from './Menu';
import DishDetails from './DishDetails';
export default class MainComponent extends React.Component{
 constructor(props){
     super(props);
     this.state = {
         dishes : DISHES,
         selectedDish:null
     }
 }

 onDishSelected(dishId){
     this.setState({selectedDish:dishId})
 }
 render(){
     return(
         <View style={{flex:1}}>
            <Menu dishes={this.state.dishes}
            onPress={dishId => this.onDishSelected(dishId)}
            />
            <DishDetails  dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        </View>
     );
 }
}

