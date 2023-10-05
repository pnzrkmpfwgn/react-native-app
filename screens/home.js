import React,{useState} from 'react';
import {View,Text,StyleSheet, Button, TouchableOpacity, ImageBackground, Modal, Keyboard} from 'react-native';
import { globalStyles} from '../styles/global';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home({navigation}){
    const [reviews,setReviews] = useState([
        {title:'Zelda', rating:'3', body:'lorem ipsum',key:'1'},
        {title:'Mario', rating:'4', body:'lorem ipsum',key:'2'},
        {title:'Doom', rating:'5', body:'lorem ipsum',key:'3'},
    ])
    const [modalOpen,setModalOpen] = useState(false);
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }
    // const pressHandler = ()=>{
    //     navigation.navigate('ReviewDetails');
    //     // navigation.push('ReviewDetails);
    // }
    return <ImageBackground style={{flex:1}} source={require('../assets/game_bg.png')} >
    <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType='slide' >
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss} >
                <MaterialIcons 
                name='close'
                size={24}
                style={styles.modalToggle}
                onPress={()=>setModalOpen(false)}
            />
                <ReviewForm addReview={addReview} />
            
            </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons 
            name='add'
            size={24}
            onPress={()=>setModalOpen(true)}
        />
        <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)} >
                   <Card>
                   <Text style={globalStyles.titleText} >
                        {item.title}
                    </Text>
                   </Card>
                </TouchableOpacity>
            )}
        />
    
        {/* <Button title='go to review details' onPress={pressHandler} /> */}
    </View>
    </ImageBackground>
}

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        marginBottom:0
    }
})