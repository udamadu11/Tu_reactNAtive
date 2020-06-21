import React from 'react';
import { View, Text} from 'react-native';
import { Card} from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/prompotions';
import { ScrollView } from 'react-native-gesture-handler';

function RenderDish(props){
    const item = props.item;
    if(item != null){
        return(
            <Card 
                featuredTitle={item.name}
                image={require('./images/uthappizza.png')}
            >
                <Text style={{margin:10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }else{
        return(<View></View>);
    }
}
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dishes:DISHES,
            prompotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    
    render(){
        return(
                <ScrollView>
                    <RenderDish item={this.state.dishes.filter((dish)=>dish.featured)[0]} />
                    <RenderDish item={this.state.prompotions.filter((promo)=>promo.featured)[0]} />
                    <RenderDish item={this.state.leaders.filter((leader)=>leader.featured)[0]} />
                </ScrollView>
        );
    }
}
export default Home;