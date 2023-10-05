import React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import Card from '../shared/Card';
import { images } from '../styles/global';

export default function ReviewDetails({route,navigation}){
    // const pressHandler = () => {
    //     navigation.navigate('Home');
    // }

    const rating = route.params.rating;

    return <View  style={styles.container}>
        <Card>
            <Text>
                {route.params.title}
            </Text>
            <Text>
                {route.params.body}
            </Text>
            <View style={styles.rating}>
                <Text>GameZone rating:</Text>
                <Image source={images.ratings[rating]} />
            </View>
        </Card>
        {/* <Button title={"Go Back"} onPress={pressHandler} /> */}
    </View>
}

const styles = StyleSheet.create({
    container:{
        padding:24,
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop:16,
        borderTopWidth:1,
        borderTopColor:'#eee'
    }
})