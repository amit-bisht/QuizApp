import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import QuizScreen from "./screens/QuizScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ResultScreen from "./screens/ResultScreen";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GameContextProvider } from "./store/game-context";
import GameContext from "./store/game-context";
import { useContext } from 'react'
function App() {

  const Stack = createNativeStackNavigator()
  const ctx = useContext(GameContext)

  return (
    <GameContextProvider>
      {ctx.loading ? <LoadingScreen /> :
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="QuizScreen" component={QuizScreen} />
            <Stack.Screen name="ResultScreen" component={ResultScreen} />
          </Stack.Navigator>
        </NavigationContainer>

      }
    </GameContextProvider>
  )
}
export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})