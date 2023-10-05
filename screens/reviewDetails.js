import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default function ReviewDetails({route,navigation}){
    // const pressHandler = () => {
    //     navigation.navigate('Home');
    // }
    return <View  style={styles.container}>
        <Text>
            {route.params.title}
        </Text>
        <Text>
            {route.params.body}
        </Text>
        <Text>
            {route.params.rating}
        </Text>
        {/* <Button title={"Go Back"} onPress={pressHandler} /> */}
    </View>
}

const styles = StyleSheet.create({
    container:{
        padding:24,
    }
})