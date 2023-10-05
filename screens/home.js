import React,{useState} from 'react';
import {View,Text,StyleSheet, Button, TouchableOpacity} from 'react-native';
import { globalStyles} from '../styles/global';
import { FlatList } from 'react-native-gesture-handler';


export default function Home({navigation}){
    const [reviews,setReviews] = useState([
        {title:'Zelda', rating:5, body:'lorem ipsum',key:'1'},
        {title:'Mario', rating:5, body:'lorem ipsum',key:'2'},
        {title:'Doom', rating:5, body:'lorem ipsum',key:'3'},
    ])
    // const pressHandler = ()=>{
    //     navigation.navigate('ReviewDetails');
    //     // navigation.push('ReviewDetails);
    // }
    return <View  style={globalStyles.container}>
        <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)} >
                    <Text style={globalStyles.titleText} >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )}
        />
        {/* <Button title='go to review details' onPress={pressHandler} /> */}
    </View>
}