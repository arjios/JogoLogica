var matriz = [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]

var v = 0;

var soundError = new Audio("/assets/sounds/error.mp3")

// ============================================
const casa1 = document.getElementById("1")
casa1.addEventListener('click', (evt) => {
    v = casa1.value;
    console.log(v)
    evt.defaultPrevented
})

const casa2 = document.getElementById("2")
casa2.addEventListener('click', (evt) => {
    v = casa2.value;
    console.log(v)
    evt.defaultPrevented
})

const casa3 = document.getElementById("3")
casa3.addEventListener('click', (evt) => {
    v = casa3.value;
    console.log(v)
    evt.defaultPrevented
})

const casa4 = document.getElementById("4")
casa4.addEventListener('click', (evt) => {
    v = casa4.value;
    console.log(v)
    evt.defaultPrevented
})


// ============================================
const casaA = document.getElementById("11")
casaA.addEventListener('click', (evt) => {
    if (casaA.value === "") {
        if (isValid(1, 1, v)) {
            casaA.value = v
            matriz[0][0] = v
        }
    } else {
        casaA.value = ""
        matriz[0][0] = ""
        console.log("Entrada invalida")
    }
    console.log(v)
    evt.defaultPrevented
})

const casaB = document.getElementById("12")
casaB.addEventListener('click', (evt) => {
    if (casaB.value === "") {
        if (isValid(1, 2, v)) {
            casaB.value = v
            matriz[0][1] = v
        }
    } else {
        casaB.value = ""
        matriz[0][1] = ""
        console.log("Entrada invalida")
    }
    console.log(v)
    evt.defaultPrevented
})

const casaC = document.getElementById("13")
casaC.addEventListener('click', (evt) => {
    if (casaC.value === "") {
        if (isValid(1, 3, v)) {
            casaC.value = v
            matriz[0][2] = v
        }
    } else {
        casaC.value = ""
        matriz[0][2] = ""
        console.log("Entrada invalida")
    }
    console.log(casaC.value)
    evt.defaultPrevented
})

const casaD = document.getElementById("14")
casaD.addEventListener('click', (evt) => {
    if (casaD.value === "") {
        if (isValid(1, 4, v)) {
            casaD.value = v
            matriz[0][3] = v
        }
    } else {
        casaD.value = ""
        matriz[0][3] = ""
        console.log("Entrada invalida")
    }
    console.log(casaD.value)
    evt.defaultPrevented
})

// ============================================

const casaE = document.getElementById("21")
casaE.addEventListener('click', (evt) => {
    if (casaE.value === "") {
        if (isValid(2, 1, v)) {
            casaE.value = v
            matriz[1][0] = v
        }
    } else {
        casaE.value = ""
        matriz[1][0] = ""
        console.log("Entrada invalida")
    }
    console.log(casaE.value)
    evt.defaultPrevented
})

const casaF = document.getElementById("22")
casaF.addEventListener('click', (evt) => {
    if (casaF.value === "") {
        if (isValid(2, 2, v)) {
            casaF.value = v
            matriz[1][1] = v
        }
    } else {
        casaF.value = ""
        matriz[1][1] = ""
        console.log("Entrada invalida")
    }
    console.log(casaF.value)
    evt.defaultPrevented
})

const casaG = document.getElementById("23")
casaG.addEventListener('click', (evt) => {
    if (casaG.value === "") {
        if (isValid(2, 3, v)) {
            casaG.value = v
            matriz[1][2] = v
        }
    } else {
        casaG.value = ""
        matriz[1][2] = ""
        console.log("Entrada invalida")
    }
    console.log(casaG.value)
    evt.defaultPrevented
})

const casaH = document.getElementById("24")
casaH.addEventListener('click', (evt) => {
    if (casaH.value === "") {
        if (isValid(2, 4, v)) {
            casaH.value = v
            matriz[1][3] = v
        }
    } else {
        casaH.value = ""
        matriz[1][3] = ""
        console.log("Entrada invalida")
    }
    console.log(casaH.value)
    evt.defaultPrevented
})

// ============================================

const casaI = document.getElementById("31")
casaI.addEventListener('click', (evt) => {
    if (casaI.value === "") {
        if (isValid(3, 1, v)) {
            casaI.value = v
            matriz[2][0] = v
        }
    } else {
        casaI.value = ""
        matriz[2][0] = ""
        console.log("Entrada invalida")
    }
    console.log(casaI.value)
    evt.defaultPrevented
})

const casaJ = document.getElementById("32")
casaJ.addEventListener('click', (evt) => {
    if (casaJ.value === "") {
        if (isValid(3, 2, v)) {
            casaJ.value = v
            matriz[2][1] = v
        }
    } else {
        casaJ.value = ""
        matriz[2][1] = ""
        console.log("Entrada invalida")
    }
    console.log(casaJ.value)
    evt.defaultPrevented
})

const casaK = document.getElementById("33")
casaK.addEventListener('click', (evt) => {
    if (casaK.value === "") {
        if (isValid(3, 3, v)) {
            casaK.value = v
            matriz[2][2] = v
        }
    } else {
        casaK.value = ""
        matriz[2][2] = ""
        console.log("Entrada invalida")
    }
    console.log(casaK.value)
    evt.defaultPrevented
})

const casaL = document.getElementById("34")
casaL.addEventListener('click', (evt) => {
    if (casaL.value === "") {
        if (isValid(3, 4, v)) {
            casaL.value = v
            matriz[2][3] = v
        }
    } else {
        casaL.value = ""
        matriz[2][3] = ""
        console.log("Entrada invalida")
    }
    console.log(casaL.value)
    evt.defaultPrevented
})


// ============================================

const casaM = document.getElementById("41")
casaM.addEventListener('click', (evt) => {
    if (casaM.value === "") {
        if (isValid(4, 1, v)) {
            casaM.value = v
            matriz[3][0] = v
        }
    } else {
        casaM.value = ""
        matriz[3][0] = ""
        console.log("Entrada invalida")
    }
    console.log(casaM.value)
    evt.defaultPrevented
})

const casaN = document.getElementById("42")
casaN.addEventListener('click', (evt) => {
    if (casaN.value === "") {
        if (isValid(4, 2, v)) {
            casaN.value = v
            matriz[3][1] = v
        }
    } else {
        casaN.value = ""
        matriz[3][1] = ""
        console.log("Entrada invalida")
    }
    console.log(casaN.value)
    evt.defaultPrevented
})

const casaO = document.getElementById("43")
casaO.addEventListener('click', (evt) => {
    if (casaO.value === "") {
        if (isValid(4, 3, v)) {
            casaO.value = v
            matriz[3][2] = v
        }
    } else {
        casaO.value = ""
        matriz[3][2] = ""
        console.log("Entrada invalida")
    }
    console.log(casaO.value)
    evt.defaultPrevented
})


const casaP = document.getElementById("44")
casaP.addEventListener('click', (evt) => {
    if (casaP.value === "") {
        if (isValid(4, 4, v)) {
            casaP.value = v
            matriz[3][3] = v
        }
    } else {
        casaP.value = ""
        matriz[3][3] = ""
    }
    console.log(casaP.value)
    evt.defaultPrevented
})


function isValid(l, c, v) {
    var bo = false
    if(verificaColuna(c, v)) {
        if(verificaLinha(l, c, v)) {
            if(verificaDiagonal(l, c, v)) {
                bo = true
            }

        }

    }

    if(!bo) {
        soundError.play()
        alert("Voce perdeu")
        location.reload()
    }
    console.log(bo)
    return bo
}

function verificaLinha(lin, col, val) {
    console.log("Função verificaLinha: Coluna= ", col-1, " Linha= ", lin-1, "Valor= ", val )
    var boo = true
    for(var i=0; i<4; i++) {
        console.log("lin= ", lin -1, "col= ", i, "val= ", val, "Matriz= ", matriz[lin - 1][i])
        if(matriz[lin - 1][i] == val) {
            console.log("Linha - Valor matriz= ", matriz[lin - 1][i], " Valor inserido= ", val)
            boo = false
        }
    }
    return boo
}

function verificaColuna(col, val) {
    console.log("Função verificaColuna: Coluna= ", col-1, "Valor= ", val )
    var boo = true
    for(var i=0; i<4; i++) {
        if(matriz[i][col - 1] == val) {
            console.log("Coluna - Valor matriz= ", matriz[i][col - 1], " Valor inserido= ", val)
            boo = false
        }
    }
    return boo
}

function verificaDiagonal(lin, col, val) {
    console.log("Função verificaDiagonal: Coluna= ", col-1, " Linha= ", lin-1, "Valor= ", val )
    var j=3
    boo = true
    if(lin == col) {
        for(var i=0; i<4; i++) {
            if(matriz[i][i] == val) {
                console.log("Coluna - Valor matriz= ", matriz[i][i], " Valor inserido= ", val)
                boo = false
            }
        }
    }
    if((lin-1)+(col-1) == 3) {
        for(var i=0; i<4; i++) {
            if(matriz[i][j] == val) {
                console.log("Coluna - Valor matriz= ", matriz[i][j], " Valor inserido= ", val)
                boo = false
            }
            j = j - 1
            console.log("I= ", i, " J= ", j)
        }
    }
    return boo
}

function errorColor() {
    console.log("Audio de Erro")
}