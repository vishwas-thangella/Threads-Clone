import React from 'react';
import { View,Text, StyleSheet,Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import SearchData from '../data/searchData';

const Search = () =>{
    return(
        <View style={Styles.container}>
            <ScrollView>
                <Text style={{color:"white",fontSize:24,marginLeft:4,marginTop:10}}>Search</Text>
                <TextInput style={{
                    backgroundColor:"gray",
                    borderRadius:10,
                    padding:3,
                    paddingLeft:10,
                    marginTop:10
                }} placeholder='Search'/>
                {
                    SearchData.map(dta=>{
                        return(
                            <View key={dta.profile} style={{
                                padding:10,
                                display:'flex',
                                flexDirection:'row',
                                gap:10,
                                justifyContent:'space-between',
                                alignItems:"center"
                            }}>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
                                    <Image style={{width:40,height:40,borderRadius:50}} source={{uri:dta.profile}}/>
                                    <View>
                                        <View style={{display:"flex",flexDirection:"row",gap:6,alignItems:'center'}}>
                                            <Text style={{color:"white"}}>{dta.username}</Text>
                                            <Image source={require('../assets/bluetick.png')} style={{width:15,height:15}}/>
                                        </View>
                                        <Text style={{color:"gray"}}>{dta.Fullname}</Text>
                                        <Text style={{color:"white"}}>{dta.followers}  Followers</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{borderColor:"black",borderRadius:10,borderWidth:1,padding:8}}>
                                    <Text style={{color:"white"}}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1,
        paddingTop:40
    }
});

export default Search;