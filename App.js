import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Search from './screens/Search';
import Write from './screens/Write';
import Activity from './screens/Activity';
import Profile from './screens/Profile';


export default function App({navigation}) {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
          backgroundColor:"black",
          borderTopColor:"black"
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:({size,color,focused})=><Foundation name="home" size={size} color={focused ? 'white' : '#585c59'}/>,
        }}/>
        <Tab.Screen name='search' component={Search} options={{
          tabBarIcon:({size,focused,color})=><Feather name="search" size={size} color={focused ? 'white' : '#585c59'}/>
        }}/>
        <Tab.Screen name="write" component={Write} options={{
          tabBarIcon:({size,focused,color})=><SimpleLineIcons name="note" size={size} color={focused ? 'white' : '#585c59'}/>,
          headerLeft:()=><View style={{display:"flex",flexDirection:"row",gap:10}}>
          <AntDesign name="close" size={24} color="white" onPress={()=>{
              navigation.navigate('Home');
          }}/>
          <Text style={{color:"white"}}>New Thread</Text>
          </View>,
          headerShown:true,
          headerStyle:{
            backgroundColor:"black"
          },
          headerTitle:''
        }}/>
        <Tab.Screen name="activity" component={Activity} options={{
          tabBarIcon:({focused,size})=><IonIcons name={focused ? 'heart' : 'heart-outline'} size={size} color={
            focused ? 'white' : '#585c59'
          }/>
        }}/>
        <Tab.Screen name="profile" component={Profile} options={{
          tabBarIcon:({focused,size})=><IonIcons name="person" size={size} color={
            focused ? 'white' : '#585c59'
          }/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
