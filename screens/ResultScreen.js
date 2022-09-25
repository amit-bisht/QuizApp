import {View,Text} from 'react-native'
import GameContext from '../store/game-context'
import {useContext,useEffect,useState} from 'react'
function ResultScreen(){
    const ctx=useContext(GameContext)
    const questions=ctx.questions
    const userSelectedAns=ctx.userSelectedAns
    const [scoreLoading,setScoreLoading]=useState(false)
    var score=0;
    useEffect(()=>{
        console.log("useEffect Result Screen Executed")
        for(var i=0;i<questions.length;i++){
            for(var j=0;j<userSelectedAns.length;j++){
                if(questions[i].id==userSelectedAns[j].quesId){
                    if(questions[i].correctAnswer==userSelectedAns[j].answer){
                        score++;
                        console.log("Correct Answer")
                        break;
                    }
                }
            }
            setScoreLoading(true)
        }
    },[])
    return(
        <View>
            {scoreLoading ? <Text>{score}</Text> : <Text>Score is Still loading</Text>}
        </View>
    )
}
export default ResultScreen