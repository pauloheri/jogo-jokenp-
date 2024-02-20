const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
let humanScoreNumber=0
let machineScoreNumber=0
const result = document.querySelector('#result')
const playHuman = (humanchoice) => {
    playTheGame(humanchoice, playMachine())
   
}
const GAME_OPTIONS = {
    ROCK:'rock'
}
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}
const playTheGame = (human, machine) => {
    console.log('Humano:' + human + 'maquina:' + machine)
    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (
        (human === 'paper' && machine === GAME_OPTIONS.ROCK) ||
        (human === 'rock' && machine === 'scissors') || 
        (human === 'scissors' && machine === 'paper')) {
            
       humanScoreNumber++
       humanScore.innerHTML= humanScoreNumber
    
    result.innerHTML = 'Você ganhou!'
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu pra alexa'
    }
}