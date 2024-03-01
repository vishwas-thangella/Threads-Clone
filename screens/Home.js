import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import Icon from '../assets/icon.png';
import HomeData from '../data/HomeData';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () =>{
    
    return(
        <View style={Styles.container}>
            <ScrollView>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../assets/logo.png')} style={{
                        width:30,height:30
                    }}/>
                </View>
                {
                    HomeData.map(dta=>{
                        return(
                            <View style={{padding:10,display:"flex",flexDirection:"row",gap:10,alignItems:'flex-start'}} key={dta.threadContent}>
                                <View style={{display:"flex",flexDirection:"column",justifyContent:'center',gap:2,alignItems:'center',height:'auto'}}>
                                    <Image source={{uri:dta.profile}} style={{width:30,height:30,borderRadius:50}}/>
                                    <View style={{width:1,height:dta.attachment ? 300 : 10,backgroundColor:'gray'}}></View>
                                    <View style={{display:"flex",flexDirection:"row"}}>
                                        <Image source={{uri:dta.profile}} style={{width:14,height:14,borderRadius:50}}/>
                                        <Image source={{uri:dta.profile}} style={{width:14,height:14,borderRadius:50}}/>
                                    </View>
                                </View>
                                <View style={{width:'100%'}}>
                                    <View style={{display:"flex",flexDirection:'row',gap:5,alignItems:"center"}}>
                                        <Text style={{color:"white",fontSize:13}}>{dta.username}</Text>
                                        <Image source={require('../assets/bluetick.png')} style={{width:12,height:12}}/>
                                    </View>
                                    <Text style={{color:"white"}}>{dta.threadContent}</Text>
                                    {dta.attachment && <Image source={{uri:dta.attachment}} style={{width:'100%',borderRadius:8,height:300,marginTop:10}}/>}
                                    <View style={{paddingTop:10,display:"flex",flexDirection:"row",gap:3}}>
                                        <IonIcons name="heart-outline" color="white" size={24}/>
                                        <FontAwesome name="comment-o" color="white" size={24}/>
                                        <Image source={require('../assets/reshare.png')} style={{width:30,height:30,marginTop:-3}}/>
                                        <Image source={require('../assets/share.png')} style={{width:20,height:20,marginTop:3}}/>
                                    </View>
                                    <View style={{display:'flex',flexDirection:'row',gap:10}}>
                                        <Text style={{color:"gray"}}>{dta.replies} Replies</Text>
                                        <Text style={{color:"gray"}}>{dta.likes} likes</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};

export default Home;

const Styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        paddingTop:20
    }
});