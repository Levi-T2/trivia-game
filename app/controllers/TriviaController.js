import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { setHTML } from "../utils/Writer.js"


function _drawTrivia() {
    const trivia = AppState.trivia
    let content = ''
    trivia.forEach(trivia => content += trivia.TriviaCardTemplate)
    setHTML('triviaCards', content)
}

function _drawRandomTrivia() {
    const currentTrivia = AppState.activeTrivia

    if (!currentTrivia) {
        setHTML('triviaCards', '')
        return
    }

    console.log('drawing active trivia', currentTrivia)


    setHTML('triviaCards', currentTrivia.TriviaCardTemplate)
}

export class TriviaController {
    constructor() {
        console.log('Trivia controller is online.')
        this.getTrivia()


        // AppState.on('triviaActive', _drawRandomTrivia)
    }


    async getTrivia() {
        try {
            await triviaService.getTrivia(
                console.log('got trivia from the service')
            )
        } catch (error) {
            console.log(error)
        }
    }

    getRandomTrivia() {
        triviaService.getRandomTrivia()
        console.log(AppState.activeTrivia)
        _drawRandomTrivia()
    }

    guessTrue() {
        triviaService.guessTrue()
    }

    guessFalse() {
        triviaService.guessFalse()
    }
}