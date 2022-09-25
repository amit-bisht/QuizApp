import { View,StyleSheet,TextInput,Text,Button } from "react-native";
import {useState,useContext} from 'react'
import GameContext from "../store/game-context";

function HomeScreen({navigation,route,onChangeUser}){
    const [userName,setUserName]=useState()
    const ctx=useContext(GameContext)
    function nameHandler(value){
        console.log(value)
        setUserName(value)
    }
    function submitHandler(){
        if(userName.length>0){
            ctx.onSetName(userName)
            navigation.navigate("QuizScreen")
        }else{
            return null;
        }
    }
    return(
        <View style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <TextInput placholder="Enter your name here" style={styles.input} onChangeText={nameHandler}/>
            </View>
            <View style={styles.innerContainer}>
                <Button title="Submit" onPress={submitHandler}/>
            </View>
        </View>
    )
}
export default HomeScreen;
const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'aqua'
    },
    innerContainer:{
        padding:10,
        margin:10,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        padding:2,
        borderBottomWidth:2,
        color:'black',
        fontSize:18,
        width:'40%',
        textAlign:'center'
    }
})
