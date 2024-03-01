import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native';
import searchData from '../data/searchData';
import Entypo from 'react-native-vector-icons/Entypo';

const Write = () =>{
    const user = searchData[0];
    return(
        <View style={Styles.container}>
            <StatusBar style='hidden'/>
            <View style={{display:'flex',flexDirection:'row',gap:10}}>
                <Image source={{uri:user.profile}} style={{width:30,height:30,borderRadius:50,marginLeft:10,marginTop:5}}/>
                <View>
                    <Text style={{color:"white"}}>{user.username}</Text>
                    <TextInput placeholder='Start a thread...' style={{color:"gray"}} placeholderTextColor="gray"/>
                    <Entypo name="attachment" color="gray" size={15} style={{marginTop:10}}/>
                </View>
            </View>
            <View style={{position:"absolute",bottom:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                <Text style={{color:"gray"}}>Anyone can reply</Text>       
                <TouchableOpacity>
                    <Text style={{color:"skyblue"}}>Post</Text>    
                </TouchableOpacity>         
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
    }
});

export default Write;