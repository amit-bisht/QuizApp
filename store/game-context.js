import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'

const GameContext = React.createContext({
    name: "",
    loading: null,
    questions: [],
    userSelectedAns:[],
    onSetName: (value) => { },
    onSetUserAnswer:(value)=>{}
})
export default GameContext

export const GameContextProvider = (props) => {
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState([])
    const [name,setName]=useState("")
    const [userAnswers,setUserAnswers]=useState([])
    function setNameHandler(value){
        setName(value)
    }
    function setUserAnswerHandler(value){
        console.log("gamecontext recieving value")
        console.log(value)
        setUserAnswers((preveState)=>{
            return([...preveState,value])
        })
        console.log(userAnswers)
    }
    const initialValue = {
        name: name,
        loading: loading,
        questions: questions,
        userSelectedAns:[],
        onSetName:setNameHandler,
        onSetUserAnswer:setUserAnswerHandler
    }
    
    async function getQuestion() {
        try {
            const response = await axios.get('https://the-trivia-api.com/api/questions');
            console.log(loading)
            console.log(response.data);
            for(var i=0;i<response.data.length;i++){
                response.data[i].incorrectAnswers.push(response.data[i].correctAnswer)
            }
            const newData=response.data.map((item)=>{
                return({
                    id:item.id,
                    correctAnswer:item.correctAnswer,
                    incorrectAnswers:item.incorrectAnswers.map((answer)=>{
                        return({
                            id:Math.random(),
                            ans:answer
                        })
                    }),
                    question:item.question
                })
            })
            console.log(newData)
            setLoading(false)
            setQuestions(newData)
            
        } catch (error) {
            console.error(error);
            setLoading(true)
        }
    }

    useEffect(() => {
        console.log("yes logged in")
        getQuestion()
    }, [])
    return (
        <GameContext.Provider value={initialValue}>
            {props.children}
        </GameContext.Provider>
    )
}