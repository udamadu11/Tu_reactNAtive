import React from 'react';
import { View, Text} from 'react-native';
import { Card} from 'react-native-elements';

export default class ContactComponent extends React.Component{

    render(){
        return(
            <Card
            title='Contact Information'>
            <Text style={{marginBottom: 10}}>121, Clear Water Bay Road</Text>
            <Text style={{marginBottom: 10}}>Clear Water Bay, Kowloon</Text>
            <Text style={{marginBottom: 10}}>HONG KONG</Text>
            <Text style={{marginBottom: 10}}>Tel: +852 1234 5678</Text>
            <Text style={{marginBottom: 10}}>Fax: +852 8765 4321</Text>
            <Text style={{marginBottom: 10}}>Email:confusion@food.net</Text>
            
            </Card>
        );
    }

} 



