import { View, Text, StyleSheet, Button } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import GameContext from '../store/game-context'
import Answers from '../components/Answers'
function QuizScreen({ navigation, route }) {
    const ctx = useContext(GameContext)
    const [index, setIndex] = useState(0)
    const [ques, setQues] = useState(ctx.questions[index])
    const [answerSelected, setAnswerSelected] = useState({})
    const [isSelected, setIsSelected] = useState(false)
    const [buttonTitle, setButtonTitle] = useState("Next")
    const [isFinish, setIsFinish] = useState(false)
    useEffect(() => {
        if (index == ctx.questions.length - 1) {
            console.log("useEffect executed")
            setButtonTitle("Finish")
            setIsFinish(true)
        }
    })
    function nextQuestionHandler() {
        if (index >= ctx.questions.length - 1) {
            navigation.navigate("ResultScreen")
        }
        else {
            console.log("button pressed")
            const questionIndex = index + 1
            setIndex(questionIndex)
            setQues(ctx.questions[questionIndex])
            ctx.onSetUserAnswer(answerSelected)
            setIsSelected(false)
        }


    }
    function selectAnswerHandler(value) {
        console.log(value)
        setAnswerSelected(value)
        setIsSelected(true)
    }
    return (
        <View style={styles.rootContainer}>
            <Text>{ques.question}</Text>
            <>{ques.incorrectAnswers.map(item => <Answers style={answerSelected.id == item.id && { backgroundColor: 'pink' }} quesId={ques.id} id={item.id} onSelectAnswer={selectAnswerHandler} key={Math.random()} answer={item.ans} />)}</>
            <Button title={buttonTitle} disabled={!isSelected} onPress={nextQuestionHandler} />
        </View>
    )
}
export default QuizScreen
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        margin: 10,
        padding: 20

    }
})