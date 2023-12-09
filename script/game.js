var matriz = [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]

var v = 0;

var defeat = new Audio("/assets/sounds/defeat.mp3")
var victory = new Audio("/assets/sounds/victory.mp3")

let card = document.getElementById(sec)

// ============================================
const casa1 = document.getElementById("1")
casa1.addEventListener('click', (evt) => {
    v = casa1.value;
    evt.defaultPrevented
})

const casa2 = document.getElementById("2")
casa2.addEventListener('click', (evt) => {
    v = casa2.value;
    evt.defaultPrevented
})

const casa3 = document.getElementById("3")
casa3.addEventListener('click', (evt) => {
    v = casa3.value;
    evt.defaultPrevented
})

const casa4 = document.getElementById("4")
casa4.addEventListener('click', (evt) => {
    v = casa4.value;
    evt.defaultPrevented
})


// ============================================
const casaA = document.getElementById("11")
casaA.addEventListener('click', (evt) => {
    if (casaA.value === "") {
        if (isValid(1, 1, v)) {
            casaA.value = v
            matriz[0][0] = v
            isFinish()
        }
    } else {
        casaA.value = ""
        matriz[0][0] = ""
    }
    evt.defaultPrevented
})

const casaB = document.getElementById("12")
casaB.addEventListener('click', (evt) => {
    if (casaB.value === "") {
        if (isValid(1, 2, v)) {
            casaB.value = v
            matriz[0][1] = v
            isFinish()
        }
    } else {
        casaB.value = ""
        matriz[0][1] = ""
    }
    evt.defaultPrevented
})

const casaC = document.getElementById("13")
casaC.addEventListener('click', (evt) => {
    if (casaC.value === "") {
        if (isValid(1, 3, v)) {
            casaC.value = v
            matriz[0][2] = v
            isFinish()
        }
    } else {
        casaC.value = ""
        matriz[0][2] = ""
    }
    evt.defaultPrevented
})

const casaD = document.getElementById("14")
casaD.addEventListener('click', (evt) => {
    if (casaD.value === "") {
        if (isValid(1, 4, v)) {
            casaD.value = v
            matriz[0][3] = v
            isFinish()
        }
    } else {
        casaD.value = ""
        matriz[0][3] = ""
    }
    evt.defaultPrevented
})

// ============================================

const casaE = document.getElementById("21")
casaE.addEventListener('click', (evt) => {
    if (casaE.value === "") {
        if (isValid(2, 1, v)) {
            casaE.value = v
            matriz[1][0] = v
            isFinish()
        }
    } else {
        casaE.value = ""
        matriz[1][0] = ""
    }
    evt.defaultPrevented
})

const casaF = document.getElementById("22")
casaF.addEventListener('click', (evt) => {
    if (casaF.value === "") {
        if (isValid(2, 2, v)) {
            casaF.value = v
            matriz[1][1] = v
            isFinish()
        }
    } else {
        casaF.value = ""
        matriz[1][1] = ""
    }
    evt.defaultPrevented
})

const casaG = document.getElementById("23")
casaG.addEventListener('click', (evt) => {
    if (casaG.value === "") {
        if (isValid(2, 3, v)) {
            casaG.value = v
            matriz[1][2] = v
            isFinish()
        }
    } else {
        casaG.value = ""
        matriz[1][2] = ""
    }
    evt.defaultPrevented
})

const casaH = document.getElementById("24")
casaH.addEventListener('click', (evt) => {
    if (casaH.value === "") {
        if (isValid(2, 4, v)) {
            casaH.value = v
            matriz[1][3] = v
            isFinish()
        }
    } else {
        casaH.value = ""
        matriz[1][3] = ""
    }
    evt.defaultPrevented
})

// ============================================

const casaI = document.getElementById("31")
casaI.addEventListener('click', (evt) => {
    if (casaI.value === "") {
        if (isValid(3, 1, v)) {
            casaI.value = v
            matriz[2][0] = v
            isFinish()
        }
    } else {
        casaI.value = ""
        matriz[2][0] = ""
    }
    evt.defaultPrevented
})

const casaJ = document.getElementById("32")
casaJ.addEventListener('click', (evt) => {
    if (casaJ.value === "") {
        if (isValid(3, 2, v)) {
            casaJ.value = v
            matriz[2][1] = v
            isFinish()
        }
    } else {
        casaJ.value = ""
        matriz[2][1] = ""
    }
    evt.defaultPrevented
})

const casaK = document.getElementById("33")
casaK.addEventListener('click', (evt) => {
    if (casaK.value === "") {
        if (isValid(3, 3, v)) {
            casaK.value = v
            matriz[2][2] = v
            isFinish()
        }
    } else {
        casaK.value = ""
        matriz[2][2] = ""
    }
    evt.defaultPrevented
})

const casaL = document.getElementById("34")
casaL.addEventListener('click', (evt) => {
    if (casaL.value === "") {
        if (isValid(3, 4, v)) {
            casaL.value = v
            matriz[2][3] = v
            isFinish()
        }
    } else {
        casaL.value = ""
        matriz[2][3] = ""
    }
    evt.defaultPrevented
})


// ============================================

const casaM = document.getElementById("41")
casaM.addEventListener('click', (evt) => {
    if (casaM.value === "") {
        if (isValid(4, 1, v)) {
            casaM.value = v
            matriz[3][0] = v
            isFinish()
        }
    } else {
        casaM.value = ""
        matriz[3][0] = ""
    }
    evt.defaultPrevented
})

const casaN = document.getElementById("42")
casaN.addEventListener('click', (evt) => {
    if (casaN.value === "") {
        if (isValid(4, 2, v)) {
            casaN.value = v
            matriz[3][1] = v
            isFinish()
        }
    } else {
        casaN.value = ""
        matriz[3][1] = ""
    }
    evt.defaultPrevented
})

const casaO = document.getElementById("43")
casaO.addEventListener('click', (evt) => {
    if (casaO.value === "") {
        if (isValid(4, 3, v)) {
            casaO.value = v
            matriz[3][2] = v
            isFinish()
        }
    } else {
        casaO.value = ""
        matriz[3][2] = ""
    }
    evt.defaultPrevented
})


const casaP = document.getElementById("44")
casaP.addEventListener('click', (evt) => {
    if (casaP.value === "") {
        if (isValid(4, 4, v)) {
            casaP.value = v
            matriz[3][3] = v
            isFinish()
        }
    } else {
        casaP.value = ""
        matriz[3][3] = ""
    }
    evt.defaultPrevented
})

function isFinish() {
    let boo = true
    for(i=0;i<4;i++) {
        for(j=0;j<4;j++) {
            if(matriz[i][j] == "") {
                boo = false
            }
        }
    }
    if(boo == true) {
        victoryGame()
    }
}

function isValid(l, c, v) {
    var bo = false
    if(verificaColuna(c, v)) {
        if(verificaLinha(l, v)) {
            if(verificaDiagonal(l, c, v)) {
                bo = true
            }

        }

    }

    if(!bo) {
        defeat.play()
        alert("Voce perdeu")
        location.reload()
    }
    return bo
}

function verificaLinha(lin, val) {
    var boo = true
    for(var i=0; i<4; i++) {
        if(matriz[lin - 1][i] == val) {
            boo = false
        }
    }
    return boo
}

function verificaColuna(col, val) {
    var boo = true
    for(var i=0; i<4; i++) {
        if(matriz[i][col - 1] == val) {
            boo = false
        }
    }
    return boo
}

function verificaDiagonal(lin, col, val) {
    var j=3
    boo = true
    if(lin == col) {
        for(var i=0; i<4; i++) {
            if(matriz[i][i] == val) {
                boo = false
            }
        }
    }
    if((lin-1)+(col-1) == 3) {
        for(var i=0; i<4; i++) {
            if(matriz[i][j] == val) {
                boo = false
            }
            j = j - 1
        }
    }
    return boo
}

function victoryGame() {
    victory.play()
    setTimeout(alert("Voce Ganhou!!!"), 1000)
}