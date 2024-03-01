import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native';
import searchData from '../data/searchData';

const Activity = () =>{
    return(
        <View style={Styles.container}>
            <Text style={{color:"white",fontSize:20,margin:10}}>Activity</Text>
            <ScrollView>
                {
                    searchData.map(dta=>{
                        return(
                        <View style={{padding:10,display:"flex",flexDirection:"row",gap:10,alignItems:"center",justifyContent:"space-between"}} key={dta.profile}>
                            <View style={{display:"flex",flexDirection:"row",gap:5}}>
                                <Image source={{uri:dta.profile}} style={{width:30,height:30,borderRadius:50}}/>
                                <View>
                                    <View style={{display:"flex",flexDirection:"row",gap:7,alignItems:"center"}}>
                                        <Text style={{color:"white"}}>{dta.username}</Text>
                                        <Image source={require('../assets/bluetick.png')} style={{width:15,height:15}}/>
                                    </View>
                                    <Text style={{color:"gray"}}>Followed You</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{borderColor:"black",borderRadius:10,borderWidth:1,padding:8}}>
                                <Text style={{color:"white"}}>Follow</Text>
                            </TouchableOpacity>
                        </View>)
                    })
                }
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        paddingTop:40
    }
});

export default Activity;