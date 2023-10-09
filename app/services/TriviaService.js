import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"
import { Pop } from "../utils/Pop.js"

class TriviaService {
    async getTrivia() {
        const response = await axios.get('https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=boolean')
        // console.log('got the trivia data', response.data.results)

        const newTrivia = response.data.results.map(TriviaPOJO => new Trivia(TriviaPOJO))
        // console.log('i hope this works:', newTrivia)
        AppState.trivia = newTrivia
        console.log('this is in the App State', AppState.trivia)
    }


    getRandomTrivia() {
        const arrayOfTrivia = AppState.trivia
        const randomIndex = Math.floor(Math.random() * arrayOfTrivia.length)
        // console.log('random index', randomIndex)
        // console.log(arrayOfTrivia[randomIndex])
        let newTriviaCard = arrayOfTrivia[randomIndex]
        // console.log(newTriviaCard)
        AppState.activeTrivia = newTriviaCard
        AppState.trivia.push(newTriviaCard)
        console.log(AppState.activeTrivia)
    }

    guessTrue() {
        const activeTrivia = AppState.activeTrivia
        // console.log(activeTrivia.isCorrect)
        if (activeTrivia.isCorrect == "True") {
            Pop.toast('You got it right!')
        } else {
            Pop.toast('wrong')
        }
    }

    guessFalse() {
        const activeTrivia = AppState.activeTrivia
        // console.log(activeTrivia.isCorrect)
        if (activeTrivia.isCorrect == "False") {
            Pop.toast('you got it right!')
        } else {
            Pop.toast('wrong')
        }
    }
}

export const triviaService = new TriviaService()

