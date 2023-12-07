
let buttonvoice = document.getElementById("btn")

let textarea = document.getElementById("ta")

textarea.style.visibility = 'hidden'

let instruction = "Bem vindo ao Desafio 4 por 4. O jogo tem como objetivo colocar todas as peças no tabuleiro. e pode ser jogado por um, dois ou quatro jogadores."

let comojogar = "Como Jogar."

let regra01 = "1. - Distribuição das peças. As 16 peças, sendo 4 de cada tipo (4 peças por 4 tipos) devem ser distribuídas igualmente entre os jogadores. Por exemplo, se forem dois jogadores, cada um deve receber oito peças. Sendo duas de cada tipo. Se forem quatro jogadores, cada um deve receber quatro peças, sendo uma de cada tipo. No caso de apenas um jogador, todas as 16 peças devem ser utilizadas. "

let regra02 = "2. - Inicio do jogo. No caso de mais de um jogador, defina quem inicia numa disputa de 0 ou 1. O ganhador da disputa inicia colocando uma peça em qualquer célula do tabuleiro."

let regra03 = "3. - Sequência do jogo. O jogo continua no sentido anti-horário. Os participantes jogam alternadamente, preenchendo cada um dos espaços vazios sendo que: peças do mesmo tipo não podem ocupar uma mesma linha. Coluna. Diagonal principal. Ou diagonal secundária."

let regra04 = "4 - Fim do jogo: A rodada termina quando não for mais possível colocar peças no tabuleiro seguindo a regra 3."

let regra05 = "5 - Vencedor: Ganha o jogo quem colocar todas as peças antes que os demais jogadores. No caso de empate, ganha quem tiver o menor número de peças na mão."

buttonvoice.addEventListener("click", () => {
    textarea.style.visibility = 'visible'
    let ut = new SpeechSynthesisUtterance(instruction)
    window.speechSynthesis.speak(ut)
    ut = new SpeechSynthesisUtterance(comojogar)
    window.speechSynthesis.speak(ut)
    ut = new SpeechSynthesisUtterance(regra01)
    window.speechSynthesis.speak(ut)
    ut = new SpeechSynthesisUtterance(regra02)
    window.speechSynthesis.speak(ut)
    ut = new SpeechSynthesisUtterance(regra03)
    window.speechSynthesis.speak(ut)
    ut = new SpeechSynthesisUtterance(regra04)
    window.speechSynthesis.speak(ut)
    ut = new SpeechSynthesisUtterance(regra05)
    window.speechSynthesis.speak(ut)
})


