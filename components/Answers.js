import { View, Pressable, StyleSheet, Text } from 'react-native'
import {useState} from 'react'
function Answers(props) {
    function selectAnswerHandler(){
        props.onSelectAnswer({id:props.id,answer:props.answer,quesId:props.quesId})
    }
    return (
        <View style={[styles.answerContainer,props.style]}>
            <Pressable onPress={selectAnswerHandler}>
                <View>
                    <Text>
                        {props.answer}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}
export default Answers;
const styles = StyleSheet.create({
    answerContainer: {
        backgroundColor: 'grey',
        margin: 5,
        padding: 10
    }
})