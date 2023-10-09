

export class Trivia {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.isCorrect = data.correct_answer
        this.isIncorrect = data.incorrect_answers
    }

    get TriviaCardTemplate() {
        return `     <section class="row justify-content-center">
        <div class="col-6 m-4">
          <div class="trivia-cards shadow">
            <img src="https://www.signupgenius.com/cms/images/groups/100-Random-Trivia-Questions-1260x630.png"
              class="img-fluid img-style">
            <p class="p-1">${this.category}</p>
            <p class="p-1">${this.question}</p>
            <div class="d-flex justify-content-around">
              <button onclick="app.TriviaController.guessTrue()" class="btn btn-success rounded-pill fs-5">True</button>
              <button onclick="app.TriviaController.guessFalse()" class="btn btn-danger rounded-pill fs-5">False</button>
            </div>
          </div>
        </div>
      </section>`
    }
}